import React, { useRef, useEffect, useState } from "react";
import vid from "../assets/Carsousal/video_course.mp4";
import web from "../assets/Carsousal/webs.jpg";
import digi from "../assets/Carsousal/digitals.jpg";
import ap from "../assets/Carsousal/app.jpg";

const Backgrounds = ({ heroData }) => {
  const images = [web, digi, ap];
  const [herocount, setHerocount] = useState(0);
  const [playstatus, setPlayStatus] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const videoRef = useRef(null);

  // Auto-slide carousel logic
  useEffect(() => {
    if (playstatus) return;
    const interval = setInterval(() => {
      setHerocount((prev) => (prev + 1) % images.length);
    }, 4500); 
    return () => clearInterval(interval);
  }, [playstatus, images.length]);

  // Video playback effect
  useEffect(() => {
    if (playstatus && videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Video playback error", err));
    } else if (!playstatus && videoRef.current) {
      videoRef.current.pause();
    }
  }, [playstatus]);

  // Mobile Swipe Logic
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.targetTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 70) {
      setHerocount((prev) => (prev + 1) % images.length);
      setTouchStart(null);
    } else if (distance < -70) {
      setHerocount((prev) => (prev - 1 + images.length) % images.length);
      setTouchStart(null);
    }
  };

  return (
    <div 
      className="relative w-full h-[60vh] sm:h-[450px] lg:h-[550px] overflow-hidden group touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Contrast Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />

      {/* Image Carousel */}
      {!playstatus &&
        images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Hero Background"
            className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-[1200ms] ease-in-out ${
              idx === herocount ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          />
        ))}

      {/* Video Layer */}
      {playstatus && (
        <div className="absolute inset-0 z-0 animate-fadeIn">
          <video ref={videoRef} className="w-full h-full object-cover" loop muted playsInline>
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Text Content */}
      <div className={`absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 lg:left-24 z-20 text-white transition-opacity duration-500 ${playstatus ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
          {heroData[herocount]?.text1}
        </h1>
        <p className="mt-4 text-base sm:text-xl lg:text-2xl text-gray-200 font-light max-w-lg">
          {heroData[herocount]?.text2}
        </p>
      </div>

      {/* Shared Control Bar */}
      <div className="absolute bottom-8 sm:bottom-12 inset-x-6 sm:inset-x-12 lg:inset-x-24 flex justify-between items-center z-30">
        
        {/* Navigation Dots (Hidden when video plays for clean look) */}
        <div className={`flex gap-4 transition-opacity ${playstatus ? 'opacity-0' : 'opacity-100'}`}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHerocount(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                herocount === idx ? "bg-white scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Toggle Play/Close Button */}
        <div
          onClick={() => setPlayStatus(!playstatus)}
          className="flex items-center gap-4 cursor-pointer group/play"
        >
          <span className="text-white font-bold text-sm tracking-widest uppercase hidden sm:block">
            {playstatus ? "Close Preview" : "Discover More"}
          </span>
          <div className="relative w-14 h-14 flex justify-center items-center">
            {/* Pulsing effect only when video is NOT playing */}
            {!playstatus && <div className="absolute inset-0 bg-white/30 rounded-full animate-ping group-hover:animate-none"></div>}
            
            <div className={`relative w-12 h-12 rounded-full flex justify-center items-center shadow-2xl transition-all duration-300 ${playstatus ? 'bg-red-600 text-white hover:scale-110' : 'bg-white text-black group-hover:scale-110'}`}>
              <span className="text-xl font-bold">
                {playstatus ? "✕" : "▶"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backgrounds;