// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
//import AboutEvent from "./about-event";
import OurServiceSection from "./our-services";
import OurStats from "./our-stats";
//import EventContent from "./event-content";
//import ServiceSection from "./service-we-cater-section";
import SponsoredBy from "./sponsored-by";
//import ContactBanner from "./contact-banner"
import Faq from "./faq";
import ClientShowcase from "./client-showcase";
import WhyUsSection from "./why-us-section";
import InteractiveTimelineSections from "./interactive-timeline-sections";
import ERPServiceSection from "./erp-service-section";


export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServiceSection />
     
      <ERPServiceSection />
      <InteractiveTimelineSections /> 
      <WhyUsSection />
       <OurStats />
      <SponsoredBy />
          <Faq />
      <ClientShowcase/>
      <Footer />
    </>
  );
}
