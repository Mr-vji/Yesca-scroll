import React from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
   const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: (i) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
         },
      }),
   };

   const iconAnimate = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 10, transition: { duration: 0.3 } },
   };

   const services = [
      {
         title: "Web Development",
         desc: "We build modern, responsive, and high-performance web applications tailored to your business needs. From front-end to back-end, we've got you covered.",
         color: "text-blue-400",
         icon: (
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4"
            />
         ),
      },
      {
         title: "Mobile App Development",
         desc: "Crafting intuitive and engaging mobile experiences for iOS and Android platforms. Reach your customers wherever they are with a stunning app.",
         color: "text-purple-400",
         icon: (
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
         ),
      },
      {
         title: "UI/UX Design",
         desc: "Creating intuitive, beautiful, and user-friendly interfaces that provide an exceptional user experience and drive engagement.",
         color: "text-green-400",
         icon: (
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4.636 18.364l-.707.707M3 12H2m15.364 4.364l.707.707M12 21v-1m-4.636-1.636l-.707-.707M5.636 5.636l.707-.707m12.728 0l-.707.707M6 12H4m12.728 0l.707-.707M9 6h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V8a2 2 0 012-2z"
            />
         ),
      },
      {
         title: "Cloud Solutions",
         desc: "Leverage the power of cloud computing with our expert solutions for scalable infrastructure, data storage, and robust security.",
         color: "text-red-400",
         icon: (
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M3 15a4 4 0 004 4h9a5 5 0 005-5V7a2 2 0 00-2-2H7a2 2 0 00-2 2v6z"
            />
         ),
      },
      {
         title: "Digital Marketing",
         desc: "Boost your online presence and reach your target audience with our comprehensive digital marketing strategies, including SEO, SEM, and social media.",
         color: "text-yellow-400",
         icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />,
      },
      {
         title: "IT Consulting",
         desc: "Strategic guidance and expert advice to help your business navigate complex technology landscapes and achieve its goals.",
         color: "text-indigo-400",
         icon: (
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M21 13.255A23.593 23.593 0 0112 15c-3.183 0-6.22-1.282-8.455-3.245m16.91 0c.439 2.054.654 4.298.654 6.645C20.25 20.94 16.72 23 12 23s-8.25-2.06-8.25-4.595c0-2.347.215-4.591.654-6.645m0 0A23.593 23.593 0 0112 9c3.183 0 6.22 1.282 8.455 3.245m0 0C19.785 10.95 19.57 8.706 19.57 6.355 19.57 3.06 16.04 1 12 1s-7.57 2.06-7.57 4.595c0 2.347.215 4.591.654 6.645"
            />
         ),
      },
   ];

   return (
      <div
         className="w-full min-h-screen text-white p-8 flex flex-col items-center justify-center font-[Inter]"
         style={{
            background: "linear-gradient(to bottom, #302655, #170f29)", // Fading out to deep black
         }}
      >
         <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
         />

         <motion.h1
            className="mb-10 text-4xl font-extrabold text-center text-purple-400 md:text-5xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
         >
            Our Services
         </motion.h1>

         <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
               <motion.div
                  key={service.title}
                  className="p-6 transition transform border border-gray-700 rounded-xl bg-white/10 backdrop-blur-md hover:scale-105 hover:shadow-xl hover:border-purple-500"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i + 1}
               >
                  <motion.div
                     className={`mb-4 text-4xl text-center ${service.color}`}
                     variants={iconAnimate}
                     initial="rest"
                     whileHover="hover"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-14 w-14"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        {service.icon}
                     </svg>
                  </motion.div>
                  <h2 className="mb-3 text-2xl font-bold text-center">{service.title}</h2>
                  <p className="text-base leading-relaxed text-center text-gray-300">
                     {service.desc}
                  </p>
               </motion.div>
            ))}
         </div>
      </div>
   );
}
