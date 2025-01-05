import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyBlogs = () => {
    const [myBlogs, setMyBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyBlogs = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4001/api/blogs/my-blog",
                    { withCredentials: true }
                );
                setMyBlogs(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchMyBlogs();
    }, []);

    const handleDelete = async (id) => {
        axios.delete(`http://localhost:4001/api/blogs/delete/${id}`, { withCredentials: true }).then((res) => {
            toast.success(res.data.message || "Blog deleted Succesfully")
            setMyBlogs((value) => value.filter((blog) => blog._id !== id))
        }).catch((error) => {
            toast.error(error.response.message || "Failed to delete the blog")
        })
    };

    return (
        <div className="your-wrapper-class">
            <ToastContainer />
            <div className="bg-gray-100 min-h-screen flex flex-col sm:flex-row">
                {/* Sidebar */}
                <div className="w-64"></div>
                {/* <aside className="hidden sm:block w-64 bg-purple-700 text-white flex-shrink-0">
                <div className="p-6">
                    <h2 className="text-lg font-bold mb-4">Menu</h2>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/my-blogs"
                                className="block text-white hover:text-gray-200"
                            >
                                My Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/create-blog"
                                className="block text-white hover:text-gray-200"
                            >
                                Create Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className="block text-white hover:text-gray-200"
                            >
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="block text-white hover:text-gray-200"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/logout"
                                className="block text-white hover:text-gray-200"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside> */}

                {/* Blogs Section */}
                <main className="flex-1 p-4 sm:p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        My Blogs
                    </h1>

                    {loading ? (
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                            {/* Skeleton Loader */}
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-lg p-6 animate-pulse"
                                >
                                    <div className="h-36 bg-gray-300 rounded"></div>
                                    <div className="mt-4 h-4 bg-gray-300 rounded"></div>
                                    <div className="mt-2 h-6 bg-gray-300 rounded"></div>
                                    <div className="mt-4 h-8 bg-gray-300 rounded"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
                            {myBlogs && myBlogs.length > 0 ? (
                                myBlogs.map((element) => (
                                    <div
                                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                                        key={element._id}
                                    >
                                        {element.blogImage?.url && (
                                            <img
                                                src={element.blogImage.url}
                                                alt="blogImage"
                                                className="w-full h-36 sm:h-48 md:h-36 object-cover"
                                                loading="lazy"
                                            />
                                        )}
                                        <div className="p-6">
                                            <span className="block text-sm text-gray-500 mb-2 uppercase">
                                                {element.category}
                                            </span>
                                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                                {element.title}
                                            </h2>

                                            <div className="flex justify-between items-center mt-4">
                                                <Link
                                                    to={`/update-blog/${element._id}`}
                                                    className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                                                >
                                                    Update
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(element._id)}
                                                    className="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-md shadow-md hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 text-lg">
                                    You have not posted any blogs to see!
                                </p>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default MyBlogs;
