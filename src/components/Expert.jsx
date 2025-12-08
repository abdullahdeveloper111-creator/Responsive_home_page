import React, { useState, useEffect, useRef } from 'react';
import imaa from '../assets/image/imaa.jpg';

const Expert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  // Trigger animation when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current;
    observer.observe(currentRef);

    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <div 
      ref={domRef}
      className={`max-w-[1140px] mx-auto p-5 my-16 grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Image Section - Performance Optimized */}
      <div className="flex justify-center items-center">
        <img 
          src={imaa} 
          loading="lazy" // Performance: Only loads when user scrolls near
          className="w-full max-w-[90%] md:max-w-full h-auto object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          alt="web-development"
        />
      </div>

      {/* Text Section - Animation Staggering */}
      <div className="flex flex-col justify-center items-start p-2">
        <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
          Start your journey
        </h4>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
          Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Web Developer</span>
        </h2>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Join our comprehensive web development course and gain the skills needed
          to build modern, responsive websites through hands-on projects and expert guidance.
        </p>

        {/* Action Button with Enhanced Pulse Animation */}
        <button className="relative group overflow-hidden bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-300">
          <span className="relative z-10">Get Started Now</span>
          <div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default Expert;