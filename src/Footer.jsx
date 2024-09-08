// src/components/Footer.jsx
import React from 'react';
import './style.css'; // Import the stylesheet for Footer component

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>Interactive Storytelling Platform</h1>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/stories">Categories</a></li>
                        <li><a href="/signin">Sign in</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:info@interactiveplatform.com">info@interactiveplatform.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Interactive Storytelling Platform. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
