// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './style.css'; // Make sure this file contains the necessary styles

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">StoryPlatform</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li 
                    className="dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <a href="#categories">Categories</a>
                    <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                        <li><Link to="/stories/adventure">Adventure</Link></li>
                        <li><Link to="/stories/emotional">Emotional</Link></li>
                        <li><Link to="/stories/mystery">Mystery</Link></li>
                        <li><Link to="/stories/romance">Romance</Link></li>
                    </ul>
                </li>
                <li><Link to="/signin">Sign In</Link></li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
