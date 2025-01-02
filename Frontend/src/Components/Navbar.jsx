import React, { useState } from 'react'
import { useAuth } from '../Context/AuthProvider'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const { user, blogs } = useAuth()
    const [show, setShow] = useState(false)

    return (
        <>
            <nav className='fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 backdrop-blur-sm shadow-lg' style={{ zIndex: 9999 }}>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        {/* Logo */}
                        <div className='flex-shrink-0'>
                            <Link to='/' className='text-2xl font-extrabold tracking-tight'>
                                <span className='bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
                                    Hamza
                                </span>
                                <span className='bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>
                                    Blogs
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-center space-x-8'>
                                <Link to='/' className='text-white hover:text-blue-500 transition-colors duration-300 font-medium'>
                                    Home
                                </Link>
                                <Link to='/blogs' className='text-white hover:text-blue-500 transition-colors duration-300 font-medium'>
                                    Blogs
                                </Link>
                                <Link to='/creators' className='text-white hover:text-blue-500 transition-colors duration-300 font-medium'>
                                    Creators
                                </Link>
                                <Link to='/contact' className='text-white hover:text-blue-500 transition-colors duration-300 font-medium'>
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Auth Buttons */}
                        <div className='hidden md:flex items-center space-x-4'>
                            <Link to='/dashboard'
                                className='inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                            >
                                Dashboard
                            </Link>
                            <Link to='/login'
                                className='inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full text-blue-600 dark:text-blue-500 bg-white dark:bg-gray-900 border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                            >
                                Login
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className='md:hidden'>
                            <button
                                onClick={() => setShow(!show)}
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'
                            >
                                {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu - Moved outside of nav */}
            {show && (
                <>
                    <div className='fixed inset-0 bg-black/50' style={{ zIndex: 9998 }}></div>
                    <div
                        className='md:hidden fixed left-0 right-0 bottom-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-y-auto'
                        style={{ zIndex: 9998 }}
                    >
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            <Link
                                to='/'
                                onClick={() => setShow(false)}
                                className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-500 hover:bg-gray-800 transition-colors duration-300'
                            >
                                Home
                            </Link>
                            <Link
                                to='/blogs'
                                onClick={() => setShow(false)}
                                className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-500 hover:bg-gray-800 transition-colors duration-300'
                            >
                                Blogs
                            </Link>
                            <Link
                                to='/creators'
                                onClick={() => setShow(false)}
                                className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-500 hover:bg-gray-800 transition-colors duration-300'
                            >
                                Creators
                            </Link>
                            <Link
                                to='/contact'
                                onClick={() => setShow(false)}
                                className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-500 hover:bg-gray-800 transition-colors duration-300'
                            >
                                Contact
                            </Link>
                            {/* Mobile Auth Buttons */}
                            <div className='mt-4 space-y-2 px-3'>
                                <Link
                                    to='/dashboard'
                                    onClick={() => setShow(false)}
                                    className='w-full flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to='/login'
                                    onClick={() => setShow(false)}
                                    className='w-full flex items-center justify-center px-6 py-2.5 text-base font-semibold rounded-full text-blue-600 dark:text-blue-500 bg-white dark:bg-gray-900 border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar
