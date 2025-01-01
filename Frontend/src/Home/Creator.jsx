import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Creator = () => {
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        const fetchAdmins = async () => {
            const { data } = await axios.get("http://localhost:4001/api/users/admins", {
                withCredentials: true
            })
            console.log(data);
            setAdmin(data)
        }
        fetchAdmins()
    }, [])

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9'>
            <div className='space-y-3 mb-16 text-center'>
                <h1 className='text-5xl font-bold text-gray-900 tracking-tight'>
                    Popular Creators
                </h1>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                    The concept of creators varies widely across different niches and categories
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-9'>
                {admin && admin.length > 0 ? (
                    admin.slice(0, 4).map((element, index) => (
                        <div
                            key={element._id}
                            className='group relative block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1'
                        >
                            <div className='aspect-[16/10] relative overflow-hidden'>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <img
                                    src={element.photo.url}
                                    alt={element.name}
                                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out'
                                    loading="lazy"
                                />
                                <div className='absolute top-4 left-4 z-20'>
                                    <div className='w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg'>
                                        <span className='text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'>
                                            {index + 1}
                                        </span>
                                    </div>
                                </div>
                                <div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
                                    <div className='w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full'></div>
                                </div>
                            </div>
                            <div className='p-4 space-y-2'>
                                <h3 className='text-xl font-semibold text-black transition-all duration-300'>
                                    {element.name}
                                </h3>
                                <div className='flex items-center gap-2'>
                                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800'>
                                        {element.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-4 text-center py-16">
                        <div className="text-gray-400 text-xl">No creators available</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Creator
