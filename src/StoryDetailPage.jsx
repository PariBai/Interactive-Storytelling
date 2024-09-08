import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import stories from './storiesData'; // Adjust the import path as necessary
import './style.css';

const StoryDetailPage = () => {
    const { category, storyId, chapterId } = useParams(); // Now including category in URL params
    const navigate = useNavigate();
    const [currentChapter, setCurrentChapter] = useState(chapterId || 'start');
    const [story, setStory] = useState(null);

    useEffect(() => {
        const foundStory = stories[category]?.find(story => story.id === parseInt(storyId));
        setStory(foundStory || null);
    }, [category, storyId]);

    useEffect(() => {
        if (story) {
            incrementLocalStorageCounter(`category-${category}`);
            incrementLocalStorageCounter(`story-${storyId}`);
        }
    }, [story, category, storyId]);

    const incrementLocalStorageCounter = (key) => {
        const count = parseInt(localStorage.getItem(key)) || 0;
        localStorage.setItem(key, count + 1);
    };

    const handleOptionClick = (nextChapter, optionText) => {
        setCurrentChapter(nextChapter);
        incrementLocalStorageCounter(`option-${storyId}-${currentChapter}-${optionText}`);
    };

    const handleBackClick = () => {
        navigate(`/stories/${category}`);
    };

    if (!story) return <div>Story not found</div>;

    const chapter = story.chapters ? story.chapters[currentChapter] : null;

    return (
        <div className="story-detail">
            <h1>{story.title}</h1>
            <img src={story.image} alt={story.title} />
            <div className="chapter-content">
                {chapter ? (
                    <>
                        <p>{chapter.text}</p>
                        {chapter.options && chapter.options.length > 0 ? (
                            <div className="options">
                                {chapter.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionClick(option.nextId, option.text)}
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="no-options">
                                <p>No further options available. Your journey ends here.</p>
                                <button className="back-btn" onClick={handleBackClick}>Back to Stories</button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="chapter-not-found">
                        <p>Chapter not found for this story.</p>
                        <button className="back-btn" onClick={handleBackClick}>Back to Stories</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoryDetailPage;
