import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full bg-blue-600 border px-7 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

  {/* Left Text Section */}
  <div className="col-span-1 flex flex-col justify-center items-start text-center md:text-left">
    <h2 className="text-lg text-white font-semibold">
      Want to learn Latest IT skills?
    </h2>
    <span className="text-sm text-white">
      Signup to our newsletter and stay up to date
    </span>
  </div>

  {/* Right Input Section */}
  <div className="col-span-3 flex flex-col md:flex-row justify-center items-center gap-3 h-[200px]">
    <input 
      type="email"
      placeholder="Enter your email"
      className="p-3  border rounded-md md:rounded-l-md w-full max-w-sm focus:outline-none"
    />

    <button className="bg-black text-white px-2 py-2 rounded-md md:rounded-l-none md:rounded-r-md hover:bg-blue-700 transition duration-300">
      Notify Me
    </button>
  </div>

</div>

  )
}
export default Newsletter;