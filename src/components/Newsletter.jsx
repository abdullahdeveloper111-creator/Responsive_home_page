import React, { useState, useEffect } from 'react';

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-blue-700 py-16 px-6 overflow-hidden">
      <div 
        className={`max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        
        {/* Left Content - Animated text with sliding underline */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Want to learn <span className="relative inline-block">
              Latest IT Skills?
              <span className={`absolute bottom-0 left-0 h-[4px] bg-cyan-300 transition-all duration-1000 delay-500 ${isVisible ? 'w-full' : 'w-0'}`}></span>
            </span>
          </h2>
          <p className="text-lg text-blue-100 font-medium opacity-90 transition-opacity delay-300">
            Signup to our newsletter and stay up to date with the digital revolution.
          </p>
        </div>

        {/* Right Section - Input field with focus glow */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-4 rounded-xl border-2 border-transparent bg-white/10 text-white placeholder-blue-200 backdrop-blur-md focus:border-cyan-400 focus:bg-white/20 focus:outline-none transition-all duration-300"
            />
            
            {/* Animated Action Button */}
            <button className="relative overflow-hidden bg-cyan-400 text-blue-900 font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] active:scale-95 group">
              <span className="relative z-10">Notify Me</span>
              {/* Shimmer Effect */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-500 group-hover:left-[100%]"></div>
            </button>
          </div>

          <p className="text-sm text-blue-200">
            We value your privacy. Your data is <span className="text-cyan-300 cursor-pointer border-b border-cyan-300/30 hover:border-cyan-300 transition-all">secure with us.</span>
          </p>
        </div>
      </div>

      {/* Background Motion Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>
  );
}

export default Newsletter;