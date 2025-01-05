import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Sidebar from './Sidebar.jsx';

const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [about, setAbout] = useState("")
    const [blogImage, setBlogImage] = useState("")

    const [blogImagePreview, setblogImagePreview] = useState("")


    const validateForm = () => {
        if (!title.trim()) {
            toast.error('Title is required');
            return false;
        }
        if (!category.trim()) {
            toast.error('Category is required');
            return false;
        }
        if (about.trim().split(" ").length < 200) {
            toast.error("About section must have at least 200 words");
            return false;
        }
        if (!blogImage) {
            toast.error('Please upload a photo');
            return false;
        }
        return true;
    };

    const handleCreateBlogs = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) return;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('about', about);
        formData.append('blogImage', blogImage);

        try {
            const { data } = await toast.promise(
                axios.post('http://localhost:4001/api/blogs/create', formData, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }),
                {
                    pending: 'Creating...',
                    success: 'Blog created successfully! 👍',
                    error: 'Blog creation failed 🤯'
                }
            );

            // Clear form fields after successful registration
            setTitle("");
            setCategory("");
            setAbout("");
            setBlogImage("");
            setblogImagePreview("");

        } catch (error) {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Blog creation failed";
            toast.error(errorMessage);
            console.error("Blog creation error:", error);
        }
    }

    return (
        <div className="your-wrapper-class">
            <ToastContainer />
            <div>
                <Sidebar />

                <div
                    className="min-h-screen relative py-8 px-4 sm:px-6 lg:px-8"
                    style={{
                        background: 'linear-gradient(135deg, #EBF4FF 0%, #C3DAFE 50%, #A3BFFA 100%)',
                    }}
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
                        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl"></div>
                    </div>

                    <div className="relative max-w-md mx-auto">
                        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/50">
                            {/* Logo Section */}
                            <div className='text-center mb-6'>
                                <Link to='/' className='text-3xl font-black tracking-tight inline-block'>
                                    <span className='bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
                                        Hamza
                                    </span>
                                    <span className='bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>
                                        Blogs
                                    </span>
                                </Link>
                                <p className="mt-2 text-gray-600 text-sm">Share your ideas with the world</p>
                            </div>

                            <form className="space-y-4" onSubmit={handleCreateBlogs}>
                                {/* Blog Title */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Blog Title</label>
                                    <input
                                        type="text"
                                        placeholder='Enter blog title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                    />
                                </div>

                                {/* Blog Content */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Content</label>
                                    <textarea
                                        placeholder='Write your blog content here...'
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm h-32'
                                    ></textarea>
                                </div>

                                {/* Blog Category */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                    >
                                        <option value="">Select Category</option>
                                        <option value="technology">Technology</option>
                                        <option value="lifestyle">Lifestyle</option>
                                        <option value="education">Education</option>
                                        <option value="Devotion">Devotion</option>
                                        <option value="business">Business</option>
                                    </select>
                                </div>

                                {/* Blog Thumbnail Upload */}
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Blog Image</label>
                                    <div className='mt-1 flex items-center space-x-3'>
                                        <div className='w-12 h-12 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center overflow-hidden'>
                                            {blogImagePreview ? (
                                                <img src={blogImagePreview} alt="blogImagePreview" className="w-full h-full object-cover" />
                                            ) : (
                                                <svg
                                                    className="w-6 h-6 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                        <div className='flex-1'>
                                            <div className='flex items-center justify-between'>
                                                <div className='p-1.5 text-sm bg-white/80 border border-gray-200 rounded-lg flex-grow'>
                                                    <span className='px-2 text-gray-500'>
                                                        {blogImage ? blogImage.name : 'Upload an image'}
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <label className="cursor-pointer ml-2">
                                                        <input
                                                            type="file"
                                                            id="thumbnail-upload"
                                                            onChange={(e) => {
                                                                if (e.target.files[0]) {
                                                                    setBlogImage(e.target.files[0]);
                                                                    setblogImagePreview(URL.createObjectURL(e.target.files[0]));
                                                                }
                                                            }}
                                                            className='hidden'
                                                            accept="image/*"
                                                        />
                                                        <div className="p-1.5 text-blue-500 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-colors">
                                                            <svg
                                                                className="w-5 h-5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M12 4v16m8-8H4"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </label>
                                                    {/* {blogImagePreview && (
                                                    // <button
                                                    //     type="button"
                                                    //     onClick={(e) => {
                                                    //         e.preventDefault();
                                                    //         e.stopPropagation();
                                                    //         setBlogImage(null);
                                                    //         setblogImagePreview(null);
                                                    //         const fileInput = document.getElementById('thumbnail-upload');
                                                    //         if (fileInput) fileInput.value = '';
                                                    //     }}
                                                    //     className='ml-2 p-1.5 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors'
                                                    // >
                                                    //     <svg
                                                    //         className="w-5 h-5"
                                                    //         fill="none"
                                                    //         stroke="currentColor"
                                                    //         viewBox="0 0 24 24"
                                                    //     >
                                                    //         <path
                                                    //             strokeLinecap="round"
                                                    //             strokeLinejoin="round"
                                                    //             strokeWidth="2"
                                                    //             d="M6 18L18 6M6 6l12 12"
                                                    //         />
                                                    //     </svg>
                                                    // </button>
                                                )} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className='w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg text-sm transition duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg'
                                    >
                                        Publish Blog
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CreateBlog
