import React from 'react'

function About() {
    return (
        <section id="about" className="about-wrapper">
            <div className='titleHeader'>
                <h2>About Us</h2>
                <p>Building digital experiences that make an impact</p>
            </div>
            <div className='about'>
            <div className="left"></div>
            <div className="right">
                    <p>Our mission is to build custom software solutions that truly fit our clients’ needs and go beyond what they expect. We take the time to understand each business, its goals, and the challenges it faces, so we can create solutions that are practical, reliable, and easy to use.
                    <br/>
                    <br/>
                        We focus on quality at every step of the process. From the first discussion and planning stage to development, testing, and final delivery, we make sure everything is done with care and attention to detail. Even after the project is completed, we continue to support and maintain the product to ensure it runs smoothly and stays up to date.
                        <br/>
                        <br/>
                        We believe in staying current with the latest technology. Our team continuously learns and adopts new tools, methods, and best practices to build faster, more efficient, and more secure solutions. This allows us to deliver products that are not only modern but also built to last.
                        <br/>
                        <br/>
                        Our goal is to help businesses grow and succeed by providing software that improves their operations, saves time, and creates better experiences for their users. We aim to build long-term relationships with our clients by being reliable, transparent, and committed to delivering real value.</p>
            </div>
            </div>
            <div className="bottom">
                <div className="cards">
                    <h1>Projects Done</h1>
                    <p>We have successfully completed over 50 projects for clients across various industries, delivering high-quality software solutions that meet their unique needs and exceed their expectations.</p>
                </div>
                <div className="cards">
                    <h1>Happy Clients</h1>
                    <p>Our clients have consistently provided positive feedback about our work, praising our communication, professionalism, and the quality of the software we deliver.</p>
                </div>
                <div className="cards">
                    <h1>Expert Team</h1>
                    <p>Our team of experienced developers and designers is dedicated to creating innovative software solutions that drive business growth and success.</p>
                </div>
                <div className="cards">
                    <h1>Quality Assurance</h1>
                    <p>We have a rigorous quality assurance process in place to ensure that every project we deliver meets the highest standards of performance and reliability.</p>
                </div>
            </div>
        </section >
    )
}

export default About