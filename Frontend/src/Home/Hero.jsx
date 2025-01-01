import React, { useEffect } from 'react'
import { useAuth } from '../Context/AuthProvider.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Hero = () => {
    const { blogs, setBlogs } = useAuth()

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4001/api/blogs/all-blogs"
                );
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, [setBlogs]);

    return (
        <main className="relative py-16">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
                            Featured Articles
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore our carefully curated collection of featured content
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {blogs && blogs.length > 0 ? (
                            blogs.slice(0, 4).map((blog, index) => (
                                <Link
                                    to={`/blog/${blog._id}`}
                                    key={blog._id}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <img
                                            src={blog.blogImage.url}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg">
                                                Featured
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 relative">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {blog.title}
                                        </h3>

                                        <div className="flex items-center space-x-3">
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
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-1">
                                            <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16">
                                <div className="text-gray-400 text-xl">No blogs available</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero
