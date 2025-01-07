import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../Context/AuthProvider';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import axios from 'axios';


const MyProfile = () => {
    const { profile } = useAuth();
    const [creators, setCreators] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    console.log(profile);

    useEffect(() => {
        const fetchCreators = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4001/api/users/my-profile",
                    { withCredentials: true }
                );
                if (Array.isArray(data)) {
                    setCreators(data);
                } else {
                    // console.error("Invalid response format:", data);
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
        <div className='min-h-screen bg-gradient-to-b from-blue-200 via-blue-150 to-white pt-24 pb-16 px-4'>

            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : !profile ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-600"
                >
                    No user profile found
                </motion.div>
            ) : (
                <motion.div
                    className="grid grid-cols-1 justify-center gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-4"
                >
                    <motion.div
                        key={profile._id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/3 mx-auto"
                    >
                        <div className="relative h-32 sm:h-40 bg-gradient-to-r from-blue-500 to-purple-500">
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <img
                                    src={profile.photo.url}
                                    alt={profile.name}
                                    className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="pt-16 sm:pt-20 pb-4 sm:pb-6 px-3 sm:px-4 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                                {profile.name}
                            </h3>
                            <p className="text-gray-600 mb-1">{profile.role}</p>
                            <p className="text-sm text-gray-500 mb-4">
                                {profile.email}
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
                </motion.div>
            )}
        </div>
    );


}

export default MyProfile
