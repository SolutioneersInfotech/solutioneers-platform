"use client"

import AnimatedTestimonials from "@/components/ui/testimonials/Testimonials"

interface Review {
    name: string
    username: string
    body: string
    img: string
}

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

    // const testimonials = testimonial.map((review) => ({
    //     name: review.name,
    //     username: review.username,
    //     body: review.body,
    //     img: review.img
    // }))

    return (
        <section className="reviews">

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