import React, { useEffect } from 'react'
import { useAuth } from '../Context/AuthProvider.jsx'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaUser, FaClock } from 'react-icons/fa'

const Hero = () => {
    const { blogs, setBlogs } = useAuth()

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4001/api/blogs/all-blogs"
                );
                setBlogs(response.data);
                console.log(response.data);

            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, [setBlogs]);

    return (
        <main className="relative mt-4">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-2">
                            Featured Articles
                        </h2>
                        <div className="w-16 sm:w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
                        {blogs && blogs.length > 0 ? (
                            blogs.slice(0, 4).map((element) => (
                                <Link
                                    to={`/blog/${element._id}`}
                                    key={element._id}
                                    className='group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
                                >
                                    <div className='relative aspect-video overflow-hidden'>
                                        <img
                                            src={element.blogImage.url}
                                            alt={element.title}
                                            className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
                                            loading="lazy"
                                        />
                                        <div className='absolute top-2 sm:top-4 left-2 sm:left-4'>
                                            <span className='bg-blue-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full'>
                                                Featured
                                            </span>
                                        </div>
                                    </div>

                                    <div className='p-3 sm:p-5'>
                                        <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200'>
                                            {element.title}
                                        </h3>

                                        <div className='flex items-center justify-between mt-3 sm:mt-4'>
                                            <div className='flex items-center space-x-2 sm:space-x-3'>
                                                {element.adminPhoto ? (
                                                    <img
                                                        src={element.adminPhoto}
                                                        alt={element.adminName}
                                                        className='w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-blue-600'
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://via.placeholder.com/40x40.png?text=A';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                                                        <FaUser className='text-blue-600' />
                                                    </div>
                                                )}
                                                <div>
                                                    <p className='text-xs sm:text-sm font-semibold text-gray-900 line-clamp-1'>
                                                        {element.adminName}
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full flex justify-center items-center py-8 sm:py-12">
                                <div className="text-center">
                                    <div className="text-gray-400 text-lg sm:text-xl">No blogs available</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero
