"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact-us');
  };

  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            Master Your ERP with Certified Precision
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-4xl">
            Experts in Dynamics 365, Odoo, SAP, ONEERP & Zoho. 
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            We optimize, customize, and scale your success.
          </Typography>
          <div className="flex items-center gap-4">          
  
            <Link href="/contact-us">
              <Button 
                color="white" 
                className="hover:bg-gray-100 transition-colors duration-300"
              >
                Let's talk transformation
              </Button>
            </Link> 
            

            <IconButton className="rounded-full bg-white p-6">
              <PlayIcon className="h-4 w-4 text-gray-900" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;