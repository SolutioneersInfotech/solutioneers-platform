"use client"

import AnimatedTestimonials from "@/components/ui/testimonials/Testimonials"

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

export default function ReviewSection() {


    return (
        <section className="reviews">
            <div className="titleHeader">
                <h2>Testimonials</h2>
                <p>Real stories from businesses we’ve empowered</p>
            </div>
            <div className="reviews-container">

                <AnimatedTestimonials
                    testimonials={testimonials}
                    autoplay
                    autoplayDelay={5000}
                />

            </div>

        </section>
    )
}