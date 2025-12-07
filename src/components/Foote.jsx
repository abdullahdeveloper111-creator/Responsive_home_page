import React from 'react'

const Foote = () => {
  return (
   <footer className="bg-gray-900 text-white py-14 px-6">
  <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

    {/* Column 1 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-gray-300">
        <li className="hover:text-white cursor-pointer transition text-sm">About Us</li>
        <li className="hover:text-white cursor-pointer transition text-sm">Service</li>
        <li className="hover:text-white cursor-pointer transition text-sm">Careers</li>
        <li className="hover:text-white cursor-pointer transition text-sm">Blog</li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="space-y-2 text-gray-300">
        <li className="hover:text-white cursor-pointer transition text-sm  ">Web Development</li>
        <li className="hover:text-white cursor-pointer transition text-sm  ">App Development</li>
        <li className="hover:text-white cursor-pointer transition text-sm  ">Digital Marketing</li>
        <li className="hover:text-white cursor-pointer transition text-sm  ">Graphic Design</li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Support</h3>
      <ul className="space-y-2 text-gray-300">
        <li className="hover:text-white cursor-pointer transition text-sm">Help Center</li>
        <li className="hover:text-white cursor-pointer transition text-sm">Privacy Policy</li>
        <li className="hover:text-white cursor-pointer transition text-sm">Terms of Use</li>
        <li className="hover:text-white cursor-pointer transition text-sm">FAQ</li>
      </ul>
    </div>

    {/* Column 4 */}
    <div>
  <h3 className="text-lg font-semibold mb-4">Help & Resources</h3>
  <ul className="space-y-2 text-gray-300">
    <li className="hover:text-white cursor-pointer transition text-sm">Help Center</li>
    <li className="hover:text-white cursor-pointer transition text-sm">Account Support</li>
    <li className="hover:text-white cursor-pointer transition text-sm">Privacy Policy</li>
    <li className="hover:text-white cursor-pointer transition text-sm">Terms & Conditions</li>
  </ul>
</div>

    {/* <div>
      <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
      <p className="text-gray-300 mb-3 text-sm">Follow us on:</p>

      <div className="flex space-x-4 text-xl">
        <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-400 transition"></i>
        <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-500 transition"></i>
        <i className="fa-brands fa-twitter cursor-pointer hover:text-blue-300 transition"></i>
        <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-500 transition"></i>
      </div>
    </div> */}

  </div>

  {/* Divider */}
  <div className="w-full h-[1px] bg-gray-700 my-8"></div>

  {/* Copyright Section */}
  <div className="text-center">
    <p className="text-sm md:text-md text-gray-400">
      © {new Date().getFullYear()} YourCompanyName. All Rights Reserved.
    </p>
  </div>
</footer>

  )
}

export default Foote