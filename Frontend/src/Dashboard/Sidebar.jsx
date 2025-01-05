import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IoMdMenu } from "react-icons/io";
import { FaArrowLeft, FaBlog, FaUser, FaHome, FaSignOutAlt } from "react-icons/fa";



const Sidebar = ({ setComponent }) => {
    const { profile, setIsAuthenticated } = useAuth();
    const navigateTo = useNavigate();
    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Detect screen size

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
        if (window.innerWidth > 640) setShow(false); // Ensure sidebar is always visible on larger screens
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleComponents = (value) => {
        setComponent(value);
        if (isMobile) setShow(false); // Close sidebar on mobile
    };

    const gotoHome = () => {
        navigateTo("/");
        if (isMobile) setShow(false);
    };

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await axios.get("http://localhost:4001/api/users/logout", { withCredentials: true });
            setIsAuthenticated(false);
            toast.success("Logged out successfully!");
        } catch (error) {
            console.error(error);
            toast.error("There was an error logging out.");
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            {isMobile && (
                <div
                    className="fixed top-4 left-4 z-50"
                    onClick={() => setShow(!show)}
                    aria-label="Toggle Sidebar"
                >
                    <IoMdMenu className="text-3xl text-gray-800 transition-transform duration-300 transform hover:scale-110" />
                </div>
            )}

            {/* Sidebar */}
            {(show || !isMobile) && (
                <div
                    className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-purple-600 to-indigo-600 text-white shadow-lg transition-transform duration-500 transform ${show ? "translate-x-0" : "-translate-x-full"
                        } sm:translate-x-0`}
                    aria-hidden={!show && isMobile}
                >
                    {/* Close Button for Mobile */}
                    {isMobile && (
                        <div
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                            onClick={() => setShow(false)}
                            aria-label="Close Sidebar"
                        >
                            <FaArrowLeft className="text-gray-200 transition-transform duration-300 transform hover:scale-110" />
                        </div>
                    )}

                    {/* Profile Section */}
                    <div className="text-center py-8 border-b border-gray-400">
                        <img
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200 shadow-xl transform hover:scale-105 transition-transform duration-300"
                            src={profile?.photo?.url}
                            alt="User Profile"
                        />
                        <p className="text-lg font-semibold">{profile?.name || "Guest User"}</p>
                    </div>

                    {/* Menu Items */}
                    <ul className="mt-6 space-y-4 px-4">
                        <li>
                            <button
                                onClick={() => handleComponents("My Blogs")}
                                className="flex items-center w-full px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <FaBlog className="mr-3 text-lg" /> My Blogs
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleComponents("Create Blog")}
                                className="flex items-center w-full px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <FaBlog className="mr-3 text-lg" /> Create Blog
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleComponents("My Profile")}
                                className="flex items-center w-full px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <FaUser className="mr-3 text-lg" /> My Profile
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={gotoHome}
                                className="flex items-center w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <FaHome className="mr-3 text-lg" /> Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full px-4 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <FaSignOutAlt className="mr-3 text-lg" /> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Sidebar
