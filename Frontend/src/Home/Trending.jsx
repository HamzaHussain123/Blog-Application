import React from 'react'
import { useAuth } from '../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Trending = () => {
    const { blogs } = useAuth()
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1536 },
            items: 5,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 1536, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <main className="relative py-16">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
                            Trending Now
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover our most popular and engaging articles
                        </p>
                    </div>

                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all 500ms ease-in-out"
                        transitionDuration={500}
                        containerClass="carousel-container -mx-4"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="px-4"
                        renderButtonGroupOutside={true}
                        arrows={true}
                        dotListClass="custom-dot-list-style !bottom-[-2rem]"
                    >
                        {blogs && blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <Link
                                    to={`/blog/${blog._id}`}
                                    key={blog._id}
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 mx-2"
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
                                                Trending
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
                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = 'https://via.placeholder.com/40x40.png?text=A';
                                                    }}
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-600">
                                                    <FaUser className="text-blue-600" />
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-medium text-gray-900 line-clamp-1">
                                                    {blog.adminName}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-16 col-span-full">
                                <div className="text-gray-400 text-xl">No blogs available</div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        </main>
    )
}

export default Trending
