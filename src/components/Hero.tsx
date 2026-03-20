import React from 'react'
import { Particles } from './ui/particles/particle'
import { Button } from './ui/button/button';

function Hero() {
    return (
        <section id="hero" className="hero">
            <Particles />

            {/* Heading */}
            <h1 className="heading">
                Solutioneers Infotech is the new place
                to build projects.
            </h1>

            {/* Subtext */}
            <p className="subtext">
                Real-time chatrooms where teams and AIs bring ideas to life through
                collaboration.
                <br className="break" />
                Crafted with precision, speed, and a touch of intelligence.
            </p>

            {/* CTA */}
            <Button variant='solid'>
                Book your free consultation →
            </Button>

            {/* Image */}
            <div className="imageWrapper">
                <div className="imageGlow" />
            </div>
        </section>
    );
};

export default Hero;