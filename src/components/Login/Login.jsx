import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="flex sm:items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md  rounded-lg p-8">
                <h2 className="text-3xl w-[80%] font-bold text-start text-gray-800">Signin to your PopX account</h2>
                <p className="text-start w-[80%] text-gray-400 font-medium my-3 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                <form>
                    <div className="my-8 relative">
                        <label className="block text-[#6c24fc] text-sm font-bold mb-2 absolute top-[-12px] left-3 bg-gray-100" htmlFor="email">
                            Email Address <span className='text-red-500'>*</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded-md w-full p-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                        />
                    </div>

                    <div className="mb-6 relative">
                        <label className="block text-[#6c24fc] text-sm font-bold mb-2 absolute top-[-12px] left-3 bg-gray-100" htmlFor="password">
                            Password <span className='text-red-500'>*</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded-md w-full p-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        className="bg-[#6c24fc] hover:bg-[#ac82ffca] text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                    >
                       <Link to='/dashboard'>Login</Link> 
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Login
