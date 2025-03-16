"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

// Component to handle cleanup when unmounting
const SceneCleanup = () => {
  const { gl, scene } = useThree();

  useEffect(() => {
    // Cleanup function to run when component unmounts
    return () => {
      // Dispose of all geometries and materials in the scene
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();

        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      // Force renderer to release memory
      gl.dispose();
    };
  }, [gl, scene]);

  return null;
};

const AnimatedSphere = ({ position, color, speed, distort }) => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t) * 0.2;
      sphereRef.current.rotation.x = t * 0.1;
      sphereRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]} // Reduced pixel ratio for even better performance
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        performance={{ min: 0.1 }}
      >
        <SceneCleanup />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.5}
          color="#8b5cf6"
        />

        {/* Reduced number of lights and objects */}
        <AnimatedSphere
          position={[-3, 0, 0]}
          color="#8b5cf6"
          speed={0.5}
          distort={0.4}
        />
        <AnimatedSphere
          position={[3, 0, 0]}
          color="#ec4899"
          speed={0.8}
          distort={0.6}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          makeDefault
          passiveEvents={true}
          passiveWheel={true}
        />
      </Canvas>
    </div>
  );
};

export default HeroBackground3D;
