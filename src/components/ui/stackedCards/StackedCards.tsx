"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import "./StackedCards.scss"

export interface CardItem {
    id: string | number
    title: string
    description: string
    image: string
}

export interface StackedCardsProps {
    cards: CardItem[]
    gap?: number
    scaleFactor?: number
    stickyTop?: number
}

export default function StackedCards({
    cards,
    gap = 90,
    scaleFactor = 0.06,
    stickyTop = 120
}: StackedCardsProps) {

    return (
        <section className="stackedCardsContainer">

            {cards.map((card, index) => (
                <StackedCard
                    key={card.id}
                    card={card}
                    index={index}
                    total={cards.length}
                    gap={gap}
                    scaleFactor={scaleFactor}
                    stickyTop={stickyTop}
                />
            ))}

        </section>
    )
}
interface Props {
    card: CardItem
    index: number
    total: number
    gap: number
    scaleFactor: number
    stickyTop: number
}

function StackedCard({
    card,
    index,
    total,
    gap,
    scaleFactor,
    stickyTop
}: Props) {

    const ref = useRef<HTMLDivElement>(null)

    const dockPosition = stickyTop + index * gap

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", `start ${dockPosition}px`]
    })

    /* scale animation */
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, 1 - index * scaleFactor]
    )

    /* vertical stacking shift */
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -index * 40]
    )

    /* rotation direction */
    const targetRotation =
        index === 0 ? 0 : index % 2 === 0 ? -4 : 4

    /*
    Rotation behaviour
    0 → 0.85  = straight
    0.85 → 1  = rotate while docking
    */
    const rotateZ = useTransform(
        scrollYProgress,
        [0, 0.85, 1],
        [0, 0, targetRotation],
        { clamp: true }
    )

    /* subtle perspective depth */
    const rotateX = useTransform(
        scrollYProgress,
        [0, 1],
        [0, index * 3]
    )

    return (
        <div
            ref={ref}
            className="stackedCardWrapper"
            style={{
                top: dockPosition
            }}
        >
            <motion.div
                className="stackedCard"
                style={{
                    scale,
                    y,
                    rotateZ,
                    rotateX,
                    zIndex: total - index
                }}
            >
                <div className="stackedCardImage">
                    {index + 1}.
                </div>

                <div className="stackedCardContent">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            </motion.div>
        </div>
    )
}