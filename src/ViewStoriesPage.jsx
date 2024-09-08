import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ViewStoriesPage = () => {
    const [submittedStories, setSubmittedStories] = useState([]);
    const [draftStories, setDraftStories] = useState([]);
    const [imageUrls, setImageUrls] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedSubmittedStories = JSON.parse(localStorage.getItem('submittedStories')) || [];
        const storedDraftStories = JSON.parse(localStorage.getItem('draftStories')) || [];
        setSubmittedStories(storedSubmittedStories);
        setDraftStories(storedDraftStories);

        // If image URLs are stored directly, just set them
        const urls = {};
        [...storedSubmittedStories, ...storedDraftStories].forEach(story => {
            if (story.image) {
                urls[story.title] = story.image; // Assuming image is a URL
            }
        });
        setImageUrls(urls);

    }, []);

    const handleEditDraft = (index) => {
        const selectedDraftStory = draftStories[index];
        navigate('/create-story', { state: { story: selectedDraftStory, isEdit: true } });
    };

    const handleBack = () => {
        navigate('/options');
    };

    const renderStory = (story) => (
        <div className="story-card" key={story.title}>
            <h4>{story.title}</h4>
            <p>{story.description}</p>
            {imageUrls[story.title] && <img src={imageUrls[story.title]} alt={story.title} className="story-image" />}
            <div className="chapter-list">
                <h5>Chapters:</h5>
                <ul>
                    {story.chapters.map((chapter, index) => (
                        <li key={index}>
                            <p>{chapter.text}</p>
                            {chapter.options.length > 0 && (
                                <ul>
                                    {chapter.options.map((option, i) => (
                                        <li key={i}>{option}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <div className="view-stories-page">
            <h2>Your Stories</h2>

            <div className="stories-section">
                <h3>Submitted Stories</h3>
                {submittedStories.length > 0 ? (
                    <div>
                        {submittedStories.map((story) => (
                            <div className="story-container" key={story.title}>
                                {renderStory(story)}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No submitted stories.</p>
                )}
            </div>

            <div className="stories-section">
                <h3>Draft Stories</h3>
                {draftStories.length > 0 ? (
                    <div>
                        {draftStories.map((story, index) => (
                            <div className="story-container" key={story.title}>
                                {renderStory(story)}
                                <button className="edit-draft-btn" onClick={() => handleEditDraft(index)}>
                                    Edit Draft
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No draft stories.</p>
                )}
            </div>

            <button className="back-btn" onClick={handleBack}>Back</button>
        </div>
    );
};

export default ViewStoriesPage;
