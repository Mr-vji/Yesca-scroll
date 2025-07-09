import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { HeroSection } from "./Vji/HeroSection";
import { Experience } from "./Vji/Experience";
import Ui from "./Vji/UI";
import ServicesPage from "./assets/ServicesPage/ServicesPage";
import ServiceCategories from "./assets/ServicesPage/ServiceCategories";

function App() {
   return (
      <>
         <main className="bg-black">
            <section className="relative w-full h-screen">
               <Canvas shadows camera={{ position: [3, 0.5, 5], fov: 30 }}>
                  <color attach="background" args={["#201d24"]} />
                  <HeroSection />

                  <group scale={0.8} position={[0.5, -0.9, 0]}>
                     <Experience />
                  </group>
               </Canvas>
            </section>
            <Ui />
            <ServicesPage />
            <section className="grid h-screen place-content-center">
               <p className="text-white">Work in progress...</p>
            </section>
            {/* <ServiceCategories /> */}
         </main>
      </>
   );
}

export default App;
