"use client";
import React, { useState, useEffect } from 'react';

interface StageData {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  challenges: string[];
  color: string;
  bgColor: string;
  darkBgColor: string;
}

const stages: StageData[] = [
  {
    id: 1,
    title: "Selection",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    description: "Strategic vendor and product selection with comprehensive evaluation",
    color: "text-orange-700",
    bgColor: "bg-orange-200",
    darkBgColor: "dark:bg-orange-600",
    challenges: [
      "Smart product choice",
      "Vendor comparisons",
      "Clear requirements",
      "Bias-free decisions",
      "Budget-friendly"
    ]
  },
  {
    id: 2,
    title: "License",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
    description: "No hidden surprises.",
    color: "text-teal-700",
    bgColor: "bg-teal-300",
    darkBgColor: "dark:bg-teal-600",
    challenges: [
      "Recurring vs. one-time clarity",
      "Spot hidden costs",
      "Easy renewals & upgrades",
      "Better discounts"
    ]
  },
  {
    id: 3,
    title: "Implementation",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    ),
    description: "On time, on budget, on point.",
    color: "text-blue-700",
    bgColor: "bg-blue-300",
    darkBgColor: "dark:bg-blue-600",
    challenges: [
"Cut high costs",
"Reduce partner dependency",
"Lower failure risk",
"Avoid overruns",
"Access skilled experts"
    ]
  },
  {
    id: 4,
    title: "Support",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
    description: "Ongoing maintenance and support optimization strategies",
    color: "text-purple-700", 
    bgColor: "bg-purple-300",
    darkBgColor: "dark:bg-purple-600",
    challenges: [
        "Manage recurring costs",
        "Faster resolutions",
        "Remote or onsite help",
        "Partner or in-house choice"
    ]
  }
];


const InnovativeCard: React.FC<{
  stage: StageData;
  isActive: boolean;
  index: number;
  onClick: () => void;
}> = ({ stage, isActive, index, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full">
      {/* Aligned Step Header */}
      <div className="text-center mb-4">

        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stage.bgColor} ${stage.darkBgColor} ${stage.color} shadow-lg mb-2 transition-all duration-300 transform ${
          isActive || isHovered ? 'scale-110' : ''
        }`}>
          {stage.icon}
        </div>
        <h2 className={`text-lg font-bold transition-all duration-300 ${
          isActive ? 'text-blue-600 dark:text-blue-400 transform scale-105' : 'text-gray-700 dark:text-gray-300'
        }`}>
           {stage.title}
        </h2>
      </div>

      <div 
        className={`relative w-full cursor-pointer perspective-1000 transition-all duration-500 transform ${
          isActive 
            ? 'scale-105 phase-glow-active' 
            : isHovered 
            ? 'scale-102 phase-glow-hover' 
            : 'hover:scale-102'
        }`}
        onClick={() => {
          onClick();
          setIsFlipped(!isFlipped);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className={`h-full ${stage.bgColor} ${stage.darkBgColor} rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group transition-all duration-500 ${
              isActive ? 'shadow-3xl border-blue-300 dark:border-blue-500' : ''
            } ${
              isHovered ? 'shadow-3xl' : ''
            }`}>
              <div className="h-full flex flex-col">
                {/* Card Header */}
                <div className="relative p-4 bg-gradient-to-r from-white/20 to-transparent ">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 p-4 space-y-2">
                  {stage.challenges.map((challenge, challengeIndex) => (
                    <div
                      key={challenge}
                      className="flex items-start space-x-3 p-2 bg-white/40 dark:bg-black/20 rounded-lg backdrop-blur-sm border border-white/30 dark:border-gray-600 hover:bg-white/60 dark:hover:bg-black/30 transition-all duration-300 transform hover:translate-x-1"
                      style={{ 
                        animationDelay: `${challengeIndex * 100}ms`,
                        animation: (isActive || isHovered) ? 'slideInRight 0.5s ease-out forwards' : 'none'
                      }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                        isActive || isHovered 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse' 
                          : 'bg-gray-400'
                      }`} />
                      <span className={`text-xs font-medium ${stage.color} dark:text-gray-200`}>
                        {challenge}
                      </span>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="w-full mb-4">
  <div className="bg-white/10 rounded-lg p-3 space-y-2">
    {stage.challenges.map((challenge, index) => (
      <div
        key={index}
        className="flex items-center text-white text-sm font-medium transform opacity-0 animate-fade-in-left"
        style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
      >
        <svg
          className="w-5 h-5 text-green-400 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {challenge}
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};


const InteractiveTimelineSections: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentStage(prev => prev >= stages.length ? 1 : prev + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  useEffect(() => {
    // Dark mode detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (event.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-8 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            Our consulting Approach
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            We simplify your ERP journey — from picking the right product to keeping it running smoothly. Our approach is tailored to your unique needs, ensuring a seamless and efficient ERP implementation.
          </p>
        </div>


        {/* Stage Cards - All Visible Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stages.map((stage, index) => (
            <InnovativeCard
              key={stage.id}
              stage={stage}
              isActive={currentStage === stage.id}
              index={index}
              onClick={() => setCurrentStage(stage.id)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .phase-glow-active {
          box-shadow: 
            0 0 30px rgba(59, 130, 246, 0.5),
            0 0 60px rgba(147, 51, 234, 0.3),
            0 0 90px rgba(59, 130, 246, 0.1);
          animation: phaseGlowActive 2s ease-in-out infinite alternate;
        }
        
        .phase-glow-hover {
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.3),
            0 0 40px rgba(147, 51, 234, 0.2);
          animation: phaseGlowHover 1s ease-in-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes phaseGlowActive {
          0% {
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.5),
              0 0 60px rgba(147, 51, 234, 0.3),
              0 0 90px rgba(59, 130, 246, 0.1);
          }
          100% {
            box-shadow: 
              0 0 40px rgba(59, 130, 246, 0.7),
              0 0 80px rgba(147, 51, 234, 0.4),
              0 0 120px rgba(59, 130, 246, 0.2);
          }
        }
        
        @keyframes phaseGlowHover {
          0% {
            box-shadow: 
              0 0 10px rgba(59, 130, 246, 0.1),
              0 0 20px rgba(147, 51, 234, 0.1);
          }
          100% {
            box-shadow: 
              0 0 20px rgba(59, 130, 246, 0.3),
              0 0 40px rgba(147, 51, 234, 0.2);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveTimelineSections;
