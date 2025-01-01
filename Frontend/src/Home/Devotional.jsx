import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { Link } from 'react-router-dom'

const Devotional = () => {
    const { blogs } = useAuth()
    const devotionalBlogs = blogs?.filter((blog) => blog.category === "Devotion")

    return (
        <main className="relative py-16">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
                            Devotional
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The concept of gods varies widely across different cultures, religions and belief systems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {devotionalBlogs && devotionalBlogs.length > 0 ? (
                            devotionalBlogs.map((blog, index) => (
                                <Link
                                    to={`/blog/${blog._id}`}
                                    key={blog._id}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
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
                                            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 relative">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {blog.title}
                                        </h3>
                                        <div className="flex items-center space-x-2">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                                                {blog.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-4 text-center py-16">
                                <div className="text-gray-400 text-xl">No blogs available</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Devotional
