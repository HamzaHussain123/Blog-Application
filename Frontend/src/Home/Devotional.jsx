import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { Link } from 'react-router-dom'

const Devotional = () => {
    const { blogs } = useAuth()
    const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion")

    return (
        <main className="relative mt-5">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
                    <div className="mb-6">
                        <div className="flex flex-col items-start">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
                                Devotional
                            </h2>
                            <p className="text-gray-600 text-center text-md sm:text-base">
                                The concept of gods varies widely across different cultures, religions and belief systems
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {devotionalBlogs && devotionalBlogs.length > 0 ? (
                            devotionalBlogs.map((blog) => (
                                <Link
                                    to={`/blog/${blog._id}`}
                                    key={blog._id}
                                    className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={blog.blogImage.url}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-5 bg-gray-100">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                                            {blog.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">{blog.category}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-gray-400 text-lg">No blogs available</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Devotional
