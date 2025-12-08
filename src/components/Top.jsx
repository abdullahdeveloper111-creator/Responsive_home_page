import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Top = () => {
  const [toggle, setToggle] = React.useState(false);

  // Function to close the menu when a link is clicked
  const handleNavClick = () => {
    setToggle(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-4 py-2">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between w-full py-2">
        <div className="text-3xl font-bold text-white z-[60]">wscubetech</div>

        {/* Toggle Icons - Added z-index to stay above the menu */}
        <div className="md:hidden z-[60] cursor-pointer">
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(false)}
              className="text-2xl text-white" 
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(true)}
              className="text-2xl text-white"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-lg text-white font-semibold">
          {['Home', 'About', 'Service', 'Help'].map((item) => (
            <button 
              key={item} 
              className="px-4 py-1 border border-transparent rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1"
            >
              {item}
            </button>
          ))}
        </ul>

        {/* Mobile Sidebar */}
        <ul
          className={`fixed top-0 left-0 w-full h-screen text-white bg-black/95 text-lg p-20 md:hidden flex flex-col gap-5 transform duration-300 ease-in-out z-50 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {['Home', 'About', 'Service', 'Help'].map((item) => (
            <li key={item} className="border-b border-gray-700 w-full text-center">
              <button 
                onClick={handleNavClick} // Closes menu on click
                className="w-full py-4 uppercase tracking-widest hover:text-gray-400"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Top;