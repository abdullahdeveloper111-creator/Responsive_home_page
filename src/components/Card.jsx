import React from 'react';
import webs from '../assets/image/webs.jpg';
import digita from '../assets/image/digita.jpg';
import app from '../assets/image/app.jpg';

const Card = () => {
  const courses = [
    {
      title: "Web Development",
      img: webs,
      loc: "Online / On-site",
      mentor: "Apna College",
      sub: "Free & Premium",
      isFeatured: false,
    },
    {
      title: "Digital Marketing",
      img: digita,
      loc: "Remote",
      mentor: "Apna College",
      sub: "Premium Only",
      isFeatured: true, // Elevates this card visually
    },
    {
      title: "App Development",
      img: app,
      loc: "Online",
      mentor: "Apna College",
      sub: "Free Trial",
      isFeatured: false,
    },
  ];

  return (
    <div className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-[1240px] mx-auto">
        {/* Subtle Heading Section */}
        <div className="text-center mb-16 space-y-2 animate-fadeIn">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Expertise</h2>
          <p className="text-4xl font-extrabold text-slate-900">Advanced Learning Paths</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-start p-8 rounded-3xl transition-all duration-500 bg-white
                ${course.isFeatured 
                  ? "md:-translate-y-6 border-2 border-blue-500 shadow-2xl ring-4 ring-blue-500/10 scale-105" 
                  : "border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-3"
                }`}
            >
              {/* Image Container with Reveal Animation */}
              <div className="overflow-hidden rounded-2xl w-full mb-6">
                <img 
                  src={course.img} 
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={course.title} 
                />
              </div>

              {/* Tag for Featured */}
              {course.isFeatured && (
                <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full absolute top-6 right-6 font-bold tracking-widest uppercase shadow-lg">
                  Most Popular
                </span>
              )}

              <h3 className={`text-2xl font-bold mb-4 tracking-tight ${course.isFeatured ? "text-blue-700" : "text-slate-800"}`}>
                {course.title}
              </h3>

              <div className="space-y-3 mb-8 w-full">
                <p className="text-slate-500 text-sm flex items-center gap-2">
                  <span className="bg-blue-50 p-1.5 rounded-lg text-blue-600">📍</span> {course.loc}
                </p>
                <p className="text-slate-500 text-sm flex items-center gap-2">
                  <span className="bg-blue-50 p-1.5 rounded-lg text-blue-600">🎓</span> Mentor: {course.mentor}
                </p>
                <p className="text-slate-500 text-sm flex items-center gap-2 font-medium">
                  <span className="bg-blue-50 p-1.5 rounded-lg text-blue-600">💳</span> {course.sub}
                </p>
              </div>

              {/* Sophisticated Button Animation */}
              <button 
                className={`mt-auto w-full py-4 rounded-xl font-bold transition-all duration-300 transform active:scale-95
                  ${course.isFeatured 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 shadow-xl" 
                    : "bg-slate-900 text-white hover:bg-blue-600"
                  }`}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;