import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // If you're using React Router
import './style.css';

const AdminAnalyticsPage = () => {
    const [analyticsData, setAnalyticsData] = useState({
        adventure: 0,
        romance: 0,
        emotional: 0,
        mystery: 0,
    });
    const [optionData, setOptionData] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState(false);

    const adminUserId = 'admin123'; // Replace this with actual admin ID logic
    const currentUserId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage after login
    const history = useHistory();

    useEffect(() => {
        // Check if current user is the admin
        if (currentUserId === adminUserId) {
            setIsAuthorized(true);
            fetchAnalyticsData();
        } else {
            setIsAuthorized(false);
            history.push('/login'); // Redirect to login or unauthorized page if not admin
        }
    }, [currentUserId]);

    const fetchAnalyticsData = () => {
        const categories = ['category-adventure', 'category-romance', 'category-emotional', 'category-mystery'];
        const data = { adventure: 0, romance: 0, emotional: 0, mystery: 0 };
        const options = [];

        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                categories.forEach((category) => {
                    if (key.includes(category)) {
                        const value = parseInt(localStorage.getItem(key), 10);
                        if (!isNaN(value)) {
                            const categoryName = category.replace('category-', '');
                            data[categoryName] += value;
                        }
                    }
                });

                if (key.startsWith('option-1-')) {
                    const optionValue = localStorage.getItem(key);
                    options.push({ key, value: optionValue });
                }
            }
        }

        setAnalyticsData(data);
        setOptionData(options);
    };

    if (!isAuthorized) {
        return <div>Loading...</div>; // Or a redirect to login or unauthorized access message
    }

    return (
        <div className="analytics-page">
            <h1>Admin Analytics</h1>
            <div className="analytics-data">
                <div className="analytics-item">
                    <strong>Adventure:</strong> {analyticsData.adventure} selections
                </div>
                <div className="analytics-item">
                    <strong>Romance:</strong> {analyticsData.romance} selections
                </div>
                <div className="analytics-item">
                    <strong>Emotional:</strong> {analyticsData.emotional} selections
                </div>
                <div className="analytics-item">
                    <strong>Mystery:</strong> {analyticsData.mystery} selections
                </div>
            </div>
            <h2>Options</h2>
            <div className="options-data">
                {optionData.length > 0 ? (
                    optionData.map((option, index) => (
                        <div key={index} className="option-item">
                            <strong>{option.key.replace('option-1-', '')}:</strong> Number of Selections: {option.value}
                        </div>
                    ))
                ) : (
                    <div>No options data available.</div>
                )}
            </div>
        </div>
    );
};

export default AdminAnalyticsPage;
