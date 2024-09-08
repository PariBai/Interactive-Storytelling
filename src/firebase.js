import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, increment } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAojsvZBmrg0wdDPMHc5WyDGe43po9Qd8U",
    authDomain: "interactive-storytelling-330af.firebaseapp.com",
    projectId: "interactive-storytelling-330af",
    storageBucket: "interactive-storytelling-330af.appspot.com",
    messagingSenderId: "884766338968",
    appId: "1:884766338968:web:17f5860c3aafa23f82c5ed",
    measurementId: "G-YZ91Y6QW73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

const updateStoryViews = async (storyId) => {
    const storyRef = doc(db, "stories", storyId);
    await setDoc(storyRef, { views: increment(1) }, { merge: true });
};

const updateCategoryViews = async (categoryName) => {
    const categoryRef = doc(db, "categories", categoryName);
    await setDoc(categoryRef, { views: increment(1) }, { merge: true });
};

const updateOptionSelections = async (storyId, chapterId, optionId) => {
    const optionRef = doc(db, "options", `${storyId}_${chapterId}_${optionId}`);
    await setDoc(optionRef, { selections: increment(1) }, { merge: true });
};

export { updateStoryViews, updateCategoryViews, updateOptionSelections };
