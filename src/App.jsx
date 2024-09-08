import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import StoryPage from './StoryPage.jsx';
import StoryDetailPage from './StoryDetailPage.jsx';
import AboutUsPage from './AboutUsPage.jsx';
import Footer from './Footer.jsx';
import Categories from './Categories.jsx';
import SignInPage from './SignInPage.jsx';
import StoryOptionsPage from './StoryOptionsPage.jsx'; 
import ProtectedRoute from './ProtectedRoute.jsx';
import CreateStoryPage from './CreateStoryPage.jsx';
import ViewStoriesPage from './ViewStoriesPage.jsx';
import AdminAnalyticsPage from './AdminAnalyticsPage.jsx';

function App() {
    const [currentSection, setCurrentSection] = useState(1);

    const handleChooseOption = (nextId) => {
        setCurrentSection(nextId);
    };

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<><HeroSection /><Categories /></>} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/stories/:category" element={<StoryPage />} />
                    <Route path="/stories/:category/:storyId/:chapterId" element={<StoryDetailPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    
                    {/* Use ProtectedRoute for user routes */}
                    <Route path="/options" element={<ProtectedRoute element={StoryOptionsPage} />} />
                    <Route path="/create-story" element={<ProtectedRoute element={CreateStoryPage} />} />
                    <Route path="/view-stories" element={<ProtectedRoute element={ViewStoriesPage} />} />
                    
                    {/* Use ProtectedRoute for admin-only route */}
                    <Route path="/admin-analytics" element={<ProtectedRoute element={AdminAnalyticsPage} isAdminOnly={true} />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
