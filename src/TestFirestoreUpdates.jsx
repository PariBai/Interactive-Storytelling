import React from 'react';
import { updateStoryViews, updateCategoryViews, updateOptionSelections } from './firebase'; // Adjust the import path as necessary

const TestFirestoreUpdates = () => {
    const handleTestUpdates = async () => {
        try {
            // Test story update
            await updateStoryViews('story_1');
            console.log("Story views updated successfully");

            // Test category update
            await updateCategoryViews('adventure');
            console.log("Category views updated successfully");

            // Test option selection update
            await updateOptionSelections('story_1', 'start', 'option_1');
            console.log("Option selections updated successfully");

        } catch (error) {
            console.error("Error updating Firestore: ", error);
        }
    };

    return (
        <div>
            <h1>Test Firestore Updates</h1>
            <button onClick={handleTestUpdates}>Test Updates</button>
        </div>
    );
};

export default TestFirestoreUpdates;
