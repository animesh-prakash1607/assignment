import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-end sm:justify-center gap-7 sm:w-[50%] sm:mx-auto bg-white px-6 py-10">
      {/* Main Content */}
      <div className='flex flex-col items-start sm:items-center w-[90%]'>
        <h1 className="text-3xl font-bold text-gray-800">Welcome to PopX</h1>
        <p className="mt-2 text-gray-400 font-semibold text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-4">
        <button className="w-full bg-[#6c24fc] text-white py-3 rounded-lg hover:bg-purple-600 transition font-semibold text-">
          <Link to="/signup">Create Account</Link>
        </button>
        <button className="w-full bg-[#cebafb]  text-black py-3 rounded-lg hover:bg-purple-100 transition font-semibold">
          <Link to='/login'>Already Registered? Login</Link>
        </button>
      </div>
    </div>
  )
}

export default Home
