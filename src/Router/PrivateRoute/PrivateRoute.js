import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div>
                <div class="flex justify-center items-center">
                    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;