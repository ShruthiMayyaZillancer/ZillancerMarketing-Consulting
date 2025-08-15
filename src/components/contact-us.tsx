'use client';

import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  contact_method: 'email' | 'phone';
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ToastMessage {
  id: number;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    contact_method: 'email',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initialize dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  const handleContactClick = (type: 'phone' | 'email' | 'location') => {
    let message = '';
    
    switch(type) {
      case 'phone':
        message = 'Phone number copied to clipboard!';
        navigator.clipboard?.writeText('+1 (470) 601-1911');
        break;
      case 'email':
        message = 'Email address copied to clipboard!';
        navigator.clipboard?.writeText('hello@company.com');
        break;
      case 'location':
        message = 'Opening maps...';
        window.open('https://maps.google.com/?q=San Francisco, CA', '_blank');
        break;
    }
    
    showToast(message);
  };

  const validateField = (name: keyof FormData, value: string): string | null => {
    switch(name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return 'Email is required';
        if (!emailPattern.test(value)) return 'Please enter a valid email';
        break;
      
      case 'phone':
        if (value && value.length < 10) return 'Please enter a valid phone number';
        break;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on input
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, contact_method: e.target.value as 'email' | 'phone' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    let isValid = true;
    
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'contact_method') {
        const error = validateField(key as keyof FormData, value);
        if (error) {
          newErrors[key as keyof FormErrors] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      setFormMessage({ text: 'Please fix the errors above', isError: true });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormMessage({ text: 'Thank you! Your message has been sent successfully.', isError: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        contact_method: 'email',
        message: ''
      });
      setErrors({});
      
    } catch (error) {
      setFormMessage({ text: 'Sorry, there was an error sending your message. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide form message
  useEffect(() => {
    if (formMessage) {
      const timer = setTimeout(() => {
        setFormMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formMessage]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes glow {
          from { box-shadow: 0 0 20px rgba(93, 92, 222, 0.3); }
          to { box-shadow: 0 0 30px rgba(93, 92, 222, 0.6); }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dark .glass-effect {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .-delay-300 {
          animation-delay: -3s;
        }
      `}</style>

      <section className="py-24 relative overflow-hidden font-['Inter'] bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 min-h-screen">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Image with Transparency */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"
            style={{
              backgroundImage: `url('image/person-holding-a-tablet.jpeg')`
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-blue-50/80 to-indigo-100/80 dark:from-gray-900/90 dark:via-purple-900/90 dark:to-indigo-900/90" />
          {/* Floating Elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5D5CDE]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-float -delay-300" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#5D5CDE] to-indigo-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Section */}
            <div className="space-y-8 animate-slide-up">
              <div className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                  Let's Connect
                </h2>
                
                <div className="space-y-6">
                  <div 
                    className="group cursor-pointer"
                    onClick={() => handleContactClick('phone')}
                  >
                    <div className="flex items-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#5D5CDE] to-indigo-600 rounded-xl flex items-center justify-center group-hover:animate-glow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+1 (470) 601-1911</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="group cursor-pointer"
                    onClick={() => handleContactClick('email')}
                  >
                    <div className="flex items-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:animate-glow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">hello@zillancer.com</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className="group cursor-pointer"
                    onClick={() => handleContactClick('location')}
                  >
                    <div className="flex items-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:animate-glow">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-800 dark:text-white">Location</h3>
                        <p className="text-gray-600 dark:text-gray-300">Dubai, UAE</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect rounded-3xl p-8 animate-slide-up delay-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Send Message</h2>
                  <p className="text-gray-600 dark:text-gray-300">We'd love to hear from you</p>
                </div>

                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`peer w-full h-14 px-4 pt-6 pb-2 text-base bg-white/50 dark:bg-gray-800/50 border-2 rounded-2xl focus:outline-none transition-all duration-300 placeholder-transparent ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 dark:border-gray-600 focus:border-[#5D5CDE]'
                    }`}
                    placeholder="Full Name"
                    required
                  />
                  <label htmlFor="name" className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-[#5D5CDE]">
                    Full Name
                  </label>
                  {errors.name && (
                    <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`peer w-full h-14 px-4 pt-6 pb-2 text-base bg-white/50 dark:bg-gray-800/50 border-2 rounded-2xl focus:outline-none transition-all duration-300 placeholder-transparent ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 dark:border-gray-600 focus:border-[#5D5CDE]'
                    }`}
                    placeholder="Email Address"
                    required
                  />
                  <label htmlFor="email" className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-[#5D5CDE]">
                    Email Address
                  </label>
                  {errors.email && (
                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`peer w-full h-14 px-4 pt-6 pb-2 text-base bg-white/50 dark:bg-gray-800/50 border-2 rounded-2xl focus:outline-none transition-all duration-300 placeholder-transparent ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 dark:border-gray-600 focus:border-[#5D5CDE]'
                    }`}
                    placeholder="Phone Number"
                  />
                  <label htmlFor="phone" className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-[#5D5CDE]">
                    Phone Number
                  </label>
                  {errors.phone && (
                    <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="contact_method"
                        value="email"
                        checked={formData.contact_method === 'email'}
                        onChange={handleRadioChange}
                        className="hidden peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3 peer-checked:border-[#5D5CDE] peer-checked:bg-[#5D5CDE] relative">
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="contact_method"
                        value="phone"
                        checked={formData.contact_method === 'phone'}
                        onChange={handleRadioChange}
                        className="hidden peer"
                      />
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3 peer-checked:border-[#5D5CDE] peer-checked:bg-[#5D5CDE] relative">
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`peer w-full px-4 pt-6 pb-2 text-base bg-white/50 dark:bg-gray-800/50 border-2 rounded-2xl focus:outline-none transition-all duration-300 placeholder-transparent resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 dark:border-gray-600 focus:border-[#5D5CDE]'
                    }`}
                    placeholder="Your Message"
                    required
                  />
                  <label htmlFor="message" className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-[#5D5CDE]">
                    Your Message
                  </label>
                  {errors.message && (
                    <div className="text-red-500 text-sm mt-1">{errors.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-[#5D5CDE] to-indigo-600 text-white font-semibold rounded-2xl hover:from-[#5D5CDE]/90 hover:to-indigo-600/90 focus:outline-none focus:ring-4 focus:ring-[#5D5CDE]/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Success/Error Messages */}
                {formMessage && (
                  <div className={`text-center p-4 rounded-2xl ${
                    formMessage.isError 
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' 
                      : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                  }`}>
                    {formMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Toast Notifications */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className="bg-[#5D5CDE] text-white px-6 py-3 rounded-2xl shadow-lg transform transition-all duration-300 animate-slide-up"
            >
              {toast.message}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactSection;