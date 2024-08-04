import React, { useEffect, useState, Suspense } from 'react';
import { Canvas, useThree, extend } from '@react-three/fiber';
import { OrbitControls, Environment, Stats } from '@react-three/drei';
import Model from './components/Model';
import Card from './components/Card';
import MainCard from './components/MainCard';
import Preloader from './components/Preloader';
import './index.css';
import Config from './components/Config/Config';

extend({ Preloader });

function SetCameraPosition() {
  const { camera } = useThree();

  useEffect(() => {
    const distance = 80;
    const angle = 30;
    const radians = (angle * Math.PI) / 180;
    // console.log(camera.position)
    camera.position.set(
      distance * Math.cos(radians),
      distance * Math.sin(radians),
      100
    );

    camera.lookAt(0, 0, 0);
    camera.up.set(0, 1, 0);
    camera.fov = 50;
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}
import { TailSpin, BallTriangle } from "react-loader-spinner";
function App() {
  const [hovered, setHovered] = useState(false);
  const [cardContent, setCardContent] = useState('');
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [loader, setLoader] = useState(true);
  return (
    <div style={{ width: '100vw', height: '100vh' }} className="w-full h-full overflow-hidden bg-[#081427]">
      <Canvas shadows>
        <SetCameraPosition />
        <Suspense fallback={<Preloader setLoader={setLoader} />}>
        <ambientLight intensity={0.7} />
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
        <pointLight position={[-10, 10, -10]} intensity={1} />
        <Environment preset="sunset" background />
        <Model 
          url="/model/Linqhaul_MuhammadExport.glb" 
          setHovered={setHovered}
          setCardContent={setCardContent}
          setCardPosition={setCardPosition}
        />
        <OrbitControls
          enableZoom={true}
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI / 2 - 0.1}
          maxAzimuthAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          minDistance={30} // Set minimum zoom distance
          maxDistance={150} // Set maximum zoom distance
          enablePan={true}
          dampingFactor={0.25} // Adjust for smoother or more responsive controls
          panSpeed={0.5} // Adjust the speed of panning
          screenSpacePanning={false} // Use world space for panning
        />
        </Suspense>
        <Stats />
      </Canvas>

      <Card visible={hovered} position={cardPosition} content={cardContent} />
      {!loader && (
        <div className='absolute bottom-2 right-2 flex bg-transparent gap-4'>
          <MainCard 
            image={Config.pulse.image}
            title={Config.pulse.title}
            description={Config.pulse.description}
            module={Config.pulse.module}
            benefits={Config.pulse.benefits}
          />
          <MainCard 
            image={Config.cortex.image}
            title={Config.cortex.title}
            description={Config.cortex.description}
            module={Config.cortex.module}
            benefits={Config.cortex.benefits}
          />
          <MainCard 
            image={Config.vision.image}
            title={Config.vision.title}
            description={Config.vision.description}
            module={Config.vision.module}
            benefits={Config.vision.benefits}
          />
          <MainCard 
            image={Config.iris.image}
            title={Config.iris.title}
            description={Config.iris.description}
            module={Config.iris.module}
            benefits={Config.iris.benefits}
          />
        </div>
      )}
    </div>
  );
}

export default App;
