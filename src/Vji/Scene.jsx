import { Environment, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export const Scene = () => {
   return (
      <>
         <fog attach="fog" args={["#170f29", 5, 10]} />
         <color attach="background" args={["#170f29"]} />

         <Environment preset="city" />

         <directionalLight intensity={2} color={"white"} position={[0, 1, 5]} />
         <ambientLight color={"white"} intensity={0.5} />

         <EffectComposer>
            <Bloom intensity={0.9} luminanceThreshold={1} mipmapBlur />
         </EffectComposer>
      </>
   );
};
