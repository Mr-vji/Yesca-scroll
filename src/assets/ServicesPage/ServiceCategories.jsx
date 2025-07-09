import React from "react";
import { motion } from "framer-motion";

export default function ServiceCategories() {
   const sectionFadeUp = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.8, ease: "easeOut" },
      },
   };

   const listItemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
         opacity: 1,
         x: 0,
         transition: { duration: 0.4, ease: "easeOut" },
      },
   };

   return (
      <div
         className="w-full min-h-screen text-white p-8 font-[Inter] flex flex-col items-center justify-center"
         style={{ background: "linear-gradient(to bottom, #332a59, #251f42, #302655, #3b2d6a)" }}
      >
         <h1 className="mb-12 text-4xl font-extrabold text-center text-purple-400 md:text-5xl">
            Our Expertise
         </h1>

         <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl">
            {/* Web Development */}
            <motion.div
               className="flex flex-col p-8 border border-gray-700 shadow-lg bg-white/10 backdrop-blur-md rounded-xl"
               variants={sectionFadeUp}
               initial="hidden"
               animate="visible"
            >
               <h2 className="mb-6 text-3xl font-bold text-blue-400">Web Development</h2>
               <ul className="flex-grow space-y-3 text-lg">
                  {[
                     "Custom Web Development",
                     "UI/UX Design",
                     "SEO Optimization",
                     "E-Commerce Websites",
                     "Portfolio Websites",
                     "Interactive 3D Experiences",
                  ].map((item, i) => (
                     <motion.li key={i} variants={listItemVariants}>
                        <span className="mr-2 text-purple-400">&gt;</span> {item}
                     </motion.li>
                  ))}
               </ul>
               <div className="p-4 mt-6 overflow-x-auto text-sm bg-gray-800 rounded-lg">
                  <pre>
                     <code>
                        {`async function fetchData(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error('Failed to fetch JSON');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}`}
                     </code>
                  </pre>
               </div>
            </motion.div>

            {/* App Development */}
            <motion.div
               className="flex flex-col p-8 border border-blue-600 shadow-lg bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl"
               variants={sectionFadeUp}
               initial="hidden"
               animate="visible"
            >
               <h2 className="mb-6 text-3xl font-bold text-white">App Development</h2>
               <ul className="flex-grow space-y-3 text-lg">
                  {[
                     "iOS/Android App Development",
                     "Prototype Apps",
                     "Cross-Platform Solutions",
                     "Interactive Animations",
                  ].map((item, i) => (
                     <motion.li key={i} variants={listItemVariants}>
                        <span className="mr-2 text-white">&gt;</span> {item}
                     </motion.li>
                  ))}
               </ul>
               <div className="flex items-center justify-center mt-6">
                  <img
                     src="https://placehold.co/300x200/4a90e2/ffffff?text=App+Mockup"
                     alt="App Mockup"
                     className="rounded-lg shadow-md"
                     onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                           "https://placehold.co/300x200/cccccc/333333?text=Image+Error";
                     }}
                  />
               </div>
            </motion.div>

            {/* Bottom grid sections */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2">
               {[
                  {
                     title: "Branding Solutions",
                     color: "text-green-400",
                     items: [
                        "Visual Identity Design",
                        "Brand Strategy & Positioning",
                        "Brand Guidelines",
                        "Brand Voice & Messaging",
                        "Print Collaterals",
                        "Logo Design",
                        "Marketing Design",
                        "Social Media Posters",
                        "Video Editing",
                     ],
                  },
                  {
                     title: "UI UX Design",
                     color: "text-yellow-400",
                     items: ["Rapid Prototypes", "Wireframes", "Design Mockups", "Userflows"],
                     img: "https://placehold.co/200x150/8a2be2/ffffff?text=UI/UX",
                  },
                  {
                     title: "Social Media Marketing",
                     color: "text-pink-400",
                     items: [
                        "Social Media Management",
                        "Advertising",
                        "LinkedIn Marketing",
                        "Facebook Marketing",
                        "Google Marketing",
                     ],
                  },
                  {
                     title: "IT Solutions",
                     color: "text-red-400",
                     items: [
                        "Security Services",
                        "Networking",
                        "Software",
                        "Cloud Services",
                        "Hardware",
                     ],
                     img: "https://placehold.co/200x150/8a2be2/ffffff?text=IT+Solutions",
                  },
               ].map((section, idx) => (
                  <motion.div
                     key={idx}
                     className="flex flex-col p-8 border border-gray-700 shadow-lg bg-white/10 backdrop-blur-md rounded-xl"
                     variants={sectionFadeUp}
                     initial="hidden"
                     animate="visible"
                  >
                     <h2 className={`mb-6 text-3xl font-bold ${section.color}`}>{section.title}</h2>
                     <ul className="flex-grow space-y-3 text-lg">
                        {section.items.map((item, i) => (
                           <motion.li key={i} variants={listItemVariants}>
                              <span className="mr-2 text-purple-400">&gt;</span> {item}
                           </motion.li>
                        ))}
                     </ul>
                     {section.img && (
                        <div className="flex items-center justify-center mt-6">
                           <img
                              src={section.img}
                              alt={section.title}
                              className="rounded-lg shadow-md"
                              onError={(e) => {
                                 e.target.onerror = null;
                                 e.target.src =
                                    "https://placehold.co/200x150/cccccc/333333?text=Image+Error";
                              }}
                           />
                        </div>
                     )}
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   );
}
