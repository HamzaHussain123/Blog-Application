import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthProvider.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaUser, FaSpinner } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
    const { blogs, setBlogs } = useAuth()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4001/api/blogs/all-blogs"
                );
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false)
            }
        };

        fetchBlogs();
    }, [setBlogs]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    if (loading) {
        return (
            <div className="min-h-[600px] flex flex-col items-center justify-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <FaSpinner className="animate-spin text-5xl text-blue-600 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-700">Loading amazing content...</h3>
                    <p className="text-gray-500 mt-2">Please wait while we fetch the latest articles</p>
                </motion.div>
            </div>
        )
    }

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative py-16"
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Featured Articles
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our carefully curated collection of featured content
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {blogs && blogs.length > 0 ? (
                            blogs.slice(0, 4).map((blog, index) => (
                                <motion.div
                                    key={blog._id}
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to={`/blog/${blog._id}`}
                                        className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <img
                                                src={blog.blogImage.url}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                                loading="lazy"
                                            />
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: index * 0.2 }}
                                                className="absolute top-4 left-4 z-20"
                                            >
                                                <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg">
                                                    Featured
                                                </span>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute bottom-4 right-4 z-20"
                                            >
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
                                                    Read More →
                                                </span>
                                            </motion.div>
                                        </div>

                                        <div className="p-6 relative">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {blog.title}
                                            </h3>

                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center space-x-3"
                                            >
                                                {blog.adminPhoto ? (
                                                    <img
                                                        src={blog.adminPhoto}
                                                        alt={blog.adminName}
                                                        className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600 group-hover:ring-4 transition-all duration-300"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://via.placeholder.com/40x40.png?text=A';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-600 group-hover:ring-4 transition-all duration-300">
                                                        <FaUser className="text-blue-600" />
                                                    </div>
                                                )}
                                                <p className="font-medium text-gray-900 line-clamp-1">
                                                    {blog.adminName}
                                                </p>
                                            </motion.div>

                                            <div className="absolute bottom-0 left-0 right-0 h-1">
                                                <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-16"
                            >
                                <div className="text-gray-400 text-xl">No blogs available</div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.main>
    )
}

export default Hero
