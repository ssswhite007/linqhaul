import React, { useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { TailSpin, BallTriangle } from "react-loader-spinner";
const Preloader = ({ setLoader }) => {
  const { active, progress, item, errors, loaded, total } = useProgress();

  useEffect(() => {
    if (loaded === total) {
      setLoader(false);
    }   
  }, [loaded, total, setLoader]);
  return (
    <Html>
      <div className="bg-[#081427]">
        <BallTriangle
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius={5}
        />
      </div>
    </Html>
  );
};

export default Preloader;
