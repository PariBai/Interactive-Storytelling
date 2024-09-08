// src/components/Categories.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the stylesheet for Categories component

const categories = [
    {
        name: 'Adventure',
        description: 'Explore adventurous stories',
        image: '/src/assets/adventerous-story.jpg',
        path: '/stories/adventure'
    },
    {
        name: 'Romance',
        description: 'Dive into romantic tales',
        image: '/src/assets/romance-story.jpg',
        path: '/stories/romance'
    },
    {
        name: 'Mysterious',
        description: 'Uncover mysterious stories',
        image: '/src/assets/mysterious-story.jpg',
        path: '/stories/mystery'
    },
    {
        name: 'Emotional',
        description: 'Experience emotional journeys',
        image: '/src/assets/emotional-story.jpg',
        path: '/stories/emotional'
    }
];

const Categories = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleCategoryClick = (path) => {
        navigate(path); // Navigate to the specific category page
    };

    return (
        <section className="categories">
            <h2>Explore Our Categories</h2>
            <div className="categories-container">
                {categories.map((category, index) => (
                    <div className="category-card" key={index}>
                        <img src={category.image} alt={category.name} className="category-image" />
                        <div className="category-info">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            <button 
                                className="explore-button" 
                                onClick={() => handleCategoryClick(category.path)}
                            >
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
