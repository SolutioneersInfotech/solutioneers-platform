"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useState, useRef, useEffect } from "react"

import "./Testimonials.scss"

type Testimonial = {
	name: string
	username: string
	body: string
	img: string
}

interface Props {
	testimonials: Testimonial[]
	autoplay?: boolean
	autoplayDelay?: number
}
interface Props {
	testimonials: Testimonial[]
	autoplay?: boolean
	autoplayDelay?: number
}

export default function StackedTestimonials({
	testimonials,
	autoplay = true,
	autoplayDelay = 4000
}: Props) {

	const [active, setActive] = useState(0)

	const autoplayRef = useRef<NodeJS.Timeout | null>(null)

	const next = () => {
		setActive((prev) => (prev + 1) % testimonials.length)
	}

	const prev = () => {
		setActive((prev) =>
			(prev - 1 + testimonials.length) % testimonials.length
		)
	}

	const startAutoplay = () => {

		if (!autoplay) return

		stopAutoplay()

		autoplayRef.current = setTimeout(() => {
			next()
			startAutoplay()
		}, autoplayDelay)

	}

	const stopAutoplay = () => {

		if (autoplayRef.current) {
			clearTimeout(autoplayRef.current)
		}

	}

	useEffect(() => {

		startAutoplay()

		return stopAutoplay

	}, [active])

	return (

		<section
			className="stackedTestimonials"
			onMouseEnter={stopAutoplay}
			onMouseLeave={startAutoplay}
		>

			<div className="stackedTestimonialsContainer">

				{testimonials.map((item, index) => {

					const position =
						(index - active + testimonials.length) % testimonials.length

					const visible = position < 3

					return (

						<motion.div
							key={item.username}
							className="testimonialCard"

							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.2}
							dragMomentum={false}

							onDragEnd={(e, info) => {

								const threshold = 80

								if (info.offset.x < -threshold) next()
								if (info.offset.x > threshold) prev()

							}}

							animate={{
								y: position * 14,
								scale: 1 - position * 0.05,
								rotate: position * 2,
								zIndex: 10 - position,
								opacity: visible ? 1 : 0
							}}

							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30
							}}

						>

							<div className="cardLayout">

								<div className="cardImage">

									<Image
										src={item.img}
										alt={item.name}
										fill
										sizes="(max-width:768px) 100vw, 240px"
										className="image"
									/>

								</div>

								<div className="cardContent">

									<div className="cardUser">

										<h3>{item.name}</h3>
										<span>{item.username}</span>

									</div>

									<p className="cardText">
										{item.body}
									</p>

								</div>

							</div>

						</motion.div>

					)

				})}

			</div>

		</section>

	)

}