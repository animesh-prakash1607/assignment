import React from 'react'

const Dashboard = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 shadow-md rounded-lg overflow-hidden min-h-screen relative sm:my-10">
        <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">Account Settings</h3>
      </div>
      <div className="shadow-md"></div>
      <div className="flex flex-col items-center py-4">
        <img
          className="w-24 h-24 rounded-full border-2 border-purple-500"
          src="https://via.placeholder.com/150" 
          alt="Profile"
        />
        <h2 className="mt-2 text-lg font-semibold">Marry Doe</h2>
        <p className="text-gray-600">Marry@gmail.com</p>
        <p className="mt-4 text-start text-gray-700 px-4 font-medium">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      <div className="border-t-4 border-dotted border-gray-400 w-full my-4"></div>
      <div className="border-t-4 border-dotted border-gray-400 w-full my-4 absolute bottom-5"></div>

    </div>
  )
}

export default Dashboard
