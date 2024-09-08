import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const StoryOptionsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="story-options-page">
            <h2>What would you like to do?</h2>
            <div className="card-container">
                <div className="card" onClick={() =>  navigate('/create-story')}>
                    <img src="create-story.jpg" alt="Create Story" className="card-image"/>
                    <div className="card-content">
                        <h3>Create Story</h3>
                        <p>Start a new adventure by creating your own story.</p>
                    </div>
                </div>
                <div className="card" onClick={() => navigate('/view-stories')}>
                    <img src="view-stories.jpg" alt="View Your Stories" className="card-image"/>
                    <div className="card-content">
                        <h3>View Your Stories</h3>
                        <p>Explore and manage your previously created stories.</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default StoryOptionsPage;
