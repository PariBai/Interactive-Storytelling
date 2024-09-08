import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const SignInPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Save new user to local storage (for demo purposes)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Sign-up successful! Please log in.');
        toggleForm();
    };

    const handleLogIn = (e) => {
        e.preventDefault();

        // Hardcoded admin credentials
        const adminEmail = 'admin@example.com';
        const adminPassword = 'admin123';

        // Check if user exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (email === adminEmail && password === adminPassword) {
            // Admin login
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', 'admin'); // Set role as 'admin'
            navigate('/admin-analytics'); // Redirect to admin analytics page
        } else if (user) {
            // Regular user login
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', 'user'); // Set role as 'user'
            navigate('/options'); // Redirect to StoryOptionsPage
        } else {
            alert('Incorrect email or password');
        }
    };

    return (
        <div className="signin-page">
            <div className="form-container">
                <div className="form-header">
                    <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
                    <p>{isSignUp ? 'Create a new account' : 'Sign in to your account'}</p>
                </div>

                {isSignUp ? (
                    <form onSubmit={handleSignUp} className="form-body">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="form-button">Sign Up</button>
                    </form>
                ) : (
                    <form onSubmit={handleLogIn} className="form-body">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="form-button">Log In</button>
                    </form>
                )}

                <div className="form-footer">
                    <p>
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button onClick={toggleForm} className="toggle-button">
                            {isSignUp ? 'Log In' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
