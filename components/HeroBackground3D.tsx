"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Billboard,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

// Skill icons for the flying icons
const skillIcons = {
  expo: "/skill-icons/expo.png",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "react-native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  zustand: "/skill-icons/zustand.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
};

const AnimatedSphere = ({ position, color, speed, distort }) => {
  const sphereRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t) * 0.2;
      sphereRef.current.rotation.x = t * 0.1;
      sphereRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Sphere
      ref={sphereRef}
      args={[1, 32, 32]}
      position={position}
      renderOrder={10}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={0.5}
        roughness={0.2}
        metalness={0.8}
        depthTest={true}
        depthWrite={true}
      />
    </Sphere>
  );
};

// An extremely simplified version without textures
const SimpleSkillIcon = ({ skill, radius, speed, initialAngle, yOffset }) => {
  const meshRef = useRef(null);
  const zOffset = 0.1;
  // Her icon için rastgele başlangıç pozisyonu
  const initialPosition = useRef({
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 24 + yOffset,
    z: (Math.random() - 0.5) * 2 + zOffset,
  });

  // Her icon için rastgele animasyon parametreleri
  const animationParams = useRef({
    timeOffset: Math.random() * 100,
    floatSpeed: Math.random() * 0.5 + 0.5,
    rotationSpeed: Math.random() * 0.01 + 0.005,
    floatAmplitude: Math.random() * 0.3 + 0.2,
    circleSpeed: Math.random() * 0.2 + 0.1,
  });

  // texture
  const texture = useTexture(
    skillIcons[skill] ||
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`
  );

  // Animation loop - optimized for smooth movement
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Her icon için farklı zaman hesaplaması
      const time =
        (state.clock.getElapsedTime() + animationParams.current.timeOffset) *
        speed;

      // Dairesel hareket
      const x =
        initialPosition.current.x +
        Math.sin(time * animationParams.current.circleSpeed) * radius;
      const z =
        initialPosition.current.z +
        Math.cos(time * animationParams.current.circleSpeed) * radius;

      // Yumuşak yukarı-aşağı hareket
      const y =
        initialPosition.current.y +
        Math.sin(time * animationParams.current.floatSpeed) *
          animationParams.current.floatAmplitude;

      // Pozisyon güncelleme
      meshRef.current.position.set(x, y, z);

      // Yumuşak dönüş
      meshRef.current.rotation.y +=
        animationParams.current.rotationSpeed * speed;
    }
  });

  return (
    <mesh ref={meshRef} renderOrder={1}>
      <boxGeometry args={[3, 3, 0]} />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        side={THREE.DoubleSide}
        opacity={1}
        depthTest={true}
        depthWrite={false}
        bumpScale={4}
      />
    </mesh>
  );
};

// Simplified component to render the flying skill icons
const FlyingSkillIcons = () => {
  // Colors instead of skills
  const colors = ["#61dafb", "#f7df1e", "#3178c6", "#000000"];

  // skills
  const skills = [
    "react",
    "javascript",
    "typescript",
    "nextjs",
    "nodejs",
    "nestjs",
    "express",
    "mongodb",
    "postgresql",
    // "mysql",
    // "redis",
    // "docker",
    // "kubernetes",
    "aws",
    // "expo",
    // "jest",
    "zustand",
    "redux",
    // "graphql",
  ];

  return (
    <>
      {skills.map((skill, index) => {
        const radius = 30;
        const speed = Math.random() + 0.1;
        const initialAngle = (index * Math.PI * 2) / skills.length;
        const yOffset = 0;

        return (
          <SimpleSkillIcon
            key={index}
            skill={skill}
            radius={radius}
            speed={speed}
            initialAngle={initialAngle}
            yOffset={yOffset}
          />
        );
      })}
    </>
  );
};

const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: true,
          alpha: true,
          preserveDrawingBuffer: true,
        }}
        performance={{ min: 0.1 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.extensions.get("WEBGL_lose_context");
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.5}
          color="#8b5cf6"
        />

        <FlyingSkillIcons />

        <AnimatedSphere
          position={[-3, 0, 0]}
          color="#8b5cf6"
          speed={0.5}
          distort={0.4}
        />
        <AnimatedSphere
          position={[3, 0, 2]}
          color="#ec4899"
          speed={0.8}
          distort={0.6}
        />

        {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          makeDefault
        /> */}
      </Canvas>
    </div>
  );
};

export default HeroBackground3D;
