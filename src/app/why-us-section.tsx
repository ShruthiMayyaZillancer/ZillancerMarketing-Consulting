"use client";

import React, { useEffect } from "react";


const WhyUsSection: React.FC = () => {
    
  const erpLogos = [
    { name: "MS", subtitle: "Dynamics", color: "text-[#00A4EF]", delay: "0s" },
    { name: "Oracle", subtitle: "ERP", color: "text-[#FF0000]", delay: "0.5s" },
    { name: "SAP", subtitle: "Solutions", color: "text-[#0FAAFF]", delay: "1s" },
    { name: "Odoo", subtitle: "Platform", color: "text-[#875A7B]", delay: "1.5s" }
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]">
  {/* Futuristic holographic floating elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large holographic glow blobs */}
    <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-400/40 to-purple-500/40 opacity-30 rounded-full blur-3xl animate-float top-[-100px] left-[-100px]" />
    <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-purple-400/40 to-blue-500/40 opacity-30 rounded-full blur-3xl animate-float delay-1000 bottom-[-80px] right-[-120px]" />
    <div className="absolute w-[450px] h-[450px] bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 opacity-30 rounded-full blur-3xl animate-float delay-500 top-1/3 right-1/4" />
    
    {/* Subtle holographic grid overlay */}
    <div className="absolute inset-0 bg-[url('/images/futuristic-grid.svg')] opacity-10 mix-blend-screen" />
  </div>

  {/* Content with transparency for readability */}
  <div className="relative max-w-7xl mx-auto text-white">
    {/* Header */}
    <div className="text-center mb-16 fade-in-on-scroll opacity-0 transition-opacity duration-700 delay-200">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
        Why Choose Zillancer?
      </h2>
      <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
        Discover the revolutionary difference between traditional multi-vendor approaches and our streamlined, one-stop ERP solution.
      </p>
    </div>
       {/* Comparison */}
<div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20 relative">
  
  {/* Traditional Vendors */}
  <div className="flex flex-col justify-between bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg fade-in-on-scroll opacity-0 transition-all duration-700 delay-300 hover:scale-[1.02] hover:-translate-y-2 min-h-[580px]">
    <div>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4">Traditional Vendors</h3>
        <div className="w-20 h-1 bg-red-400 mx-auto rounded" />
      </div>
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg">
          Customer
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-8" />
      <div className="space-y-6">
        {[
          { title: "Consulting Companies", desc: "Advise which software to choose" },
          { title: "Service Providers", desc: "Implement the system" },
          { title: "Distributors", desc: "Supply licenses to partners" },
        ].map((step, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#5D5CDE] to-[#4B4BC8] p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-3">
              <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm opacity-90">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="text-center mt-8">
      <div className="inline-flex items-center space-x-2 bg-red-100/20 px-4 py-2 rounded-full">
        <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        <span className="font-semibold">Complex Multi-Step Process</span>
      </div>
    </div>
  </div>

  {/* VS */}
  <div className="flex justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:z-10">
    <div className="bg-gradient-to-tr from-red-500 to-orange-600 w-24 h-24 flex items-center justify-center rounded-full text-2xl font-bold shadow-lg animate-pulse">
      VS
    </div>
  </div>

  {/* Zillancer */}
  <div className="flex flex-col justify-between bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-[#5D5CDE]/40 fade-in-on-scroll transition-all duration-700 delay-300 hover:scale-[1.02] hover:-translate-y-2 min-h-[580px] relative before:absolute before:inset-0 before:rounded-2xl before:shadow-[inset_0_0_25px_rgba(93,92,222,0.4)] before:pointer-events-none">
    <div>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-orange-800  mb-4">Zillancer</h3>
        <div className="w-20 h-1 bg-[#5D5CDE] mx-auto rounded" />
      </div>
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
          Customer
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-8" />
      <div className="bg-gradient-to-r from-[#5D5CDE] to-[#4B4BC8] p-6 text-white rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl">
        <div className="text-center">
          <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
          <h4 className="font-bold text-xl mb-2">Zillancer</h4>
          <p className="text-lg opacity-95">Complete One-Stop Solution</p>
          <div className="mt-4 space-y-2 text-sm">
            {[
              "ERP Selection & Demo",
              "License Procurement",
              "Implementation & Support"
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full">
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <span className="font-semibold">Streamlined Single Solution</span>
      </div>
    </div>
  </div>

</div>

    <div className="text-center mb-16 transition-all  justify-between bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-[#5D5CDE]/40 fade-in-on-scroll transition-all duration-700 delay-300 hover:scale-[1.02] hover:-translate-y-2 relative before:absolute before:inset-0 before:rounded-2xl before:shadow-[inset_0_0_25px_rgba(93,92,222,0.4)] before:pointer-events-none">
      <h3 className="text-3xl font-bold text-white-800 dark:text-white mb-8">Supported ERP Solutions</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {erpLogos.map((logo, index) => (
          <div
            key={index}
            className={`erp-logo animate-float ${logo.color}`}
            style={{ animationDelay: logo.delay }}
      
          >
            <div className="text-center">
              <div className="text-lg font-bold">{logo.name}</div>
              <div className="text-xs">{logo.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in-on-scroll opacity-0 transition-opacity duration-700 delay-500">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your ERP Journey with Zillancer
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
