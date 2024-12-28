"use client";

import { Canvas, type ThreeElements, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import type * as THREE from "three";

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });
  return (
    <mesh
      {...props}
      onClick={() => setActive(!active)}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      ref={meshRef}
      scale={active ? 1.5 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "#2f74c0"} />
    </mesh>
  );
}

export default function Home() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        angle={0.15}
        decay={0}
        intensity={Math.PI}
        penumbra={1}
        position={[10, 10, 10]}
      />
      <pointLight decay={0} intensity={Math.PI} position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
