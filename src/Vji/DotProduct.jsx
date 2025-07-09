import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei"; // Import useGLTF

const MovingBox = ({ startX, gap }) => {
   const ref = useRef();
   const matRef = useRef();
   const [bloomActive, setBloomActive] = useState(0);

   const { scene } = useGLTF("/models/DOT.glb");

   const STARTING_POSITION = -4;
   const ENDING_POSITION = 6;

   useEffect(() => {
      if (ref.current) {
         ref.current.position.x = startX; // initialize each box at its own startX

         const animate = () => {
            const currentX = ref.current.position.x;
            let targetX = currentX + gap; // move by gap amount each time

            // Enable bloom if crossing x >= 0
            if (currentX < 0.5 && targetX >= 0.5) {
               setBloomActive(5);
            }

            if (targetX >= ENDING_POSITION) {
               gsap.to(ref.current.position, {
                  x: ENDING_POSITION,
                  duration: 1.5,
                  ease: "elastic.out(1.1,1)",
                  onComplete: () => {
                     ref.current.position.x = STARTING_POSITION;
                     setBloomActive(0);
                     animate(); // continue loop
                  },
               });
            } else {
               gsap.to(ref.current.position, {
                  x: targetX,
                  duration: 1.5,
                  ease: "elastic.out(1.1,1)",
                  onComplete: animate,
               });
            }
         };

         animate();
      }
   }, [gap]);

   // Update material color based on bloomActive
   useEffect(() => {
      if (matRef.current) {
         const color = new THREE.Color("white");
         color.multiplyScalar(bloomActive > 0 ? bloomActive : 1);
         scene.traverse((child) => {
            if (child.isMesh && child.material) {
               child.material.color = color;
            }
         });
      }
   }, [bloomActive, scene]); // Add scene to dependency array

   return (
      <group scale={0.2} ref={ref} position={[STARTING_POSITION, 0.3, 0]}>
         <primitive scale={0.2} object={scene.clone()} />{" "}
      </group>
   );
};

export const DotProduct = () => {
   const NUM_OBJECTS = 10; // number of objects
   const GAP = 1.0; // gap increment per movement

   return (
      <>
         <group position={[0.4, 0, 0]}>
            {Array.from({ length: NUM_OBJECTS }, (_, i) => (
               <MovingBox key={i} startX={-4 - i * GAP} gap={GAP} />
            ))}
         </group>
      </>
   );
};
