import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: 'no'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

   

    return (
        <div className="flex justify-center min-h-screen bg-gray-100 py-10">
            <form className="px-5 py-6 rounded-md w-96" >
                <h2 className="text-3xl font-bold mb-6 text-start w-[70%]">Create your PopX account</h2>

                <div className='h-[90%] flex flex-col justify-between pt-5'>
                    <div className=' flex flex-col gap-3'>
                        <div className="mb-4 relative">
                            <label className="block font-semibold text-[#6c24fc] absolute top-[-13px] left-[12px] bg-gray-100">Full Name  <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="block w-full border border-gray-300 p-3 rounded-md"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block font-semibold text-[#6c24fc] absolute top-[-13px] left-[12px] bg-gray-100">Phone number  <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="block w-full border border-gray-300 p-3 rounded-md"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block font-semibold text-[#6c24fc] absolute top-[-13px] left-[12px] bg-gray-100">Email address  <span className='text-red-500'>*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="block w-full border border-gray-300 p-3 rounded-md"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block font-semibold text-[#6c24fc] absolute top-[-13px] left-[12px] bg-gray-100">Password  <span className='text-red-500'>*</span></label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="block w-full border border-gray-300 p-3 rounded-md"
                            />
                        </div>

                        <div className="mb-2 relative">
                            <label className="block font-semibold text-[#6c24fc] absolute top-[-13px] left-[12px] bg-gray-100">Company name  <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                className="block w-full border border-gray-300 p-3 rounded-md"
                            />
                        </div>

                        <div className="mb-6 ml-1">
                            <label className="block font-semibold text-gray-700">
                                Are you an Agency? <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-4 mt-2">
                                <label className="flex items-center space-x-2 text-lg text-purple-600 font-medium">
                                    <input
                                        type="radio"
                                        name="isAgency"
                                        value="yes"
                                        checked={formData.isAgency === "yes"}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                                    />
                                    <span>Yes</span>
                                </label>

                                <label className="flex items-center space-x-2 text-lg text-purple-600 font-medium">
                                    <input
                                        type="radio"
                                        name="isAgency"
                                        value="no"
                                        checked={formData.isAgency === "no"}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500"
                                    />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#6c24fc] text-white font-bold py-2 rounded-md hover:bg-purple-700 block mx-auto"
                        >
                           <Link to='/dashboard'>Create Account</Link> 
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Signup;