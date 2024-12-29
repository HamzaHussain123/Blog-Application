import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'
// import { data } from 'react-router-dom'
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4001/api/blogs/all-blogs"
                    , { withCredentials: true }
                );

                console.log("Full response:", response);
                setBlogs(response.data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchBlogs();
    }, []);


    return (
        <AuthContext.Provider value={{ blogs }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

