import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const validateForm = () => {
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
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const { data } = await toast.promise(
                axios.post('http://localhost:4001/api/users/login', {
                    email,
                    password,
                    role
                }),
                {
                    pending: 'Logging in...',
                    success: 'User logged in successfully',
                    error: 'Login failed!!'
                }
            );

            // Set the JWT token in cookies
            document.cookie = `jwt=${data.token}; path=/`; // Adjust according to your API response

            // Optionally, update the authentication state
            // You might need to use a context or prop to set isAuthenticated here

            // Clear form fields after successful login
            setEmail("");
            setPassword("");
            setRole("");

        } catch (error) {
            console.error("Login error:", error);
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <ToastContainer />
            <div className="relative py-8 px-4 sm:px-6 lg:px-8 w-full"
                style={{
                    background: 'linear-gradient(135deg, #EBF4FF 0%, #C3DAFE 50%, #A3BFFA 100%)',
                    minHeight: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}>
                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-blue-300/30 blur-3xl"></div>
                </div>

                {/* Center the card */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-md px-4">
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
                                <p className="mt-2 text-gray-600 text-sm">Welcome back! Please login to your account</p>
                            </div>

                            <form className="space-y-4" onSubmit={handleLogin}>
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
                                        placeholder='Enter password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='mt-1 w-full p-2.5 bg-white/80 border border-gray-200 rounded-lg text-sm'
                                    />
                                </div>

                                {/* Login Button and Register Link */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className='w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg text-sm transition duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg'
                                    >
                                        Login
                                    </button>
                                    <p className='text-center text-gray-600 text-sm mt-4'>
                                        Don't have an account?
                                        <Link to="/register" className='text-blue-700 hover:text-blue-700 ml-1 font-extrabold'>
                                            Register Now
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
