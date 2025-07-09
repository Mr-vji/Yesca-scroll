import React from "react";
import { motion } from "framer-motion";

export default function Ui() {
   // Animation variant
   const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: (i) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: i * 0.2, // staggered delay
            duration: 0.6,
            ease: "easeOut",
         },
      }),
   };

   return (
      <>
         <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
         />

         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none p-6 font-[Inter]">
            <div className="relative flex flex-col w-full h-full overflow-hidden text-white border border-gray-700 rounded-lg shadow-lg md:flex-row">
               {/* Left section */}
               <div className="flex flex-col justify-start flex-1 p-8 md:p-12 lg:p-16">
                  <motion.h2
                     className="mt-4 mb-2 text-lg font-semibold text-purple-400 uppercase md:text-xl"
                     variants={fadeUp}
                     initial="hidden"
                     animate="visible"
                     custom={0}
                  >
                     Welcome to Yesca
                  </motion.h2>

                  <motion.h1
                     className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
                     variants={fadeUp}
                     initial="hidden"
                     animate="visible"
                     custom={1}
                  >
                     Crafting Digital Experiences
                  </motion.h1>

                  <motion.p
                     className="max-w-md mb-4 text-base md:text-lg"
                     variants={fadeUp}
                     initial="hidden"
                     animate="visible"
                     custom={2}
                  >
                     At Yesca, we empower businesses with cutting-edge web solutions, immersive
                     interactive experiences, and powerful software development tailored to your
                     goals.
                  </motion.p>

                  <motion.p
                     className="max-w-md mb-8 text-base md:text-lg"
                     variants={fadeUp}
                     initial="hidden"
                     animate="visible"
                     custom={3}
                  >
                     We specialise in building innovative websites, interactive 3D applications, and
                     digital products that elevate your brand and engage your customers.
                  </motion.p>
               </div>

               {/* Right section */}
               <div className="flex flex-col items-end justify-between p-8 md:p-12 lg:p-16">
                  <motion.div
                     className="flex items-center space-x-2 text-purple-400 cursor-pointer"
                     variants={fadeUp}
                     initial="hidden"
                     animate="visible"
                     custom={4}
                  >
                     <img
                        src="images/yesca.png"
                        alt="Explore Icon"
                        className="object-contain w-7 h-7 md:h-9 md:w-9"
                     />
                     <span className="text-base md:text-lg">yesca</span>
                  </motion.div>

                  <motion.p
                     className="mt-4 text-base md:text-lg md:mt-0"
                     variants={fadeUp}
                     initial="hidden"
                     animate="visible"
                     custom={5}
                  >
                     www.yesca.in
                  </motion.p>
               </div>

               {/* Bottom Left Button */}
               <motion.div
                  className="absolute bottom-8 left-8"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={6}
               >
                  <button className="relative px-6 py-3 overflow-hidden text-base font-semibold text-white transition-all duration-300 ease-out border border-purple-500 rounded-lg shadow-lg pointer-events-auto bg-white/10 backdrop-blur-md md:text-lg hover:scale-105 hover:bg-purple-500/20">
                     <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-20 blur-lg"></span>
                     <span className="relative z-10">Contact Us</span>
                  </button>
               </motion.div>
            </div>
         </div>
      </>
   );
}
