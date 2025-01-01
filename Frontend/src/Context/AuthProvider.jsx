import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'
// import { data } from 'react-router-dom'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        // Check if user is authenticated when component mounts
        const token = document.cookie.includes('jwt')
        setIsAuthenticated(token)
    }, [])

    useEffect(() => {
        // Only fetch blogs if user is authenticated
        if (isAuthenticated) {
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
                    console.log(error)
                }
            };

            fetchBlogs();
        }
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{
            blogs,
            setBlogs,
            isAuthenticated,
            setIsAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

