"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
export type ServiceItem = { name: string; desc: string };
export type Category = { id: string; number: string; title: string; tagline: string; accent: string; area: string; services: ServiceItem[] };
export const SERVICES: Category[] = [
    { id: "automation", number: "01", title: "Automation", tagline: "Scale intelligently. Work less, achieve more.", accent: "#6ee7b7", area: "one", services: [{ name: "Agentic Automation", desc: "Self-directed AI workflows." }, { name: "AI Automation", desc: "LLM pipelines for decision making." }, { name: "No-Code Automation", desc: "Visual workflow builders." }, { name: "Process Automation", desc: "Rule based automation systems." }] },
    { id: "development", number: "02", title: "Development", tagline: "From idea to production-ready product.", accent: "#93c5fd", area: "two", services: [{ name: "Web Development", desc: "Full-stack SaaS platforms." }, { name: "Android Apps", desc: "Native Android applications." }, { name: "iOS Apps", desc: "Swift-based iOS apps." }, { name: "Custom Websites", desc: "Fully coded websites." }] },
    { id: "design", number: "03", title: "Design", tagline: "Interfaces users trust and love.", accent: "#f9a8d4", area: "three", services: [{ name: "UI / UX Design", desc: "Human centred design." }, { name: "Brand Identity", desc: "Memorable visual systems." }, { name: "Prototyping", desc: "Interactive prototypes." }] },
    { id: "cloud", number: "04", title: "Cloud & DevOps", tagline: "Infrastructure that scales infinitely.", accent: "#fcd34d", area: "four", services: [{ name: "AWS Architecture", desc: "Scalable infrastructure." }, { name: "CI/CD Pipelines", desc: "Automated deployments." }, { name: "Docker & Kubernetes", desc: "Container orchestration." }, {name: "SAP Cloud Expertise", desc: "End-to-End SAP S/4 HANA Solutions, Cloud Integration"}] },
    { id: "ai", number: "05", title: "AI Systems", tagline: "Intelligent systems for modern products.", accent: "#a78bfa", area: "five", services: [{ name: "AI Integrations", desc: "AI powered applications." }, { name: "Custom LLMs", desc: "Tailored language models." }, { name: "AI Consulting", desc: "Strategic AI guidance." }] },
];
export default function Services() {

    const [active, setActive] = useState<Category | null>(null)
    const [hovering, setHovering] = useState(false)

    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    function handleMouseMove(e: React.MouseEvent) {

        if (!hovering) return

        setMouse({
            x: e.clientX,
            y: e.clientY
        })
    }

    return (
        <section
            className="services"
            onMouseMove={handleMouseMove}
            id="services"
        >
            <div className="titleHeader">
                <h2>Services</h2>
                <p>Delivering technology that solves real business problems</p>
            </div>
            {/* Cursor follower */}

            <AnimatePresence>
                {hovering && !active && (
                    <motion.div
                        className="cursorFollower"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: mouse.x,
                            y: mouse.y
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                    >
                        Click Me
                    </motion.div>
                )}
            </AnimatePresence>


            {/* GRID */}

            <div className="gridContainer">

                {SERVICES.map((cat) => (
                    <motion.div
                        key={cat.id}
                        layoutId={cat.id}
                        className={`gridBx ${cat.area}`}
                        style={{ "--accent": cat.accent } as React.CSSProperties}

                        onClick={() => {
                            if (active) return
                            setActive(cat)
                        }}

                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                    >

                        <span className="serviceNumber">
                            {cat.number}
                        </span>

                        <h3 className="serviceTitle">
                            {cat.title}
                        </h3>

                        <p className="serviceDesc">
                            {cat.tagline}
                        </p>

                        <ul className="serviceTags">
                            {cat.services.slice(0, 4).map(s => (
                                <li key={s.name}>{s.name}</li>
                            ))}
                        </ul>

                        {/* Mobile services */}

                        <div className="mobileServices">
                            {cat.services.map(s => (
                                <div key={s.name} className="mobileSvc">
                                    <div className="mobileSvcName">{s.name}</div>
                                    <div className="mobileSvcDesc">{s.desc}</div>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                ))}

            </div>


            {/* MODAL */}

            <AnimatePresence>

                {active && (
                    <>
                        <motion.div
                            className="servicesBackdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActive(null)}
                        />

                        <motion.div
                            layoutId={active.id}
                            className="servicesExpanded"
                            style={{
                                borderTop: `3px solid ${active.accent}`
                            }}
                        >

                            <button
                                className="servicesCloseBtn"
                                onClick={() => setActive(null)}
                            >
                                ×
                            </button>

                            <h3 className="expandedTitle">
                                {active.title}
                            </h3>

                            <p className="expandedTagline">
                                {active.tagline}
                            </p>

                            <motion.div
                                className="expandedServices"
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: { staggerChildren: 0.08 }
                                    }
                                }}
                            >

                                {active.services.map(s => (
                                    <motion.div
                                        key={s.name}
                                        className="serviceItem"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <h4>{s.name}</h4>
                                        <p>{s.desc}</p>
                                    </motion.div>
                                ))}

                            </motion.div>

                        </motion.div>
                    </>
                )}

            </AnimatePresence>

        </section>
    )
}