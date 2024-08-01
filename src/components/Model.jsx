import React, { useRef, useState, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { useAnimations } from '@react-three/drei';
import { Raycaster, Vector2, Vector3 } from 'three';

const Model = (props) => {
  const { url, setHovered, setCardContent, setCardPosition } = props
  const gltf = useLoader(GLTFLoader, url);
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const raycaster = useRef(new Raycaster());
  const mouse = useRef(new Vector2());
  const tooltipRef = useRef();
  const cameraRef = useRef();
  
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach(action => action.play());
    }
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate mouse position in normalized device coordinates
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ camera, gl }) => {
    cameraRef.current = camera;
    if (gltf.scene) {
      // Update the raycaster with the camera and mouse position
      raycaster.current.setFromCamera(mouse.current, camera);

      // Calculate objects intersecting the raycaster
      const intersects = raycaster.current.intersectObjects(gltf.scene.children, true);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        setHovered(true);
        setCardContent(intersectedObject.name);

        // Convert 3D position to 2D screen position
        const vector = new Vector3(intersects[0].point.x, intersects[0].point.y, intersects[0].point.z);
        vector.project(camera);

        const x = (vector.x * .5 + .5) * gl.domElement.clientWidth;
        const y = (vector.y * -.5 + .5) * gl.domElement.clientHeight;

        setCardPosition({ x, y });
      } else {
        setHovered(false);
      }
    }
  });

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

export default Model;
