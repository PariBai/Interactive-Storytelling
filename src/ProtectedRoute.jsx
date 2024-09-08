import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, isAdminOnly = false, ...rest }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole'); // Assuming you store user role in localStorage after sign-in

    // If route requires admin and user is not admin, redirect to home or another page
    if (isAdminOnly && userRole !== 'admin') {
        return <Navigate to="/" />;
    }

    // If user is not logged in, redirect to sign-in page
    return isLoggedIn ? <Element {...rest} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
