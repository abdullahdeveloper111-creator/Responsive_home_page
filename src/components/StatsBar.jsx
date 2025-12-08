import React, { useState, useEffect } from 'react';

const StatsBar = () => {
  const [visitors, setVisitors] = useState(1240);
  const [isLoaded, setIsLoaded] = useState(false);

  // Ratio Data: Used for both the Donut and the Bottom Bar
  const courseData = [
    { label: 'Web Dev', value: 45, color: '#3b82f6', tailwind: 'bg-blue-500' },
    { label: 'Marketing', value: 30, color: '#22d3ee', tailwind: 'bg-cyan-400' },
    { label: 'App Dev', value: 25, color: '#1e293b', tailwind: 'bg-slate-800' },
  ];

  useEffect(() => {
    const visitorInterval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    const timeout = setTimeout(() => setIsLoaded(true), 300);
    return () => { clearInterval(visitorInterval); clearTimeout(timeout); };
  }, []);

  return (
    <div className="bg-white py-16 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 space-y-12">
        
        {/* Top Section: Live Stats & Donut Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Numeric Stats */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { val: visitors.toLocaleString(), lab: "Live Visitors", col: "text-blue-600" },
              { val: "94%", lab: "Satisfaction", col: "text-slate-900" },
              { val: "150+", lab: "Industry Mentors", col: "text-slate-900" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <h3 className={`text-4xl font-black ${stat.col} tabular-nums`}>{stat.val}</h3>
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">{stat.lab}</p>
              </div>
            ))}
          </div>

          {/* Side: Animated Donut Chart */}
          <div className="lg:col-span-5 flex items-center justify-center bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm relative group">
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                {/* Background Track */}
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3.8" />
                {/* Dynamic Segments */}
                {courseData.map((seg, i) => {
                  const offset = courseData.slice(0, i).reduce((acc, curr) => acc + curr.value, 0);
                  return (
                    <circle
                      key={i}
                      cx="18" cy="18" r="15.9"
                      fill="none"
                      stroke={seg.color}
                      strokeWidth="4"
                      strokeDasharray={`${isLoaded ? seg.value : 0} 100`}
                      strokeDashoffset={-offset}
                      className="transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
              {/* Inner Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Verticals</span>
                <span className="text-xl font-black text-slate-900">3 Major</span>
              </div>
            </div>
            {/* Legend for Donut */}
            <div className="ml-8 hidden sm:flex flex-col gap-2">
              {courseData.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                  <div className={`w-2 h-2 rounded-full ${item.tailwind}`}></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: The Composition Ratio Bar */}
        <div className="space-y-6 pt-10 border-t border-slate-100 animate-fadeIn">
          <div className="flex justify-between items-end">
            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">Enrollment Mix</h4>
            <span className="text-blue-600 font-bold text-xs">Live Data Feed</span>
          </div>

          <div className="relative">
            {/* Multi-segment Progress Bar */}
            <div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden">
              {courseData.map((r, i) => (
                <div 
                  key={i}
                  style={{ width: isLoaded ? `${r.value}%` : '0%' }}
                  className={`${r.tailwind} transition-all duration-[1500ms] border-r border-white/10 last:border-none`}
                ></div>
              ))}
            </div>

            {/* Custom Interactive Labels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 gap-6">
              {courseData.map((r, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-700">{r.label}</span>
                    <span className="text-sm font-black text-blue-600">{r.value}%</span>
                  </div>
                  <div className={`h-1 w-full bg-slate-100 rounded-full overflow-hidden`}>
                     <div style={{ width: isLoaded ? '100%' : '0%' }} className={`h-full ${r.tailwind} opacity-20 transition-all duration-1000 delay-500`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;