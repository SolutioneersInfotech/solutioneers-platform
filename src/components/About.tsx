'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface Stat {
    value: string
    label: string
    icon: string
}

interface ValueItem {
    title: string
    description: string
    icon: string
    delay: number
}

const stats: Stat[] = [
    { value: '500+', label: 'Projects Delivered', icon: '🚀' },
    { value: '100+', label: 'Happy Clients', icon: '💼' },
    { value: '8+', label: 'Years in Market', icon: '⭐' },
    { value: '50+', label: 'Team Members', icon: '👥' }
]

const values: ValueItem[] = [
    {
        title: 'Innovation',
        description: 'Cutting-edge technology and creative solutions',
        icon: '💡',
        delay: 0
    },
    {
        title: 'Quality',
        description: 'Meticulous attention to every detail',
        icon: '✨',
        delay: 0.1
    },
    {
        title: 'Passion',
        description: 'Genuine care for our clients&apos; success',
        icon: '❤️',
        delay: 0.2
    }
]

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress: containerProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    })

    const heroY = useTransform(containerProgress, [0, 1], [0, -100])
    const heroOpacity = useTransform(containerProgress, [0, 0.3, 1], [1, 1, 0.3])

    return (
        <section className="about" ref={containerRef}>
            {/* Hero Section with Parallax */}
            <motion.div
                className="about-hero"
                style={{ y: heroY, opacity: heroOpacity }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    About Solutioneers
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="hero-subtitle"
                >
                    Transforming ideas into digital excellence, one project at a time
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="hero-description"
                >
                    We&apos;re a team of creative developers and strategic thinkers dedicated to building
                    exceptional digital products. From concept to launch, we partner with forward-thinking
                    companies to turn bold ideas into reality.
                </motion.p>
            </motion.div>

            {/* Interactive Stats Section */}
            <div className="about-stats-wrapper" ref={statsRef}>
                <div className="about-stats">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <StatCard key={index} stat={stat} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="about-mission-vision">
                <motion.div
                    className="mission-card card"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                >
                    <div className="card-header">
                        <h3>Our Mission</h3>
                        <span className="accent-line"></span>
                    </div>
                    <p>
                        Delivering exceptional digital solutions that drive measurable business impact.
                        We combine strategic thinking with technical expertise to create products that
                        users love and businesses trust.
                    </p>
                    <div className="card-highlight">Empowering businesses through innovation</div>
                </motion.div>

                <motion.div
                    className="vision-card card"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                >
                    <div className="card-header">
                        <h3>Our Vision</h3>
                        <span className="accent-line"></span>
                    </div>
                    <p>
                        To be the most trusted partner for digital innovation, recognized for our
                        commitment to quality and ability to turn ambitious ideas into reality.
                        Building the future, one line of code at a time.
                    </p>
                    <div className="card-highlight">Leading the digital transformation</div>
                </motion.div>
            </div>

            {/* Core Values Section */}
            <div className="about-values">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Core Values
                </motion.h2>

                <div className="values-grid">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            className="value-item"
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -12,
                                boxShadow: '0 20px 40px rgba(26, 32, 120, 0.15)'
                            }}
                        >
                            <motion.div
                                className="value-icon"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
    return (
        <motion.div
            className="stat-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.08 }}
        >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
        </motion.div>
    )
}
