import { MeshReflectorMaterial } from "@react-three/drei";

export const Flor = () => {
   return (
      <>
         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
               color={"#3e3262"}
               mirror={0.3}
               mixStrength={0.9}
               roughness={1.0}
               metalness={0.88}
               blur={[400, 100]}
               mixBlur={0.21}
               resolution={1032}
               depthScale={0}
               minDepthThreshold={0.9}
               maxDepthThreshold={1}
               depthToBlurRatioBias={0.25}
               reflectorOffset={0.01}
            />
         </mesh>
      </>
   );
};
