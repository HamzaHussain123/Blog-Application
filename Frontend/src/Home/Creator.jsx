import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FaSpinner } from 'react-icons/fa'

const Creator = () => {
    const [admin, setAdmin] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const { data } = await axios.get("http://localhost:4001/api/users/admins", {
                    withCredentials: true
                })
                setAdmin(data)
            } catch (error) {
                console.error("Error fetching admins:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchAdmins()
    }, [])

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <FaSpinner className="animate-spin text-4xl text-blue-600 mb-4" />
                <p className="text-gray-600 font-medium">Loading creators...</p>
            </div>
        )
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9'
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='space-y-3 mb-16 text-center'
            >
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight'>
                    Popular Creators
                </h1>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                    The concept of creators varies widely across different niches and categories
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-9'
            >
                {admin && admin.length > 0 ? (
                    admin.slice(0, 4).map((element, index) => (
                        <motion.div
                            key={element._id}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.2 }
                            }}
                            className='group relative block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500'
                        >
                            <div className='aspect-[16/10] relative overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <img
                                    src={element.photo.url}
                                    alt={element.name}
                                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out'
                                    loading="lazy"
                                />
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                    className='absolute top-4 left-4 z-20'
                                >
                                    <div className='w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg'>
                                        <span className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
                                            {index + 1}
                                        </span>
                                    </div>
                                </motion.div>
                                <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
                                    <div className='w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full'></div>
                                </div>
                            </div>
                            <div className='p-4 space-y-2'>
                                <h3 className='text-xl font-semibold text-black transition-all duration-300'>
                                    {element.name}
                                </h3>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className='flex items-center gap-2'
                                >
                                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800'>
                                        {element.role}
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-4 text-center py-16"
                    >
                        <div className="text-gray-400 text-xl">No creators available</div>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    )
}

export default Creator
