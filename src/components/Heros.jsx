import React from "react";

const Heros = ({ heroData, herocount, setHeroCount, setPlayStatus }) => {
  return (
    <>
      {/* Text */}
      <div className="absolute top-1/3 left-10 z-20 text-white">
        <h1 className="text-4xl font-bold">{heroData[herocount].text1}</h1>
        <p className="text-xl mt-2">{heroData[herocount].text2}</p>
      </div>

      {/* Left dots */}
      <div className="absolute left-10 bottom-10 flex gap-3 z-20">
        {[0, 1, 2].map((num) => (
          <div
            key={num}
            onClick={() => setHeroCount(num)}
            className={`
              w-4 h-4 rounded-full border-2 cursor-pointer
              ${herocount === num ? "bg-white" : "bg-transparent border-white"}
            `}
          ></div>
        ))}
      </div>

      {/* Right play button */}
      <div
        onClick={() => setPlayStatus(true)}
        className="absolute right-10 bottom-10 z-20 flex items-center gap-2 cursor-pointer"
      >
        <div className="w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex justify-center items-center">
          ▶
        </div>
        <span className="text-white text-lg">Play Video</span>
      </div>
    </>
  );
};

export default Heros;
