'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

const ClientShowcase: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const particleIntervalRef = useRef<NodeJS.Timeout>();

  // Notification management
  const showNotification = useCallback((message: string, type: Notification['type'] = 'info') => {
    const id = Date.now().toString();
    const newNotification: Notification = { id, message, type };
    
    setNotifications(prev => [...prev, newNotification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Dark mode detection
  useEffect(() => {
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

  // Floating particles
  useEffect(() => {
    const createFloatingParticle = () => {
      const colors = ['#5D5CDE', '#8B5CF6', '#EC4899', '#F59E0B'];
      const ctaSection = document.querySelector('.enhanced-cta');
      
      if (ctaSection) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 rounded-full pointer-events-none animate-bounce opacity-60';
        particle.style.cssText = `
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation-duration: ${3 + Math.random() * 3}s;
        `;
        
        ctaSection.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
      }
    };

    particleIntervalRef.current = setInterval(createFloatingParticle, 2000);
    
    return () => {
      if (particleIntervalRef.current) {
        clearInterval(particleIntervalRef.current);
      }
    };
  }, []);

  // Button click handlers
  const handlePrimaryCTA = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.className = 'absolute rounded-full pointer-events-none animate-ping';
    ripple.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      animation-duration: 0.6s;
    `;
    
    button.style.position = 'relative';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
    showNotification('🚀 Great! We\'ll get started on your digital transformation journey!', 'success');
  }, [showNotification]);

  const handleSecondaryCTA = useCallback(() => {
    showNotification('📅 Calendar integration would open here! We\'ll schedule your consultation.', 'info');
  }, [showNotification]);

  const trustMessages = [
    '✅ Free consultation includes: strategy session, tech audit, and roadmap planning!',
    '⚡ Our team responds within 24 hours with personalized proposals and next steps!',
    '💝 100% satisfaction guaranteed with money-back promise and dedicated support!'
  ];

  const handleTrustClick = useCallback((index: number) => {
  //  showNotification(trustMessages[index], 'success');
  }, [showNotification]);

  const notificationColors = {
    success: 'from-green-500 to-emerald-600',
    info: 'from-blue-500 to-cyan-600',
    warning: 'from-yellow-500 to-orange-600'
  };

  const trustIndicators = [
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Free Consultation",
      subtitle: "No commitment required",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "24h Response",
      subtitle: "Quick turnaround time",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "100% Satisfaction",
      subtitle: "Money-back guarantee",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .floating-element { animation: float 6s ease-in-out infinite; }
        .glow-effect { 
          animation: glow 3s ease-in-out infinite alternate;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(93, 92, 222, 0.3); }
          50% { box-shadow: 0 0 30px rgba(93, 92, 222, 0.6); }
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out forwards;
        }
      `}</style>

      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 transition-colors duration-300 py-16 px-4 lg:py-24">
        
        {/* Background Image with 50% Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: 'url(./image/person-holding-a-tablet.jpeg)',
            zIndex: 0,height: "700px"
          }}
        />
        
        {/* Floating Background Elements */}
       

        <div className="container mx-auto text-center max-w-6xl relative" style={{ zIndex: 10 }}>
          
          {/* Enhanced Call to Action */}
          <div className="enhanced-cta relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-purple-600/10 via-violet-600/5 to-pink-500/8 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
              
              {/* Static floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-2 h-2 bg-purple-600/40 rounded-full animate-bounce top-1/5 left-1/10" />
                <div className="absolute w-1.5 h-1.5 bg-violet-600/40 rounded-full animate-bounce top-3/4 right-1/6" style={{ animationDelay: '1s' }} />
                <div className="absolute w-1 h-1 bg-pink-400/40 rounded-full animate-bounce top-2/5 left-4/5" style={{ animationDelay: '2s' }} />
              </div>
              
              <div className="relative z-10">
                               
                <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
                  Ready to join our success stories?
                </h3>
                
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Let's discuss how we can help transform your business and achieve your digital goals with cutting-edge solutions.
                </p>
                
                {/* Interactive buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <button
                    onClick={handlePrimaryCTA}
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-violet-600 hover:to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-600/25 hover:scale-105 transition-all duration-300 overflow-hidden min-w-[200px]"
                  >
                    <svg className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Start Your Journey
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={handleSecondaryCTA}
                    className="group inline-flex items-center px-8 py-4 bg-white/10 dark:bg-black/20 text-gray-700 dark:text-gray-300 font-semibold rounded-full border border-gray-200/50 dark:border-gray-600/50 hover:bg-white/20 dark:hover:bg-black/30 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm min-w-[200px]"
                  >
                    <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Schedule a Call
                  </button>
                </div>
                
                {/* Trust indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  {trustIndicators.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleTrustClick(index)}
                      className="text-center group cursor-pointer"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{item.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{item.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification System */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`max-w-sm p-4 bg-gradient-to-r ${notificationColors[notification.type]} text-white rounded-xl shadow-lg transform animate-slide-in-right backdrop-blur-sm`}
          >
            <div className="flex items-start">
              <div className="flex-1">
                <p className="text-sm font-medium">{notification.message}</p>
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-2 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientShowcase;