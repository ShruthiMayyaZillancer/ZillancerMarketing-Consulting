"use client";

import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. What services does your consulting firm offer?",
    desc: "We offer ERP consulting, system implementation, business process optimization, digital marketing strategies, and technology solutions tailored to your business needs.",
  },
  {
    title: "2. What makes your consulting approach different?",
    desc: "We combine deep domain expertise with a client-first agile approach, ensuring tailored, measurable, and actionable strategies.",
  },
  {
    title: "3. Which ERP systems do you support?",
    desc: "We specialize in Microsoft Dynamics 365, SAP, Odoo, NetSuite, Zoho, Oracle, Salesforce, and more.",
  },
  {
    title: "4. Can you help migrate or upgrade our current ERP system?",
    desc: "Yes. We offer full-cycle migration, version upgrades, and data integrity checks to ensure a smooth transition.",
  },
  {
    title: "5. Do you offer post-implementation support?",
    desc: "Absolutely. We provide long-term support packages and training for your internal teams.",
  },
  {
    title: "6. Can you customize ERP features for our unique business needs?",
    desc: "Yes, we tailor ERP modules and features to align with your business processes.",
  },
  {
    title: "7. Can I request a custom package or service bundle?",
    desc: "Yes. We tailor consulting packages based on your goals, team size, and budget.",
  },
  {
    title: "8. How does your consulting process work?",
    desc: "It typically follows: Discovery → Strategy → Implementation → Training → Support.",
  },
  {
    title: "9. Will my business data be kept confidential?",
    desc: "Yes. We adhere to strict confidentiality protocols and sign NDAs where required.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="2xl:container 2xl:mx-auto py-12 px-4 lg:px-20">
      <div className="mb-8">
        <Typography
          variant="h2"
          className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white mb-4"
        >
          Frequently Asked Questions
        </Typography>
        <Typography className="text-base leading-6 text-gray-600 dark:text-gray-400 lg:w-8/12 md:w-9/12">
          Here are a few of the most frequently asked questions by our valuable
          customers.
        </Typography>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
        <div className="md:w-8/12 lg:w-12/12 w-full mb-8 md:mb-0 padding-block-start: 20px;">
          <img
            src="/image/question_mark.jpg"
            alt="FAQ Visual"
            className="w-full hidden md:block"
          />
          <img
            src="https://i.ibb.co/gZMfQJq/pexels-ron-lach-8128069-1-1.png"
            alt="FAQ Visual"
            className="w-full block md:hidden"
          />
        </div>

        <div className="md:w-7/12 lg:w-8/12 w-full">
          <div>
            {filteredFaqs.length === 0 ? (
              <Typography className="text-gray-500 dark:text-gray-400">
                No results found.
              </Typography>
            ) : (
              filteredFaqs.map(({ title, desc }, key) => (
                <Accordion
                  key={key}
                  open={open === key + 1}
                  onClick={() => handleOpen(key + 1)}
                >
                  <AccordionHeader className="text-left text-gray-900 dark:text-white">
                    {title}
                  </AccordionHeader>
                  <AccordionBody>
                    <Typography
                      color="blue-gray"
                      className="font-normal text-gray-600 dark:text-gray-400"
                    >
                      {desc}
                    </Typography>
                  </AccordionBody>
                </Accordion>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
