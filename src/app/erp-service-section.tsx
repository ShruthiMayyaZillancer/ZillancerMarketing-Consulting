"use client";
import React, { useState, useEffect, useRef } from "react";

interface PortfolioItemData {
  id: number;
  title: string;
  category: string;
  image: string;
  themes: string[];
}

const portfolioData: PortfolioItemData[] = [
  {
    id: 1,
    title: "Microsoft Dynamics 365",
    category: "Powerful business applications for enterprise resource planning and CRM with AI-driven insights.",
    image: '/image/Microsoft Dynamic 365.svg',
    themes: ["AI-Driven Analytics", "Cloud Integration", "Mobile Access", "Custom Workflows"],
  },
  {
    id: 2,
    title: "Odoo",
    category: "All-in-one open-source ERP and CRM software with modular architecture.",
    image: '/image/Odoo_logo.svg',
    themes: ["Open Source", "Modular Design", "Custom Apps", "E-commerce Ready"],
  },
  {
    id: 3,
    title: "Sapience HCM",
    category: "Human capital management solutions for modern workforce optimization.",
    image: "/image/Sapience HCM.svg",
    themes: ["Workforce Analytics", "Performance Management", "Payroll Integration", "Compliance Tools"],
  },
  {
    id: 4,
    title: "SAP",
    category: "Industry-standard ERP for enterprises across all domains and industries.",
    image: "/image/SAP_2011_logo.svg",
    themes: ["Enterprise Scale", "Industry Solutions", "Real-time Processing", "Global Compliance"],
  },
  {
    id: 5,
    title: "Zoho",
    category: "Integrated suite of business apps and CRM tools for seamless operations.",
    image: "/image/ZOHO_logo_2023.svg",
    themes: ["Integrated Suite", "CRM Tools", "Project Management", "Document Management"],
  },
  {
    id: 6,
    title: "Infor",
    category: "Cloud-based industry-specific ERP solutions with advanced automation.",
    image: "/image/Infor_logo.svg",
    themes: ["Industry Specific", "Process Automation", "Supply Chain", "Manufacturing Focus"],
  },
  {
    id: 7,
    title: "Oracle",
    category: "Robust ERP and database solutions for large-scale enterprise operations.",
    image: "/image/Oracle_logo.svg",
    themes: ["Database Excellence", "Enterprise Scale", "Security Focus", "Global Operations"],
  },
  {
    id: 8,
    title: "Epicor",
    category: "ERP focused on manufacturing and distribution with IoT integration.",
    image: "/image/Epicor-logo.svg",
    themes: ["Manufacturing Focus", "IoT Integration", "Supply Chain", "Quality Management"],
  },
  {
    id: 9,
    title: "Orion ONE ERP",
    category: "Unified ERP platform tailored for complex workflows and business processes.",
    image: "image/Azention OneERP_1.svg",
    themes: ["Unified Platform", "Complex Workflows", "Custom Solutions", "Process Optimization"],
  }
];


const ERPServiceSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);

  const getItemsPerView = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const perView = getItemsPerView();
      setItemsPerView(perView);
      setCurrentIndex((prev) => Math.min(prev, portfolioData.length - perView));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = portfolioData.length - itemsPerView;

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const prev = () => currentIndex > 0 && setCurrentIndex((i) => i - 1);
  const next = () => currentIndex < maxIndex && setCurrentIndex((i) => i + 1);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    isDraggingRef.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
  <div
    className="relative min-h-screen py-10 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
  >
    {/* Background image with transparency */}
    <div
      className="absolute inset-0 bg-[url('/image/Hexagon-background.jpg')] bg-cover bg-center opacity-30 pointer-events-none"
    />

    <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange leading-tight mb-4">
          Next-Gen <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">ERP Services</span>
        </h2>
        <p className="text-lg text-gray/80 max-w-xxl mx-auto mb-10">
          Transform your business with cutting-edge ERP solutions - implementation, customization, support.
        </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Prev Button */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary transition-transform ${
              currentIndex === 0
                ? "opacity-50"
                : "hover:scale-110 active:scale-95"
            }`}
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary transition-transform ${
              currentIndex === maxIndex
                ? "opacity-50"
                : "hover:scale-110 active:scale-95"
            }`}
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {portfolioData.map((item) => (
              <div
                key={item.id}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4 relative group cursor-pointer transition-transform duration-500 ease-in-out"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 md:h-[500px] object-contain"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md">
                    <div className="absolute bottom-8 left-8 right-8 text-white transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{item.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.themes.map((theme, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 rounded-full text-xs"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex
                  ? "bg-[#5D5CDE]"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>        
      </div>
    </div>
  );
};

export default ERPServiceSection;
