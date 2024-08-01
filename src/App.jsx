// App.js
import React, { useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Stats } from '@react-three/drei';
import Model from './components/Model';
import Card from './components/Card';
import './index.css';

// Custom hook to set the camera position and angle
function SetCameraPosition() {
  const { camera } = useThree();

  useEffect(() => {
    // Calculate the camera position based on a 30-degree angle
    const distance = 80; // Adjust distance from the origin
    const angle = 30; // Angle in degrees
    const radians = (angle * Math.PI) / 180; // Convert angle to radians

    // Set camera position
    camera.position.set(
      distance * Math.cos(radians),
      distance * Math.sin(radians),
      100 // Adjust the z position as needed
    );

    // Ensure the camera is looking at the origin (or another target)
    camera.lookAt(0, 0, 0);

    // Optionally set the up vector to control the camera's orientation
    camera.up.set(0, 1, 0); // Ensures the "up" direction is along the Y-axis

    // Adjust the camera's field of view
    camera.fov = 50;
    camera.updateProjectionMatrix();

    // Optionally log the camera position and orientation for debugging
    // console.log('Camera position:', camera.position);
    // console.log('Camera up vector:', camera.up);
  }, [camera]);

  return null; // This component does not render anything
}

function App() {
  const [hovered, setHovered] = useState(false);
  const [cardContent, setCardContent] = useState('')
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  return (
    <div style={{ width: '100vw', height: '100vh' }} className="w-full h-full overflow-hidden">
      <Canvas shadows>
        {/* Set the initial camera position and angle */}
        <SetCameraPosition />

        {/* Ambient light to softly illuminate the scene */}
        <ambientLight intensity={0.7} />

        {/* Directional light to cast realistic shadows */}
        <directionalLight
          castShadow
          position={[10, 10, 10]}
          intensity={1.5}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.5}
          shadow-camera-far={500}
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
        />

        {/* Point light for additional lighting effects */}
        <pointLight position={[-10, 10, -10]} intensity={1} />

        {/* Environment for reflection and lighting effects */}
        <Environment preset="sunset" background />

        {/* The model with animations */}
        <Model 
          url="/model/Linqhaul_MuhammadExport.glb" 
          setHovered={setHovered}
          setCardContent={setCardContent}
          setCardPosition={setCardPosition}
        />

        {/* Orbit controls with constraints */}
        <OrbitControls
          // enablePan={true}
          enableZoom={true}
          minPolarAngle={0.1} // Prevent camera from going below the floor
          maxPolarAngle={Math.PI / 2-0.1}
          maxAzimuthAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          // enableDamping={false}
          // makeDefault
          // minDistance={3}
          // maxDistance={10}
        />

        {/* Stats for performance monitoring (optional) */}
        <Stats />
      </Canvas>
      <Card visible={hovered} position={cardPosition} content={cardContent} />
    </div>
  );
}

export default App;
