import React, { useState } from 'react'
import { useAuth } from '../Context/AuthProvider'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const { user, blogs } = useAuth()
    const [show, setShow] = useState(false)

    return (
        <nav className='fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg'>
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
                            <Link to='/' className='text-gray-600 hover:text-green-500 transition-colors duration-300 font-medium'>
                                Home
                            </Link>
                            <Link to='/blogs' className='text-gray-600 hover:text-green-500 transition-colors duration-300 font-medium'>
                                Blogs
                            </Link>
                            <Link to='/creators' className='text-gray-600 hover:text-green-500 transition-colors duration-300 font-medium'>
                                Creators
                            </Link>
                            <Link to='/contact' className='text-gray-600 hover:text-green-500 transition-colors duration-300 font-medium'>
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <Link to='/dashboard'
                            className='inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                        >
                            Dashboard
                        </Link>
                        <Link to='/login'
                            className='inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full text-emerald-600 bg-white border-2 border-emerald-500 hover:bg-emerald-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setShow(!show)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-500 hover:bg-gray-100 transition-colors duration-300'
                        >
                            {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {show && (
                <div className='md:hidden absolute w-full bg-white/95 backdrop-blur-sm'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        <Link
                            to='/'
                            onClick={() => setShow(false)}
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-500 hover:bg-gray-50 transition-colors duration-300'
                        >
                            Home
                        </Link>
                        <Link
                            to='/blogs'
                            onClick={() => setShow(false)}
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-500 hover:bg-gray-50 transition-colors duration-300'
                        >
                            Blogs
                        </Link>
                        <Link
                            to='/creators'
                            onClick={() => setShow(false)}
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-500 hover:bg-gray-50 transition-colors duration-300'
                        >
                            Creators
                        </Link>
                        <Link
                            to='/contact'
                            onClick={() => setShow(false)}
                            className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-500 hover:bg-gray-50 transition-colors duration-300'
                        >
                            Contact
                        </Link>
                        {/* Mobile Auth Buttons */}
                        <div className='mt-4 space-y-2 px-3'>
                            <Link
                                to='/dashboard'
                                onClick={() => setShow(false)}
                                className='w-full flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-semibold rounded-full text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                            >
                                Dashboard
                            </Link>
                            <Link
                                to='/login'
                                onClick={() => setShow(false)}
                                className='w-full flex items-center justify-center px-6 py-2.5 text-base font-semibold rounded-full text-emerald-600 bg-white border-2 border-emerald-500 hover:bg-emerald-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
