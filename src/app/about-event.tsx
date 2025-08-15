 "use client";
import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/aboutSection";


import React from 'react';
//import AboutCard from './AboutCard';

const EVENT_INFO = [
    {
        title: "ERP Implementation",
        description: "From initial planning to go-live, we specialize in seamless ERP deployments across Microsoft Dynamics 365, Odoo, Zoho, SAP, and ONE ERP. Our certified team ensures tailored configurations, efficient workflows, and fast adoption — aligned with your business goals.",
        subTitle: "Deploy. Customize. Deliver Success.",
        img: "/image/erp.jpg",
    },
    {
        title: "Business Process Consulting",
        description: "We deep-dive into your core operations to identify bottlenecks, redundancies, and untapped opportunities. With our industry-specific expertise, we help you redesign and refine processes for scalability, compliance, and operational excellence.",
        subTitle: "Optimize What Matters.",
        img: "/image/erp.jpg",
    },
    // Add more event objects as needed
  ];

const AboutSection = () => {
    return (
        <section className="container mx-auto flex flex-col items-center px-4 py-10">
            <Typography variant="h6" className="text-center mb-2" color="orange">
                Our Services
            </Typography>
            <Typography variant="h3" className="text-center" color="blue-gray">
                We Provide the Professional Services
            </Typography>
            <Typography variant="lead" className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500">
                Whether you're starting fresh or scaling up, we tailor ERP services that drive efficiency, clarity, and measurable results
            </Typography>
            <AboutCard events={EVENT_INFO} />
        </section>
    );
}

export default AboutSection;
