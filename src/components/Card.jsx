import React from 'react'
// import ima from '../assets/image/ima.jpg'
import webs from '../assets/image/webs.jpg'
import digita from '../assets/image/digita.jpg'
import app from '../assets/image/app.jpg'
const Card = () => {
  return (
  <div className="py-20 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1240px] mx-auto gap-8">

    {/* Card 1 */}
    <div className="bg-white border rounded-xl shadow-xl p-6 flex flex-col items-start 
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img src={webs} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">Web Development</h3>
      <p className="text-sm text-gray-600 mb-1">📍 Location: Online / On-site</p>
      <p className="text-sm text-gray-600 mb-1">Mentor : Apna College</p>

      <p className="text-sm text-gray-600 mb-4">💳 Subscription: Free & Premium</p>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Learn More
      </button>
    </div>

    {/* Card 2 (Middle - Elevated & darker) */}
    <div className="bg-blue-50 border-2 border-blue-500 rounded-xl shadow-2xl p-6 flex flex-col items-start
                    -translate-y-4 scale-105
                    transition-all duration-300 hover:-translate-y-6 hover:shadow-3xl">
      <img src={digita} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-blue-700 mb-2">Digital Marketing</h3>
      <p className="text-sm text-gray-700 mb-1">📍 Location: Remote</p>
      <p className="text-sm text-gray-600 mb-1">Mentor : Apna College</p>
      <p className="text-sm text-gray-700 mb-4">💳 Subscription: Premium Only</p>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Learn More
      </button>
    </div>

    {/* Card 3 */}
    <div className="bg-white border rounded-xl shadow-xl p-6 flex flex-col items-start 
                    transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img src={app} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">App Development</h3>
      <p className="text-sm text-gray-600 mb-1">📍 Location: Online</p>
      <p className="text-sm text-gray-600 mb-1">Mentor : Apna College</p>

      <p className="text-sm text-gray-600 mb-4">💳 Subscription: Free Trial</p>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Learn More
      </button>
    </div>

  </div>
</div>

  )
}

export default Card