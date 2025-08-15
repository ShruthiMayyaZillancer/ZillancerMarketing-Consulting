"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "Industry Backed Expertise",
    title: "Skilled consultants with real-world insights ",
  },
  {
    count: "Full Spectrum Services",
    title: "From ERP to digital marketing under one roof ",
  },
  {
    count: "Tailored Strategies",
    title: "We design solutions around your challenges ",
  },
  {
    count: "Agile & Transparent Delivery",
    title: "Always aligned with your goals",
  },
  {
    count: "Results-Driven Mindset",
    title: "Focused on outcomes, not just outputs",
  },
];

export function OurStats() {
  return (

<section className="container mx-auto px-5 py-24 md:py-32 lg:py-44">
  <div className="grid gap-12 lg:grid-cols-2 items-stretch">
    
    {/* Enhanced feature card with animated gradient and content improvements */}
    <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.3)] h-full min-h-[480px] flex">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
        style={{ backgroundImage: "url('/image/ocean.jpg')" }}
      ></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative z-10 p-10 md:p-12 flex flex-col justify-between w-full">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            Strategic Partnership
          </span>
          
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Zillancer</span>?
          </h2>
          
          <p className="text-xl text-blue-100/90 leading-relaxed max-w-xl">
            Zillancer is your strategic partner in business transformation. We combine deep industry expertise with cutting-edge innovation to deliver results that matter.
          </p>
          
          <ul className="mt-8 space-y-3">
            {[
              "Data-driven decision making",
              "Industry-leading expertise",
              "Proven success methodology"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-blue-100/80">
                <svg className="w-5 h-5 mr-3 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-4">
          <button className="px-8 py-3.5 bg-white hover:bg-opacity-95 text-blue-900 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
            Get Started
          </button>
          <button className="px-8 py-3.5 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
    
    {/* Stats section with improved visual design */}
    <div className="flex flex-col">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Impact</h3>
        <p className="text-gray-600">Real results that speak for themselves</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
        {[
          {
            title: "Client Success Rate",
            value: "94%",
            description: "Projects delivered with exceptional client satisfaction",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
            color: "blue"
          },
          {
            title: "ROI Delivered",
            value: "3.2x",
            description: "Average return on investment for our clients",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            color: "indigo"
          },
          {
            title: "Industry Experience",
            value: "15+",
            description: "Years of expertise across multiple sectors",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
            color: "purple" 
          },
          {
            title: "Global Clients",
            value: "500+",
            description: "Organizations we've helped transform worldwide",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            color: "emerald"
          }
        ].map((stat, key) => (
          <div 
            key={key} 
            className={`group bg-gradient-to-br from-${stat.color}-50 to-white rounded-2xl shadow-lg hover:shadow-xl p-7 transition-all duration-300 hover:translate-y-[-5px] border border-${stat.color}-100 flex flex-col justify-between h-full`}
          >
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600 mr-4 group-hover:bg-${stat.color}-500 group-hover:text-white transition-colors duration-300`}>
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{stat.title}</h3>
            </div>
            
            <div className="space-y-2">
              <div className={`text-4xl font-bold text-${stat.color}-600`}>{stat.value}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100/50">
        <div className="flex items-center">
          <div className="mr-4 p-3 rounded-full bg-indigo-100 text-indigo-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Ready to transform your business?</h4>
            <p className="text-gray-600 text-sm">Schedule a free consultation with our experts</p>
          </div>
          <button className="ml-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
    
  </div>
</section>
  );
}

export default OurStats;
