import React from "react";
import { ReactTyped } from "react-typed";
const Heroo = () => {
  return (
    <div className="bg-blue-600 w-full px-4 py-30 flex justify-center items-center flex-col text-white">
      <div className="max-w-[1240px] mx-auto text-center flex flex-col gap-4">

        <p className="text-lg md:text-xl tracking-wide uppercase text-black font-semibold">
          Learn With Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Grow With Us
        </h2>

        <p className="text-sm md:text-lg gap-1.5 flex padding-50 justify-center items-center">
          Learn 
           <ReactTyped strings={[ 
        " Web Development",
        " App Development",
        " Programming Languages",
      ]} 
      typeSpeed={100} 
      backSpeed={50} loop
      />
      
        </p>
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
      Get Started
      </button>
      </div>
    </div>
  );
};

export default Heroo;
