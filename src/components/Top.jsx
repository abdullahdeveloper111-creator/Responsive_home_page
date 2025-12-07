import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Top = () => {
    const[toggle,setToggle]=React.useState(false);
  return (
    <div className='bg-gray-800 text-white flex justify-between items-center px-4 py-2'>
        <div className='max-w-1240px mx-auto flex items-center gap-8 py-5px justify-between w-full'>
            <div className='text-3xl font-bold'>
                wscubetech
            </div>
            { 
            toggle?(
            <AiOutlineClose  onClick={() => setToggle(!toggle)} className='text-2xl text-white md:hidden block'/>)
            :(
            <AiOutlineMenu   onClick={() => setToggle(!toggle)} className='text-2xl text-white md:hidden block'/>
            )
            }
            <ul className="p-3 hidden md:flex  text-lg gap-10 ">

            <li >Home</li>
            <li >About</li>
            <li >Service</li>
            <li >Login</li>
            </ul> 
            {/* for responsive design menu icon use AiOutlineMenu from react-icons/ai */}
            <ul className={`w-full h-screen p-3 md:hidden fixed  top-14  bg-black text-lg 
            duration-200 ${toggle ? 'left-0' : 'left-[100%]'}`}>

            <li className="p-5 border-b border-white hover:text-white hover:bg-gray-800">Home</li>
            <li className="p-5 border-b border-white hover:text-white hover:bg-gray-800">About</li>
            <li className="p-5 border-b border-white hover:text-white hover:bg-gray-800">Service</li>
            <li className="p-5 border-b border-white hover:text-white hover:bg-gray-800">Login</li>
            </ul>
        </div>
        </div>
  )
}

export default Top;