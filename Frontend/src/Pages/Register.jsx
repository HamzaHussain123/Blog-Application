import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Context/AuthProvider';


const Register = () => {

    const { isAuthenticated,
        setIsAuthenticated, } = useAuth()
    const navigateTo = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [education, setEducation] = useState("")
    const [photo, setPhoto] = useState("")
    const [photoPreview, setPhotoPreview] = useState("")

    const validateForm = () => {
        if (!name.trim()) {
            toast.error('Name is required');
            return false;
        }
        if (!email.trim()) {
            toast.error('Email is required');
            return false;
        }
        if (!password.trim()) {
            toast.error('Password is required');
            return false;
        }
        if (!role) {
            toast.error('Please select a role');
            return false;
        }
        if (!education.trim()) {
            toast.error('Education is required');
            return false;
        }
        if (!photo) {
            toast.error('Please upload a photo');
            return false;
        }
        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) return;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        formData.append('education', education);
        formData.append('photo', photo);

        try {
            const { data } = await toast.promise(
                axios.post('http://localhost:4001/api/users/register', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }),
                {
                    pending: 'Registering...',
                    success: 'Registration successful! 👍',
                    error: 'Registration failed 🤯'
                }
            );

            // Clear form fields after successful registration
            setIsAuthenticated(true)
            setName("");
            setEmail("");
            setPassword("");
            setRole("");
            setEducation("");
            setPhoto("");
            setPhotoPreview("");
            navigateTo("/")

        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Registration failed";
            toast.error(errorMessage);
            console.error("Registration error:", error);
        }
    }

    return (
        <div className="your-wrapper-class">
            <ToastContainer />
            <div className="min-h-screen relative py-8 px-4 sm:px-6 lg:px-8"
                style={{
                    background: 'linear-gradient(135deg, #EBF4FF 0%, #C3DAFE 50%, #A3BFFA 100%)',
                }}>
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
                            <p className="mt-2 text-gray-600 text-sm">Join our community of writers and readers</p>
                        </div>

                        <form className="space-y-4" onSubmit={handleRegister}>
                            {/* Role */}
                            <div>
                                <label className="text-sm font-medium text-gray-700"></label>
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                >
                                    <option value="">Select Role</option>
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="text-sm font-medium text-gray-700"></label>
                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium text-gray-700"></label>
                                <input
                                    type="email"
                                    placeholder='you@example.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-sm font-medium text-gray-700"></label>
                                <input
                                    type="password"
                                    placeholder='Create password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                />
                            </div>

                            {/* Education */}
                            <div>
                                <label className="text-sm font-medium text-gray-700"></label>
                                <select
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                    className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                >
                                    <option value="">Select Education</option>
                                    <option value="B.E">B.E</option>
                                    <option value="B.S">B.S</option>
                                    <option value="M.S">M.S</option>
                                    <option value="Matric">Matric</option>
                                    <option value="Intermediate">Intermediate</option>
                                </select>
                            </div>

                            {/* Photo Upload */}
                            <div>
                                <label className="text-sm font-medium text-gray-700"></label>
                                <div className='mt-1 flex items-center space-x-3'>
                                    <div className='w-12 h-12 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center overflow-hidden'>
                                        {photoPreview ? (
                                            <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex items-center justify-between'>
                                            <div className='p-1.5 text-sm bg-white/80 border border-gray-200 rounded-lg flex-grow'>
                                                <span className='px-2 text-gray-500'>
                                                    {photo ? photo.name : 'Upload an image'}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <label className="cursor-pointer ml-2">
                                                    <input
                                                        type="file"
                                                        id="photo-upload"
                                                        onChange={(e) => {
                                                            if (e.target.files[0]) {
                                                                setPhoto(e.target.files[0]);
                                                                setPhotoPreview(URL.createObjectURL(e.target.files[0]));
                                                            }
                                                        }}
                                                        className='hidden'
                                                        accept="image/*"
                                                    />
                                                    <div className="p-1.5 text-blue-500 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-colors">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                        </svg>
                                                    </div>
                                                </label>
                                                {photoPreview && (
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            setPhoto(null);
                                                            setPhotoPreview(null);
                                                            const fileInput = document.getElementById('photo-upload');
                                                            if (fileInput) fileInput.value = '';
                                                        }}
                                                        className='ml-2 p-1.5 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors'
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Register Button and Login Link */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className='w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg text-sm transition duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg'
                                >
                                    Create Account
                                </button>
                                <p className='text-center text-gray-600 text-sm mt-4'>
                                    Already registered?
                                    <Link to="/login" className='text-blue-700 hover:text-blue-700 ml-1  font-extrabold '>
                                        Login Now
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
