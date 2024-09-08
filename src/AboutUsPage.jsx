// src/pages/AboutUsPage.jsx
import React from 'react';
import './style.css'; // Import the stylesheet for About Us page

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <header className="about-header">
                <h1>About Interactive Storytelling Platform</h1>
                <p>Transforming imagination into interactive experiences</p>
            </header>
            
            <section className="intro-section">
                <div className="intro-image">
                    <img src="/src/assets/about-us-image.png" alt="Interactive Storytelling" />
                </div>
                <div className="intro-text">
                    <h2>Welcome to Our World</h2>
                    <p>
                        At Interactive Storytelling Platform, we blend creativity with technology to offer immersive storytelling experiences. Dive into our world where you shape the narrative and embark on interactive adventures.
                    </p>
                </div>
            </section>

            <section className="our-vision">
                <h2>Our Vision</h2>
                <p>
                    Our vision is to revolutionize storytelling by merging traditional narratives with interactive elements, fostering creativity and engagement in every story.
                </p>
            </section>

            <section className="our-story">
                <h2>Our Story</h2>
                <p>
                    We began with a simple idea: to reimagine how stories are told in the digital age. Our platform was built to make storytelling more dynamic and interactive, pushing the limits of creativity and user engagement.
                </p>
            </section>

            <section className="meet-the-team">
                <h2>Meet the Team</h2>
                <div className="team-member">
                    <img src="/src/assets/team01.jpeg" alt="John Doe" className="team-member-photo" />
                    <div className="team-member-info">
                        <h3>John Doe</h3>
                        <p>Co-Founder & Creative Director</p>
                        <p>John leads our creative team, bringing his vision and storytelling expertise to life.</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src="/src/assets/team2.png" alt="Jane Smith" className="team-member-photo" />
                    <div className="team-member-info">
                        <h3>Jane Smith</h3>
                        <p>Chief Technology Officer</p>
                        <p>Jane drives our technological innovations, ensuring a seamless and engaging user experience.</p>
                    </div>
                </div>
                {/* Add more team members as needed */}
            </section>

            <section className="our-values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Creativity:</strong> We foster creativity and innovation in storytelling.</li>
                    <li><strong>Engagement:</strong> We aim to create immersive and interactive experiences.</li>
                    <li><strong>Collaboration:</strong> We believe in the power of teamwork and partnerships.</li>
                    <li><strong>Integrity:</strong> We maintain transparency and honesty in our work.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUsPage;
