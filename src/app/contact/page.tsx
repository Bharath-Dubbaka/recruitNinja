"use client";
import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

function Contact() {
   const form = useRef<HTMLFormElement | null>(null);
   const apiKey = process.env.NEXT_PUBLIC_API_KEY || "fallback-api-key";
   const templateId =
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "fallback-template-id";
   const serviceId =
      process.env.NEXT_PUBLIC_SERVICE_ID_KEY || "fallback-service-id";
   const [errors, setErrors] = useState<{ [key: string]: string }>({});

   // Check for missing env variables and log or throw error if any are missing
   if (!apiKey || !templateId || !serviceId) {
      throw new Error("Missing environment variables: Check your .env file.");
   }
   //  Validating form fields
   const validateForm = () => {
      const formErrors: { [key: string]: string } = {};
      const formData = form.current;

      if (formData) {
         if (!formData.user_name.value)
            formErrors.user_name = "Name is required.";
         if (!formData.user_email.value)
            formErrors.user_email = "Email is required";
         else if (!/\S+@\S+\.\S+/.test(formData.user_email.value))
            formErrors.user_email = "Invalid email format.";
         if (!formData.user_subject.value)
            formErrors.user_subject = "Subject is required.";
         if (!formData.message.value)
            formErrors.message = "Message is required.";
      }

      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
   };
   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //   if (!validateForm()) return;

      //   if (form.current) {
      //      emailjs
      //         .sendForm(serviceId, templateId, form.current, {
      //            publicKey: apiKey,
      //         })
      //         .then(
      //            () => {
      //               console.log("SUCCESS!");
      //               toast.success("Successfully sent email to CVtoSalary", {
      //                  duration: 3000,
      //               });
      //               // Clear all the fields and errors
      //               form.current?.reset();
      //               setErrors({});
      //            },
      //            (error) => {
      //               console.log("FAILED...", error.text);
      //               toast.error("Error while trying to server");
      //            }
      //         );
      //   }
   };

   return (
      <div className="">
         <Toaster
            position="top-center"
            toastOptions={{
               style: {
                  background: "lightgreen",
               },
               className: "class",
            }}
         />
         <div
            className="mt-8 sm:mt-36 md:mt-24 flex flex-col  justify-center items-center"
            // style={{
            //    position: "relative",
            //    bottom: "20rem",
            //    opacity: "0.5",
            //    textAlign: "center",
            // }}
         >
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
               <div className="text-3xl sm:text-4xl font-bold text-center">
                  Contact Us
                  {/* / <br /> Privacy policy. */}
               </div>
               <p className="mt-4 font-semibold text-lg text-black max-w-lg text-center mx-auto">
                  <p>Our Executives will reach you within 24hrs.</p>
                  {/* <p>Cell: +91 824-762-8499</p>
                  <p>
                     Address: 8-1-195, Shivaji Nagar, Hyderabad, Telangana,
                     500003, India
                  </p> */}
               </p>
            </div>

            <form
               ref={form}
               onSubmit={sendEmail}
               className="text-black bg-slate-100 flex flex-col w-[85%] sm:w-[66%] md:w-[56%] mb-40 rounded-lg px-2 py-4 sm:px-6 sm:py-4 border border-gray-200"
            >
               <div className="flex flex-col mb-4">
                  <label className=" mb-1" htmlFor="fullName">
                     *Full Name:{" "}
                     {errors.user_name && (
                        <span className="text-red-800 dark:text-red-500 text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                           {errors.user_name}
                        </span>
                     )}
                  </label>
                  <input
                     type="text"
                     name="user_name"
                     placeholder="Tyler Durden"
                     id="fullName"
                     className="flex h-10 w-full border-none text-black dark: shadow-input rounded-md px-3 py-2 text-md  file:border-0 file:bg-transparent 
                      file:text-md font-large placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400"
                  />{" "}
               </div>
               <div className="flex flex-col  mb-4">
                  <label className=" mb-1" htmlFor="email">
                     *Email:{" "}
                     {errors.user_email && (
                        <span className="text-red-800 dark:text-red-500 text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                           {errors.user_email}
                        </span>
                     )}
                  </label>
                  <input
                     type="email"
                     name="user_email"
                     placeholder="projectmayhem@fc.com"
                     id="email"
                     className="flex h-10 w-full border-none text-black dark: shadow-input rounded-md px-3 py-2 text-md  file:border-0 file:bg-transparent 
                      file:text-md font-large placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400"
                  />{" "}
               </div>
               <div className="flex flex-col  mb-4">
                  <label className=" mb-1" htmlFor="subject">
                     *Subject:{" "}
                     {errors.user_subject && (
                        <span className="text-red-800 dark:text-red-500 text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                           {errors.user_subject}
                        </span>
                     )}
                  </label>
                  <input
                     type="text"
                     name="user_subject"
                     id="subject"
                     className="flex h-10 w-full border-none text-black dark: shadow-input rounded-md px-3 py-2 text-md  file:border-0 file:bg-transparent 
                      file:text-md font-large placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400"
                  />{" "}
               </div>
               <div className="flex flex-col  mb-4">
                  <label className=" mb-1" htmlFor="messageArea">
                     *Message:{" "}
                     {errors.message && (
                        <span className="text-red-800 dark:text-red-500  text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                           {errors.message}
                        </span>
                     )}
                  </label>
                  <textarea
                     name="message"
                     id="messageArea"
                     className="flex h-32 w-full border-none  text-black  rounded-md px-3 py-2 text-md  file:border-0 file:bg-transparent 
                     file:text-md font-large focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400"
                  />{" "}
               </div>
               <div className="flex justify-center align-middle items-center content-center">
                  <button
                     className="p-[3px] relative value focus:outline-none focus:ring-0"
                     type="submit"
                     value="Send"
                  >
                     <div className="text-white px-8 py-2 bg-slate-500 rounded-[6px]  relative group transition duration-200  hover:bg-slate-300 hover:text-black font-semibold">
                        Send Email
                     </div>
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Contact;
