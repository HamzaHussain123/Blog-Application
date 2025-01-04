import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';


const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "https://api.web3forms.com/submit",
                {
                    access_key: '3148b3b7-6eef-4396-8657-b68b150ccbd7',
                    name: data.username,
                    email: data.email,
                    message: data.message
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                toast.success("Message sent successfully");
                reset();
            }
        } catch (error) {
            console.log('Error details:', error.response?.data);
            toast.error("An error occurred: " + (error.response?.data?.message || error.message));
        }
    }

    return (
        <div className='bg-gradient-to-b from-blue-200 via-blue-100 to-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300'>
                <div className='text-center mb-8'>
                    <h2 className='text-4xl font-extrabold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent'>
                        Get in Touch
                    </h2>
                    <p className='text-gray-600 mt-2'>We'd love to hear from you!</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Form Section */}
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-6'>Send us a message</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5' >
                            <div className='transform transition-all duration-300 hover:translate-x-2'>
                                <input type="text"
                                    name='username'
                                    placeholder='Your Name'
                                    className='w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                                    {...register('username', { required: true })} />
                                {errors.username && <p className='text-sm text-red-500 font-semibold'>This field is required.</p>}
                            </div>

                            <div className='transform transition-all duration-300 hover:translate-x-2'>
                                <input type="email"
                                    name='email'
                                    placeholder='Your Email'
                                    className='w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <p className='text-sm text-red-500 font-semibold'>This field is required.</p>}
                            </div>



                            <div className='transform transition-all duration-300 hover:translate-x-2'>
                                <textarea
                                    name='message'
                                    placeholder='Your Message'
                                    rows="4"
                                    className='w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300'
                                    {...register('message', { required: true })}
                                />
                                {errors.message && <p className='text-sm text-red-500 font-semibold'>This field is required.</p>}
                            </div>

                            <div>
                                <button type='submit'
                                    className='w-full bg-black text-white px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-800 active:scale-95'
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='w-full md:w-1/2 md:pl-8 border-l border-gray-200'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-6'>Contact Information</h3>
                        <ul className='space-y-6'>
                            <li className='flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-2'>
                                <div className='bg-red-100 p-3 rounded-full'>
                                    <FaPhone className='text-red-500 text-xl' />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Phone</p>
                                    <span className='text-gray-800 font-medium'>+92 3323188195</span>
                                </div>
                            </li>

                            <li className='flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-2'>
                                <div className='bg-pink-100 p-3 rounded-full'>
                                    <FaEnvelope className='text-pink-500 text-xl' />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Email</p>
                                    <span className='text-gray-800 font-medium'>HamzaBlogs@gmail.com</span>
                                </div>
                            </li>

                            <li className='flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-2'>
                                <div className='bg-red-100 p-3 rounded-full'>
                                    <FaMapMarkedAlt className='text-red-500 text-xl' />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Location</p>
                                    <span className='text-gray-800 font-medium'>Karachi, Pakistan</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
