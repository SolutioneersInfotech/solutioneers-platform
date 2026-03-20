"use client";

import React, { useEffect, useRef, useState } from "react";
import "./particle.scss";

/* ================= TYPES ================= */

interface Particle {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
}

interface ParticlesProps {
    quantity?: number;
    staticity?: number;
    ease?: number;
    size?: number;
    refresh?: boolean;
    color?: string;
    vx?: number;
    vy?: number;
}

/* ================= UTILS ================= */

const hexToRgb = (hex: string): [number, number, number] => {
    hex = hex.replace("#", "");

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((c) => c + c)
            .join("");
    }

    const num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
};

/* ================= HOOK ================= */

const useMousePosition = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, []);

    return pos;
};

/* ================= COMPONENT ================= */

export const Particles: React.FC<ParticlesProps> = ({
    quantity = 100,
    staticity = 50,
    ease = 50,
    size = 0.4,
    refresh = false,
    color = "#ffffff",
    vx = 0,
    vy = 0,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const ctx = useRef<CanvasRenderingContext2D | null>(null);

    const circles = useRef<Particle[]>([]);
    const raf = useRef<number | null>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const mousePos = useMousePosition();

    const canvasSize = useRef({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    // Store velocity props in refs to access latest values in animation loop
    const velocityRef = useRef({ vx, vy });

    /* ================= CORE ================= */

    const initCanvas = () => {
        resizeCanvas();
    };

    const resizeCanvas = () => {
        if (!canvasRef.current || !containerRef.current || !ctx.current) return;

        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;

        canvasSize.current = { w: width, h: height };

        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;

        ctx.current.setTransform(dpr, 0, 0, dpr, 0, 0);

        circles.current = [];
        for (let i = 0; i < quantity; i++) {
            circles.current.push(createParticle());
        }
    };

    const createParticle = (): Particle => ({
        x: Math.random() * canvasSize.current.w,
        y: Math.random() * canvasSize.current.h,
        translateX: 0,
        translateY: 0,
        size: Math.random() * 2 + size,
        alpha: 0,
        targetAlpha: Math.random() * 0.6 + 0.1,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
        magnetism: 0.1 + Math.random() * 4,
    });

    const updateMouse = () => {
        if (!canvasRef.current) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = mousePos.x - rect.left - canvasSize.current.w / 2;
        const y = mousePos.y - rect.top - canvasSize.current.h / 2;

        mouse.current = { x, y };
    };

    const clear = () => {
        ctx.current?.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    };

    const rgb = hexToRgb(color);

    const draw = (p: Particle) => {
        if (!ctx.current) return;

        ctx.current.beginPath();
        ctx.current.arc(
            p.x + p.translateX,
            p.y + p.translateY,
            p.size,
            0,
            Math.PI * 2
        );
        ctx.current.fillStyle = `rgba(${rgb.join(",")}, ${p.alpha})`;
        ctx.current.fill();
    };

    const animate = () => {
        clear();

        circles.current.forEach((p, i) => {
            p.alpha += (p.targetAlpha - p.alpha) * 0.05;

            p.x += p.dx + velocityRef.current.vx;
            p.y += p.dy + velocityRef.current.vy;

            p.translateX +=
                (mouse.current.x / (staticity / p.magnetism) - p.translateX) / ease;

            p.translateY +=
                (mouse.current.y / (staticity / p.magnetism) - p.translateY) / ease;

            draw(p);

            if (
                p.x < -p.size ||
                p.x > canvasSize.current.w + p.size ||
                p.y < -p.size ||
                p.y > canvasSize.current.h + p.size
            ) {
                circles.current[i] = createParticle();
            }
        });

        raf.current = requestAnimationFrame(animate);
    };

    /* ================= INIT ================= */

    useEffect(() => {
        velocityRef.current = { vx, vy };
    }, [vx, vy]);

    useEffect(() => {
        if (!canvasRef.current) return;
        ctx.current = canvasRef.current.getContext("2d");

        initCanvas();
        animate();

        const handleResize = debounce(initCanvas, 200);
        window.addEventListener("resize", handleResize);

        return () => {
            if (raf.current) cancelAnimationFrame(raf.current);
            window.removeEventListener("resize", handleResize);
        };
    }, [color]);

    useEffect(() => {
        updateMouse();
    }, [mousePos]);

    useEffect(() => {
        initCanvas();
    }, [refresh]);

    /* ================= RENDER ================= */

    return (
        <div ref={containerRef} className="wrapper">
            <canvas ref={canvasRef} className="canvas" />
        </div>
    );
};

/* ================= HELPERS ================= */

function debounce(fn: () => void, delay: number) {
    let t: NodeJS.Timeout;
    return () => {
        clearTimeout(t);
        t = setTimeout(fn, delay);
    };
}