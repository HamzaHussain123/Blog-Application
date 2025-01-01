import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
    const fadeInUp = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5 }
    };

    const socialHover = {
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.2 }
        }
    };

    return (
        <>
            <motion.footer
                className='bg-gradient-to-b from-gray-50 to-gray-50 dark:from-gray-600 dark:to-gray-950 py-16'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                        <motion.div
                            className='text-center md:text-left'
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className='text-lg font-semibold mb-6 text-gray-800 dark:text-white relative inline-block group'>
                                Products
                                <motion.span
                                    className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600'
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                ></motion.span>
                            </h2>
                            <ul className='space-y-3'>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Flutter
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        React
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Andriod
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        iOS
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className='text-center md:text-left'
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className='text-lg font-semibold mb-6 text-gray-800 dark:text-white relative inline-block group'>
                                Design to code
                                <motion.span
                                    className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600'
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                ></motion.span>
                            </h2>
                            <ul className='space-y-3'>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Figma plugin
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Templates
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className='text-center md:text-left'
                            {...fadeInUp}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className='text-lg font-semibold mb-6 text-gray-800 dark:text-white relative inline-block group'>
                                Comparison
                                <motion.span
                                    className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600'
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                ></motion.span>
                            </h2>
                            <ul className='space-y-3'>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Dhsite vs Analype
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Dhsite vs Analype
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Dhsite vs Analype
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Dhsite vs Analype
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Dhsite vs Analype
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Dhsite vs Analype
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className='text-center md:text-left'
                            {...fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className='text-lg font-semibold mb-6 text-gray-800 dark:text-white relative inline-block group'>
                                Design to code
                                <motion.span
                                    className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600'
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                ></motion.span>
                            </h2>
                            <ul className='space-y-3'>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        About Us
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Contact
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Career
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Privacy Policy
                                    </a>
                                </motion.li>
                                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a href="#" className='text-gray-400 hover:text-blue-500 transition-colors duration-300'>
                                        Terms of Service
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.footer>

            <motion.div
                className='bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                        <motion.div
                            className='flex-shrink-0'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
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
                        </motion.div>

                        <motion.div
                            className='text-gray-600 dark:text-gray-400 text-sm'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <p>© 2025 HamzaBlogs. All rights reserved</p>
                        </motion.div>

                        <div className='flex items-center space-x-6'>
                            {[
                                { Icon: FaGithub, href: "#" },
                                { Icon: FaLinkedin, href: "#" },
                                { Icon: IoMdMail, href: "#" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors duration-300'
                                    variants={socialHover}
                                    whileHover="hover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + (index * 0.1) }}
                                >
                                    <social.Icon className='h-6 w-6' />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Footer
