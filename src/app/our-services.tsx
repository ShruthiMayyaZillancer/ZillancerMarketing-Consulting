"use client";

import React from "react";

const OurServiceSection: React.FC = () => {
 const services = [
  {
    title: "ERP Selection & Vendor-Neutral Guidance",
    category: "Find the right ERP for your business, from Microsoft Dynamics 365, SAP, Oracle, Zoho, Odoo, and more, without being pushed to a single product.",
    tag: "Consulting",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"></path>
    ),
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Business Strategy & Process Consulting",
    category: "Understand your challenges, define the right strategy, and optimize workflows to ensure scalable and ROI-driven business outcomes.",
    tag: "Consulting",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    ),
    gradient: "from-green-400 to-teal-500",
  },
  {
    title: "ERP Implementation & Technical Alignment",
    category: "Implement ERP systems that are technically sound and aligned with your unique business objectives.",
    tag: "Implementation",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm4 8h8v4H8v-4zm0-6h8v4H8V6z"></path>
    ),
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Digital Transformation Partnership",
    category: "Beyond software implementation, we become your strategic partner in digital transformation, ensuring sustainable business growth.",
    tag: "Consulting",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.5 7h7l-5.5 5 2 7-6-4-6 4 2-7-5.5-5h7L12 2z"></path>
    ),
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "ROI-Focused Optimization",
    category: "Our consultative approach guarantees real-world results, ensuring you’re never stuck with a system that doesn’t deliver.",
    tag: "Consulting",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    ),
    gradient: "from-yellow-400 to-orange-500",
  },{
      title: "24/7 Maintenance",
      category: "Round-the-clock support to keep your systems running smoothly.",
      tag: "Support",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0L6 6m12-2l2 2M6 6v12a2 2 0 002 2h8a2 2 0 002-2V6M6 6H4m16 0h2M10 11h4m-4 4h4"></path>
      ),
      gradient: "from-purple-500 via-red-500 to-teal-500",
    },
];


  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(93, 92, 222, 0.1); }
          50% { box-shadow: 0 0 40px rgba(93, 92, 222, 0.2), 0 0 60px rgba(93, 92, 222, 0.1); }
        }

        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
        .animate-glow:hover { animation: glow 2s ease-in-out infinite; }
        .animate-pulse { animation: pulseScale 4s ease-in-out infinite; }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dark .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gradient-text {
          background: linear-gradient(135deg, #5D5CDE, #FF6B6B, #4ECDC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .service-card {
          transition: all 0.3s ease;
        }
        .service-card:hover { transform: translateY(-5px); }
      `}</style>

      <section className="relative min-h-screen overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-red-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-teal-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-500/10 to-teal-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "-1.5s" }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900 dark:text-white">We Provide</span>
              <span className="block gradient-text">Professional Services</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Tailored <span className="text-purple-500 font-semibold">ERP services</span> that drive <span className="text-red-500 font-semibold">efficiency</span>, <span className="text-teal-500 font-semibold">clarity</span>, and <span className="gradient-text font-semibold">measurable results</span>.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <div key={idx} className="service-card glass-effect rounded-3xl p-8 group animate-pulse hover:animate-glow animate-fade-in-up">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.icon}
                    </svg>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wider text-teal-500">{service.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServiceSection;
