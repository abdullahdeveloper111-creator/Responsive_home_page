import React from 'react'
import imaa from '../assets/image/imaa.jpg'
const Expert = () => {
  return (
    <div className="max-w-[1140px] mx-auto p-5 my-10  grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Image Section */}
  <div className="flex justify-center items-center">
    <img 
      src={imaa} 
      className="w-full max-w-[80%] h-auto object-cover"
      alt="web-development"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col justify-center items-start p-5">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Become a <span className="text-blue-600">Web Developer</span>
    </h2>

    <p className="text-lg mb-6">
      Join our comprehensive web development course and gain the skills needed
      to build modern, responsive websites through hands-on projects and expert guidance.
    </p>

    <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
      Get Started
    </button>
  </div>

</div>

  )
}

export default Expert