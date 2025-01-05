import React, { useState } from 'react'
import { useAuth } from '../Context/AuthProvider'
import Sidebar from '../Dashboard/Sidebar'
import MyProfile from '../Dashboard/MyProfile'
import CreateBlog from '../Dashboard/CreateBlog'
import UpdateBlog from '../Dashboard/UpdateBlog'
import MyBlogs from '../Dashboard/MyBlogs'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
    const { profile, isAuthenticated, loading } = useAuth()
    const [component, setComponent] = useState("b")

    console.log(profile)
    console.log(isAuthenticated)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to={"/"} />;
    }

    return (
        <div>
            <div>
                <Sidebar component={component} setComponent={setComponent} />
                {component === "My Profile" ? (<MyProfile />) : component === "Create Blog" ? (<CreateBlog />) : component === "Update Blog" ? (<UpdateBlog />) : (<MyBlogs />)}
            </div>
        </div>
    )
}

export default Dashboard
