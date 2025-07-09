import React from "react";

// Define the Header component as a functional component
export default function Header() {
   return (
      // Header container with responsive padding, background, and shadow
      <header className="p-4 text-white rounded-b-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-700">
         <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
            {/* Application title/logo */}
            <div className="mb-4 text-3xl font-extrabold md:mb-0">
               <a href="#" className="transition duration-300 hover:text-blue-200">
                  My Awesome App
               </a>
            </div>

            {/* Navigation links */}
            <nav>
               <ul className="flex flex-col space-y-3 text-lg font-medium md:flex-row md:space-y-0 md:space-x-8">
                  <li>
                     <a href="#" className="transition duration-300 hover:text-blue-200">
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="#" className="transition duration-300 hover:text-blue-200">
                        About
                     </a>
                  </li>
                  <li>
                     <a href="#" className="transition duration-300 hover:text-blue-200">
                        Services
                     </a>
                  </li>
                  <li>
                     <a href="#" className="transition duration-300 hover:text-blue-200">
                        Contact
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
}
