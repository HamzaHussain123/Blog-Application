import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Creators = () => {
    const [creators, setCreators] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCreators = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4001/api/users/admins",
                    { withCredentials: true }
                );
                if (Array.isArray(data)) {
                    setCreators(data);
                } else {
                    console.error("Invalid response format:", data);
                    setCreators([]);
                }
            } catch (error) {
                console.error("Error fetching creators:", error);
                setCreators([]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCreators()
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-white pt-24 pb-16 px-4'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Meet Our Creative Team
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Passionate professionals dedicated to bringing you the best content and experiences.
                </p>
            </motion.div>

            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : creators.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-600"
                >
                    No creators found
                </motion.div>
            ) : (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-4"
                >
                    {creators.map((creator) => (
                        <motion.div
                            key={creator._id}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="relative h-32 sm:h-40 bg-gradient-to-r from-blue-500 to-purple-500">
                                <div className="absolute inset-0 bg-black opacity-10"></div>
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                    <img
                                        src={creator.photo.url}
                                        alt={creator.name}
                                        className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
                                    />
                                </div>
                            </div>

                            <div className="pt-16 sm:pt-20 pb-4 sm:pb-6 px-3 sm:px-4 text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                    {creator.name}
                                </h3>
                                <p className="text-gray-600 mb-1">{creator.role}</p>
                                <p className="text-sm text-gray-500 mb-4">
                                    {creator.email}
                                </p>

                                <div className="flex justify-center space-x-4">
                                    {[
                                        { icon: FaLinkedin, color: "text-blue-600" },
                                        { icon: FaGithub, color: "text-gray-800" },
                                        { icon: FaTwitter, color: "text-blue-400" },
                                        { icon: MdEmail, color: "text-red-500" }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`${social.color} hover:opacity-80 transition-opacity`}
                                        >
                                            <social.icon className="w-6 h-6" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}

export default Creators
