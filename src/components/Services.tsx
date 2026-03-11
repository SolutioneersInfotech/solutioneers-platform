import Link from 'next/link'
import React from 'react'
import {
    TbWorldWww,
    TbDeviceMobile,
    TbCloud,
    TbBrush,
    TbArrowUpRight,
} from 'react-icons/tb'

export default function Services() {
    return (
        <section className='services' id='services'>
            <div className="grid-container">

                {/* Box 1 — Featured: Web Development (tall left) */}
                <div className="gridBx gridBx--featured">
                    <span className="service-number">01</span>
                    <div className="service-icon">
                        <TbWorldWww />
                    </div>
                    <h3 className="service-title">Web Development</h3>
                    <p className="service-desc">
                        High-performance web apps and SaaS platforms built with modern stacks — from pixel-perfect landing pages to complex full-stack systems.
                    </p>
                    <ul className="service-tags">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                {/* Box 2 — Section Intro (wide top) */}
                <div className="gridBx gridBx--intro">
                    <p className="section-eyebrow">What We Do</p>
                    <h2 className="section-heading">
                        Services that<br />
                        scale your business
                    </h2>
                    <p className="section-sub">
                        From concept to deployment — we handle every layer of your digital product with precision and care.
                    </p>
                    <Link href="/#contact" className="intro-cta">
                        Start a project <TbArrowUpRight />
                    </Link>
                </div>

                {/* Box 3 — Mobile Development (centre square) */}
                <div className="gridBx">
                    <span className="service-number">02</span>
                    <div className="service-icon">
                        <TbDeviceMobile />
                    </div>
                    <h3 className="service-title">Mobile Apps</h3>
                    <p className="service-desc">
                        Native-quality iOS &amp; Android experiences. Fast, reliable, and delightfully user-focused.
                    </p>
                    <ul className="service-tags">
                        <li>React Native</li>
                        <li>Expo</li>
                        <li>Swift</li>
                    </ul>
                </div>

                {/* Box 4 — Cloud & DevOps (tall right) */}
                <div className="gridBx">
                    <span className="service-number">03</span>
                    <div className="service-icon">
                        <TbCloud />
                    </div>
                    <h3 className="service-title">Cloud &amp; DevOps</h3>
                    <p className="service-desc">
                        End-to-end cloud infrastructure, CI/CD pipelines, and containerisation built to scale without limits.
                    </p>
                    <ul className="service-tags">
                        <li>AWS</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                    </ul>
                </div>

                {/* Box 5 — UI/UX Design (wide bottom) */}
                <div className="gridBx gridBx--wide">
                    <div className="service-icon service-icon--lg">
                        <TbBrush />
                    </div>
                    <div className="wide-content">
                        <span className="service-number">04</span>
                        <h3 className="service-title">UI / UX Design</h3>
                        <p className="service-desc">
                            Human-centred design that converts — wireframes, prototypes, and pixel-perfect interfaces users love and trust.
                        </p>
                        <ul className="service-tags">
                            <li>Figma</li>
                            <li>Design Systems</li>
                            <li>Prototyping</li>
                            <li>User Research</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}
