import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'
// import { data } from 'react-router-dom'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([])
    const [profile, setProfile] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = document.cookie.includes('jwt');
        setIsAuthenticated(token);

        if (token) {
            fetchProfile();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get(
                "http://localhost:4001/api/users/my-profile",
                { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
            );
            setProfile(response.data);
        } catch (error) {
            console.log("Profile Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(
                "http://localhost:4001/api/blogs/all-blogs",
                {
                    withCredentials: true,
                    headers: {
                        'Accept': 'application/json',
                    }
                }
            );
            setBlogs(response.data);
        } catch (error) {
            console.log("Blogs Fetch Error:", error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchBlogs();
        }
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{
            blogs,
            setBlogs,
            isAuthenticated,
            setIsAuthenticated,
            profile,
            setProfile,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

