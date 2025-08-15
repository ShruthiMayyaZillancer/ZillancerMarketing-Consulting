'use client';
import React, { useState, useEffect, useRef } from 'react';

// PlexusEffect Component
const PlexusEffect = ({ canvasRef }) => {
  const animationIdRef = useRef();
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1
        });
      }
    };

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
    };

    const drawLine = (p1, p2, distance) => {
      const opacity = 1 - (distance / 150);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        drawParticle(particle);
        
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - other.x, 2) + 
            Math.pow(particle.y - other.y, 2)
          );
          
          if (distance < 150) {
            drawLine(particle, other, distance);
          }
        }
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      createParticles();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [canvasRef]);

  return null;
};

// ContactModal Component
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onClose();
    showNotification('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const showNotification = (message) => {
    // This would typically be handled by a notification system
    console.log(message);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Ready to transform your business with expert ERP solutions?
        </p>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5D5CDE] focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5D5CDE] focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Tell us about your ERP needs..."
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#5D5CDE] focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
          />
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#5D5CDE] text-white hover:bg-[#5D5CDE]/90 rounded-lg transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

// FeaturesList Component
const FeaturesList = () => {
  const features = [
    'Implementation & Migration',
    'Custom Development',
    '24/7 Support & Training',
    'Performance Optimization'
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#5D5CDE] rounded-full"></div>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
};

// PlayButton Component
const PlayButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300 group overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/30 before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:h-full"
    >
      <svg className="w-6 h-6 text-white ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </button>
  );
};

// ActionButtons Component
const ActionButtons = ({ onContactClick, onPlayClick }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
      <button
        onClick={onContactClick}
        className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-base min-w-[200px]"
      >
        Let's talk transformation
      </button>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
};

// ContentSection Component
const ContentSection = ({ onContactClick, onPlayClick }) => {
  return (
    <div className="text-white text-center lg:text-left">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 opacity-90">
        Master Your ERP with Certified Precision
      </h3>
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
        Experts in Dynamics 365, Odoo, SAP, ONEERP & Zoho.
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
        We optimize, customize, and scale your success with enterprise-grade ERP solutions tailored to your business needs.
      </p>
      
      <ActionButtons 
        onContactClick={onContactClick} 
        onPlayClick={onPlayClick} 
      />
      
      <FeaturesList />
    </div>
  );
};

// BackgroundSession Component
const BackgroundSession = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src="https://pfst.cf2.poecdn.net/base/image/2641e7dce52d84b192b94e8679c80d4da835699bfe33d175ad98810ff449905b?w=800&h=517"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/70"></div>
    </div>
  );
};

// PlexusSession Component
const PlexusSession = () => {
  const canvasRef = useRef(null);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
      />
      <PlexusEffect canvasRef={canvasRef} />
    </>
  );
};

// Main Hero Component
const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode detection
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener('change', handleChange);
    
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  // Update document class based on dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handlePlayClick = () => {
    console.log('Video player would open here with your promotional content.');
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Session */}
        <BackgroundSession />
        
       
        
        {/* Plexus Session */}
        <PlexusSession />
        
        {/* Content Layout Session */}
        <div className="relative z-30 min-h-screen flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Empty space for Z and plexus effect */}
              <div className="hidden lg:block"></div>
              
              {/* Right side - Content */}
              <ContentSection 
                onContactClick={handleContactClick}
                onPlayClick={handlePlayClick}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal Session */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </div>
  );
};

export default Hero;