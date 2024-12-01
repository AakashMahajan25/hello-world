"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html, Line } from "@react-three/drei";
import Earth from "../../../public/Earth";

function LabeledBentLine({ start, bend, end, label }) {
  return (
    <>
      <Line
        points={[start, bend, end]} // Array of points: start, bend, and end
        color="gray" // Line color
        lineWidth={1} // Line width
      />
      <Html position={end}>
        <div
          style={{
            color: "white",
            padding: "4px",
            borderRadius: "4px",
          }}
          className="border border-gray-900 backdrop-blur-2xl"
        >
          {label}
        </div>
      </Html>
    </>
  );
}

function RotatingEarth({ isInteracting }) {
  const earthRef = useRef();

  // Rotate the Earth only when the user is not interacting
  useFrame(() => {
    if (!isInteracting && earthRef.current) {
      earthRef.current.rotation.y += 0.005; // Adjust speed as needed
    }
  });

  return (
    <mesh ref={earthRef}>
      <Earth />
      {/* Example of labeled bent lines */}
      <LabeledBentLine
        start={[1, 0, 0]}
        bend={[1, 0.5, 0]}
        end={[1.1, 0.5, -0.2]}
        label="Engine Hood"
      />
      <LabeledBentLine
        start={[1.1, 0, 0.4]}
        bend={[1.1, 0.2, 0.4]}
        end={[1.0, 0.3, 0.8]}
        label="Head Light"
      />
      <LabeledBentLine
        start={[1.18, -0.25, 0]}
        bend={[1.4, 0.1, 0]}
        end={[1.4, 0.15, -0.3]}
        label="Front Bumper"
      />
      <LabeledBentLine
        start={[0, 0.3, 0]}
        bend={[0, 0.5, 0]}
        end={[0, 0.6, 1]}
        label="Roof"
      />
      <LabeledBentLine
        start={[0, 0.1, -0.5]}
        bend={[0, 0.4, -0.8]}
        end={[0, 0.4, -1.2]}
        label="Door"
      />
      <LabeledBentLine
        start={[0, -0.25, 0.5]}
        bend={[0, 0.4, 0.8]}
        end={[0, 0.4, 1.2]}
        label="Side Skirt"
      />
      <LabeledBentLine
        start={[0, 0.2, -0.37]}
        bend={[0, 0.7, -0.8]}
        end={[0, 0.7, -1.2]}
        label="Wind Mirror"
      />
    </mesh>
  );
}

const Car = () => {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="h-[100vh] w-[100vw] bg-black flex items-center">
      <div className="w-[80vw] h-full m-auto">
        <Canvas camera={{ position: [1.2, 1.2, 1.2] }}>
          <ambientLight />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            onStart={() => setIsInteracting(true)} // Stop rotation on interaction
            onEnd={() => setIsInteracting(false)} // Resume rotation when interaction ends
          />
          <RotatingEarth isInteracting={isInteracting} />
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </div>
  );
};

export default Car;