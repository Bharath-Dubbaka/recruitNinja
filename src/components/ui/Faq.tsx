import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Define types for FAQ item
interface FaqItemProps {
   title: string;
   content: string | React.ReactNode;
}

// Typed Accordion Item Component
const AccordionItem: React.FC<
   FaqItemProps & {
      isOpen: boolean;
      toggleOpen: () => void;
   }
> = ({ title, content, isOpen, toggleOpen }) => {
   return (
      <div className="border-b border-slate-200">
         <button
            onClick={toggleOpen}
            className="w-full flex justify-between items-center p-4 text-left 
                   hover:bg-slate-50 transition-colors duration-200"
         >
            <span className="font-semibold">{title}</span>
            {isOpen ? (
               <ChevronUp className="text-slate-700" />
            ) : (
               <ChevronDown className="text-slate-700" />
            )}
         </button>
         {isOpen && <div className="p-4 pt-0 text-slate-600">{content}</div>}
      </div>
   );
};

const Faq: React.FC = () => {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

   const faqData: FaqItemProps[] = [
      {
         title: "Is RecruitCatch free to use?",
         content:
            "Yes, RecruitCatch is completely free with no hidden charges.",
      },
      {
         title: "How does RecruitCatch work?",
         content:
            "Simply enter the job title, location, company, and skills, and RecruitCatch generates a LinkedIn X-Ray search query for you by the power of Boolean strings behind the scenes.",
      },
      {
         title: "What is X-Ray Search?",
         content:
            "X-Ray search is a technique used by recruiter/recruitment to find professional profiles using advanced search operators, leveraging Google Custom X-ray Search to discover publicly available professional information on social media such as LinkedIn , Github, X (Twitter) etc.",
      },
      {
         title: "What information does RecruitCatch collect?",
         content:
            "We collect minimal automatic information such as IP address, browser type, device information, and visit timestamps using technologies like Google Analytics. We do not store personal profile data.",
      },
      {
         title: "Is my search data private?",
         content:
            "Search queries are processed through Google. While we do not store your search queries, Google may collect information according to its privacy policy. But other than that we do not store any data from Google or LinkedIn",
      },
      {
         title: "Do you violate any platform's terms of service?",
         content:
            "No. RecruitCatch only retrieves publicly available professional information and does not extract private or hidden data. We strictly comply with platform guidelines.",
      },
      // {
      //   title: "How can I be excluded from search results?",
      //   content: "If you have concerns about your publicly available information, please contact our support team for assistance with removal or exclusion."
      // },
      {
         title: "Are you affiliated with LinkedIn or Google?",
         content:
            "No, RecruitCatch is not affiliated with LinkedIn or Google. We are an independent service using Google API for professional profile discovery which are publicly available.",
      },
   ];

   const toggleItem = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <section className="pt-8 mb-20 mt-12 bg-slate-100 rounded-lg">
         <h2 className="text-center text-2xl font-bold mb-6">
            Frequently Asked Questions
         </h2>
         <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {faqData.map((faq, index) => (
               <AccordionItem
                  key={index}
                  title={faq.title}
                  content={faq.content}
                  isOpen={openIndex === index}
                  toggleOpen={() => toggleItem(index)}
               />
            ))}
         </div>
      </section>
   );
};

export default Faq;
