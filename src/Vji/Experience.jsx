import { OrbitControls } from "@react-three/drei";
import { Conve } from "./Conve";
import { DotProduct } from "./DotProduct";
import { Flor } from "./Flor";
import { Jud } from "./Jud";
import { LoopBox } from "./LoopBox";
import { MouseMove } from "./MouseMove";

export const Experience = () => {
   return (
      <>
         <Conve scale={2.5} position={[-2, -0.03, 0.35]} />
         <Flor />
         <Jud position={[0.3, 0.2, -0.07]} rotation={[0, -0.0, 0]} scale={1.5} />
         <mesh position={[1.1, 0.2 / 2, 0]}>
            <boxGeometry args={[1, 0.2, 0.6]} />
            <meshStandardMaterial roughness={0.5} metalness={0.5} color={"#170f29"} />
         </mesh>
         <MouseMove />

         {/* <MouseMove /> */}
         {/* <group rotation={[0, 0, 0]} position={[0.66, 0, 0]}>
            <LoopBox />
         </group> */}

         <group rotation={[0, 0, 0]} position={[0.605, 0.1 / 2, 0]}>
            <DotProduct />
         </group>
      </>
   );
};
