"use client";
import { useEffect, useRef, useState } from 'react';
const services = [
  {
    name: 'Microsoft Dynamics 365',
    icon: 'MD365',
    description: 'Powerful business applications for enterprise resource planning and CRM with AI-driven insights.',
    bgColor: 'from-blue-500 to-blue-600',
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ['AI-Driven Analytics', 'Cloud Integration', 'Mobile Access', 'Custom Workflows'],
  },
  {
    name: "Odoo",
    description: "All-in-one open-source ERP and CRM software with modular architecture.",
   // color: "#7c3aed",
    bgColor:'from-blue-500 to-blue-600',
    icon: "Odoo",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Open Source", "Modular Design", "Custom Apps", "E-commerce Ready"]
  },
  {
    name: "Sapience HCM",
    description: "Human capital management solutions for modern workforce optimization.",
    color: "#f5f10bff",
    bgColor: "from-amber-500 to-amber-600",
    icon: "S",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Workforce Analytics", "Performance Management", "Payroll Integration", "Compliance Tools"]
  },
  {
    name: "SAP",
    description: "Industry-standard ERP for enterprises across all domains and industries.",
    color: "#0f766e",
    bgColor: "from-teal-500 to-teal-600",
    icon: "SAP",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Enterprise Scale", "Industry Solutions", "Real-time Processing", "Global Compliance"]
  },
  {
    name: "NetSuite",
    description: "Cloud-based ERP for fast-growing businesses with real-time analytics.",
    color: "#059669",
    bgColor: "from-emerald-500 to-emerald-600",
    icon: "N",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Cloud Native", "Financial Management", "Inventory Control", "Business Intelligence"]
  },
  {
    name: "Zoho",
    description: "Integrated suite of business apps and CRM tools for seamless operations.",
    color: "#dc2626",
    bgColor: "from-red-500 to-red-600",
    icon: "Z",
    features: ["Integrated Suite", "CRM Tools", "Project Management", "Document Management"],
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700'
  },
  {
    name: "Infor",
    description: "Cloud-based industry-specific ERP solutions with advanced automation.",
    color: "#3f0216ff",
    bgColor: "from-orange-600 to-orange-700",
    icon: "I",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Industry Specific", "Process Automation", "Supply Chain", "Manufacturing Focus"]
  },
  {
    name: "Oracle",
    description: "Robust ERP and database solutions for large-scale enterprise operations.",
    color: "#b91c1c",
    bgColor: "from-red-600 to-red-900",
    icon: "OR",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Database Excellence", "Enterprise Scale", "Security Focus", "Global Operations"]
  },
  {
    name: "Sage",
    description: "Finance, payroll and HR software for businesses of all sizes.",
    color: "#047857",
    bgColor: "from-green-600 to-green-700",
    icon: "SG",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Financial Management", "Payroll Processing", "HR Solutions", "Small Business Focus"]
  },
  {
    name: "Epicor",
    description: "ERP focused on manufacturing and distribution with IoT integration.",
    color: "#0369a1",
    bgColor: "from-sky-600 to-sky-700",
    icon: "E",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Manufacturing Focus", "IoT Integration", "Supply Chain", "Quality Management"]
  },
  {
    name: "Salesforce",
    description: "CRM and cloud app platform for customer-centric growth and engagement.",
    color: "#0369a1",
    bgColor: "from-sky-600 to-sky-700",
    icon: "SF",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["CRM Leadership", "Sales Automation", "Marketing Tools", "Customer Service"]
  },
  {
    name: "Orion ONE ERP",
    description: "Unified ERP platform tailored for complex workflows and business processes.",
    color: "#0369a1",
    bgColor: "from-sky-600 to-sky-700",
    icon: "ONE",
    btnClass: 'bg-gradient-to-r from-orange-500 to-orange-700',
    features: ["Unified Platform", "Complex Workflows", "Custom Solutions", "Process Optimization"]
  }
];
const ServiceCard = ({ service, onClick, highlighted }: any) => (
  <div
    onClick={onClick}
    className={`group service-card p-4 rounded-xl cursor-pointer glass-effect transform transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
      highlighted ? 'ring-2 ring-yellow-400 scale-105' : 'opacity-80 scale-95'
    }`}
  >
    <div className="relative w-16 h-16 mx-auto mb-3">
      <div className={`absolute inset-0 rounded-xl rotate-3 bg-gradient-to-r ${service.bgColor} shadow-md`} />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center w-full h-full shadow-md">
        <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${service.bgColor}`}>{service.icon}</span>
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
    </div>
    <h3 className="text-sm font-bold text-white text-center mb-1">{service.name}</h3>
    <p className="text-white/70 text-xs text-center line-clamp-3 mb-2">{service.description}</p>
    <button className={`${service.btnClass} text-white text-xs font-medium py-1.5 px-3 w-full rounded-lg hover:scale-105 transition-all`}>Explore</button>
  </div>
);

export default function NextGenERP() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [modalService, setModalService] = useState<any>(null);
  const timer = useRef<any>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="relative min-h-screen py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">
      {/* Star/Universe Background Overlay */}
      <div className="absolute inset-0 bg-[url('/stars-bg.svg')] bg-cover opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800/10 via-purple-700/10 to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Next-Gen <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">ERP Services</span>
        </h2>
        <p className="text-lg text-white/80 max-w-xxl mx-auto mb-10">
          Transform your business with cutting-edge ERP solutions - implementation, customization, support.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              service={s}
              highlighted={highlightIndex === i}
              onClick={() => setModalService(s)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalService && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur z-50"
          onClick={() => setModalService(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md mx-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{modalService.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{modalService.description}</p>
              </div>
              <button onClick={() => setModalService(null)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {modalService.features.map((f: string, i: number) => (
                <div
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-white px-3 py-2 rounded-lg"
                >
                  • {f}
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button className="text-sm font-medium text-gray-600 dark:text-gray-300 border px-4 py-2 rounded-lg">
                Learn More
              </button>
              <button className={`${modalService.btnClass} text-sm text-white px-4 py-2 rounded-lg`}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
