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
        <main className="relative mt-5">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
                    <div className="mb-6">
                        <div className="flex flex-col items-start">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 relative">
                                Trending

                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                Discover our most popular articles
                            </p>
                        </div>
                    </div>


                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="transform 500ms ease-in-out"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px px-2"
                    >
                        {blogs && blogs.length > 0 ? (
                            blogs.map((element) => (
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
                                    </div>
                                    <div className='absolute top-2 sm:top-4 left-2 sm:left-4'>
                                        <span className='bg-blue-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full'>
                                            Trending
                                        </span>
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
                                        {/* </div> */}
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-gray-400 text-lg">No blogs available</div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
        </main>
    )
}

export default Trending
