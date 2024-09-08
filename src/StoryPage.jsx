import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import stories from './StoriesData.js'; // Import the stories data
import './style.css';

const StoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    // Handle undefined category
    const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Default';
    const categoryStories = stories[category] || [];

    const handleReadStory = (storyId) => {
        navigate(`/stories/${category}/${storyId}/start`); // Use backticks for template literals
    };

    return (
        <div className="story-page">
            <h1>{displayCategory} Stories</h1>
            <div className="story-cards-container">
                {categoryStories.length > 0 ? (
                    categoryStories.map(story => (
                        <div className="story-card" key={story.id}>
                            <img src={story.image} alt={story.title} className="story-image" />
                            <div className="story-info">
                                <h2>{story.title}</h2>
                                <p>{story.description}</p>
                                <button onClick={() => handleReadStory(story.id)}>Read Story</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No stories available for this category.</p>
                )}
            </div>
        </div>
    );
};

export default StoryPage;