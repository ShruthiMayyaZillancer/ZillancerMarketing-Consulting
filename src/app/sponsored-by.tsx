"use client";

import React, { useEffect, useRef, useState } from 'react';

// Types
interface ClientLogo {
  name: string;
  logoUrl: string;
  fallbackIcon: string;
  gradient: string;
  category: string;
  fileName: string;
}

interface StatItem {
  value: string;
  label: string;
  color: string;
}

// Data - Using actual logo paths from your local directory
const clients: ClientLogo[] = [
  {
    name: 'IKEA',
    logoUrl: '/logos/logo-Ikea.png',
    fallbackIcon: '🏠',
    gradient: 'from-blue-500 to-blue-600',
    category: 'Furniture & Design',
    fileName: 'logo-Ikea.png'
  },
  {
    name: 'JUPITER',
    logoUrl: '/logos/logo-Jupiter.png',
    fallbackIcon: '🪐',
    gradient: 'from-orange-500 to-red-500',
    category: 'Technology Solutions',
    fileName: 'logo-Jupiter.png'
  },
  {
    name: 'P&G',
    logoUrl: '/logos/logo-pg.png',
    fallbackIcon: '🧴',
    gradient: 'from-green-500 to-blue-500',
    category: 'Consumer Goods',
    fileName: 'logo-pg.png'
  },
  {
    name: 'PETRO GULF',
    logoUrl: '/logos/logo-petrogulf.png',
    fallbackIcon: '⛽',
    gradient: 'from-gray-700 to-black',
    category: 'Energy & Oil',
    fileName: 'logo-petrogulf.png'
  },
  {
    name: 'SAUDI GERMAN HOSPITAL',
    logoUrl: '/logos/logo-saudigermanhospital.png',
    fallbackIcon: '🏥',
    gradient: 'from-red-500 to-pink-500',
    category: 'Healthcare Services',
    fileName: 'logo-saudigermanhospital.png'
  }
];

const stats: StatItem[] = [
  { value: '500+', label: 'Projects Delivered', color: 'text-purple-600 dark:text-purple-400' },
  { value: '50+', label: 'Countries Served', color: 'text-blue-600 dark:text-blue-400' },
  { value: '99%', label: 'Client Satisfaction', color: 'text-green-600 dark:text-green-400' },
  { value: '24/7', label: 'Support Available', color: 'text-orange-600 dark:text-orange-400' }
];

// Animated Background Component
const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 dark:bg-purple-800/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-blue-300/20 dark:bg-blue-800/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-pink-300/20 dark:bg-pink-800/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-300/20 dark:bg-green-800/20 rounded-full animate-pulse"></div>
      
      {/* Gradient blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-blue-300/30 dark:from-purple-800/30 dark:to-blue-800/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-purple-300/30 dark:from-blue-800/30 dark:to-purple-800/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Moving particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 dark:bg-purple-600/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Header Section Component
const HeaderSection: React.FC = () => {
  return (
    <div className="mb-16 animate-fade-in-up">
      <div className="inline-block mb-4">
        <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full shadow-lg animate-pulse">
          Trusted Partners
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
        Our clients have different{' '}
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
          journeys
        </span>
        ,<br />but shared{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          goals
        </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Join the growing community of forward-thinking companies that trust us to deliver 
        exceptional results and drive their success forward.
      </p>
    </div>
  );
};

// Client Logo Component with Enhanced Circular Fitting
const ClientLogo: React.FC<{ client: ClientLogo; index: number }> = ({ client, index }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const element = logoRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      element.style.transform = `translateY(-15px) scale(1.1) rotate(${Math.random() * 6 - 3}deg)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = '';
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div 
      ref={logoRef}
      className="group transition-all duration-500"
      style={{ 
        animation: 'float 3s ease-in-out infinite',
        animationDelay: `${index * 0.5}s` 
      }}
    >
      <div className="w-36 h-36 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 backdrop-blur-10 bg-opacity-95 border border-white/20 dark:border-white/10 overflow-hidden relative">
        {!imageError && !imageLoaded && (
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${client.gradient} flex items-center justify-center`}>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
        
        {!imageError ? (
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center p-6">
            <img
              src={client.logoUrl}
              alt={client.name}
              className="max-w-full max-h-full object-contain transition-all duration-300 filter drop-shadow-lg"
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{ 
                opacity: imageLoaded ? 1 : 0,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                borderRadius: '8px'
              }}
            />
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none"></div>
          </div>
        ) : (
          // Fallback to icon if image fails to load
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${client.gradient} flex items-center justify-center text-white font-bold text-2xl p-4`}>
            <div className="text-center">
              <div className="text-3xl mb-1 animate-bounce">{client.fallbackIcon}</div>
              <div className="text-xs font-bold leading-tight">
                {client.name.includes(' ') ? (
                  client.name.split(' ').slice(0, 2).map((word, i) => (
                    <div key={i}>{word}</div>
                  ))
                ) : (
                  client.name
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Ring effect on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-purple-400/0 group-hover:border-purple-400/50 transition-all duration-300"></div>
      </div>
      
      <div className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        {client.category}
      </div>
      
      {/* Company name below logo */}
      <div className="mt-2 text-xs font-semibold text-gray-600 dark:text-gray-400 text-center">
        {client.name}
      </div>
    </div>
  );
};

// Stats Section Component
const StatsSection: React.FC = () => {
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center animate-fade-in-up transform hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: `${0.2 + index * 0.2}s` }}
        >
          <div className={`text-3xl font-bold ${stat.color} mb-2 animate-pulse`}>
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

// Call to Action Component
const CallToAction: React.FC = () => {
  return (
    <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
      <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
        <span className="relative z-10">Join Our Success Stories</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        <div className="absolute inset-0 animate-ping bg-white/20 rounded-full opacity-0 group-hover:opacity-100"></div>
      </button>
    </div>
  );
};

// Main Component
const SponsoredBy: React.FC = () => {
  useEffect(() => {
    // Dark mode detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Add custom animations to head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
      <AnimatedBackground />
      
      <section className="relative py-16 px-8 lg:py-24 z-10">
        <div className="container mx-auto text-center">
          <HeaderSection />
          
          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <ClientLogo 
                key={client.name} 
                client={client} 
                index={index}
              />
            ))}
          </div>
          
          <StatsSection />
          <CallToAction />
        </div>
      </section>
    </div>
  );
};

export default SponsoredBy;