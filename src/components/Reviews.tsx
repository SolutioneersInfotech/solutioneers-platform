"use client"

import React, { useState, useEffect } from "react";
import AnimatedTestimonials from "@/components/ui/testimonials/Testimonials";
import { Marquee } from "@/components/ui/marquee/Marquee";
import { ReviewCard } from "@/components/ui/marquee/ReviewCard";

const testimonials = [
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/illustration.avif"
    },
    {
        name: "Jane",
        username: "@jane",
        body: "Absolutely stunning experience. Highly recommended.",
        img: "/illustration1.avif"
    },
    {
        name: "Jack",
        username: "@jack",
        body: "The UI and animations feel incredibly smooth.",
        img: "/illustration2.avif"
    }
]

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

export default function ReviewSection() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
        handleResize(); // set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="reviews">
            <div className="titleHeader">
                <h2>Testimonials</h2>
                <p>Real stories from businesses we've empowered</p>
            </div>
            <div className="reviews-container">
                {isLargeScreen ? (
                    <>
                        <Marquee pauseOnHover duration={15}>
                            {firstRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover duration={15}>
                            {secondRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>

                        {/* Fade edges */}
                        <div className="fade-left" aria-hidden="true" />
                        <div className="fade-right" aria-hidden="true" />
                    </>
                ) : (
                    <AnimatedTestimonials
                        testimonials={testimonials}
                        autoplay
                        autoplayDelay={5000}
                    />
                )}
            </div>
        </section>
    )
}