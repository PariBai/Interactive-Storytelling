import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const CreateStoryPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Adventure');
    const [image, setImage] = useState('');
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState('');
    const [currentOptions, setCurrentOptions] = useState([]);
    const [newOption, setNewOption] = useState('');
    const [isSavedOrSubmitted, setIsSavedOrSubmitted] = useState(false);

    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file); // Convert image to base64
    };

    const addChapter = () => {
        if (currentChapter.trim() === '') {
            alert("Chapter content cannot be empty.");
            return;
        }
        setChapters([...chapters, { text: currentChapter, options: currentOptions }]);
        setCurrentChapter('');
        setCurrentOptions([]); // Reset options for the next chapter
    };

    const addOption = () => {
        if (newOption.trim() === '') {
            alert("Option content cannot be empty.");
            return;
        }
        setCurrentOptions([...currentOptions, newOption]);
        setNewOption('');
    };

    const handleSaveStory = () => {
        const story = { title, description, category, image, chapters, isDraft: true };
        const existingStories = JSON.parse(localStorage.getItem('draftStories')) || [];
        const updatedDraftStories = [...existingStories.filter(s => s.title !== title), story];
        localStorage.setItem('draftStories', JSON.stringify(updatedDraftStories));
        setIsSavedOrSubmitted(true);
        alert('Story saved as draft!');
    };

    const handleSubmitStory = () => {
        const story = { title, description, category, image, chapters, isDraft: false };
        const existingStories = JSON.parse(localStorage.getItem('submittedStories')) || [];

        // Remove the story from drafts if it exists there
        let draftStories = JSON.parse(localStorage.getItem('draftStories')) || [];
        draftStories = draftStories.filter(s => s.title !== title);
        localStorage.setItem('draftStories', JSON.stringify(draftStories));

        const updatedSubmittedStories = [...existingStories.filter(s => s.title !== title), story];
        localStorage.setItem('submittedStories', JSON.stringify(updatedSubmittedStories));
        setIsSavedOrSubmitted(true);
        alert('Story submitted successfully!');
    };

    const handleBack = () => {
        if (!isSavedOrSubmitted) {
            const confirmBack = window.confirm("Your changes will not be saved. Are you sure you want to go back?");
            if (confirmBack) {
                navigate('/options');
            }
        } else {
            navigate('/options');
        }
    };

    return (
        <div className="create-story-page">
            <h2>Create Your Story</h2>
            <form>
                <input
                    id="story-title"
                    type="text"
                    placeholder="Story Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    id="story-description"
                    placeholder="Story Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>

                <label htmlFor="story-category">Category</label>
                <select id="story-category" required value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Adventure">Adventure</option>
                    <option value="Romance">Romance</option>
                    <option value="Mysterious">Mysterious</option>
                    <option value="Emotional">Emotional</option>
                </select>

                <label htmlFor="story-image">Upload Image</label>
                <input id="story-image" type="file" accept="image/jpg" onChange={handleImageUpload} />

                {image && <img src={image} alt="Story" className="story-image-preview" />}

                <h3>Add Chapters</h3>

                <textarea
                    id="chapter-text"
                    placeholder="Write your chapter here..."
                    value={currentChapter}
                    required
                    onChange={(e) => setCurrentChapter(e.target.value)}
                ></textarea>

                <h4>Add Options for the Chapter (Optional)</h4>
                <input
                    type="text"
                    placeholder="Add an option"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                />
                <button type="button" onClick={addOption}>Add Option</button>

                <ul>
                    {currentOptions.map((option, index) => (
                        <li key={index}>{option}</li>
                    ))}
                </ul>

                <button type="button" onClick={addChapter}>Add Chapter</button>

                <div className="chapter-list">
                    <h4>Chapters:</h4>
                    <ul>
                        {chapters.map((chapter, index) => (
                            <li key={index}>
                                {chapter.text}
                                <ul>
                                    {chapter.options.map((option, i) => (
                                        <li key={i}>{option}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="button"
                    onClick={handleSaveStory}
                    disabled={!title.trim() || !description.trim() || chapters.length === 0}
                >
                    Save as Draft
                </button>
                <button
                    type="button"
                    onClick={handleSubmitStory}
                    disabled={!title.trim() || !description.trim() || chapters.length === 0}
                >
                    Submit Story
                </button>
                <button type="button" className="back-btn-create" onClick={handleBack}>Back</button>
            </form>
        </div>
    );
};

export default CreateStoryPage;
