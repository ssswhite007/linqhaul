import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three-stdlib";
import { useAnimations } from '@react-three/drei';

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    if (actions) {
      // Loop through all available actions and play each one
      Object.values(actions).forEach(action => {
        action.play();
      });
    }
  }, [actions]);

  return <primitive object={gltf.scene} />;
};

export default Model;
