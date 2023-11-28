import { Html, useTexture } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import ContainerTextIntroduction from "../../../components/design/ContainerTextIntroduction";
import { getSceneScript } from "../../../utils/script";
import Loader from "../../../components/design/Loader";

const Introduction = () => {
  const texture = useTexture("/assets/images/backgrounds/introduction_bg.jpg");
  const script = getSceneScript(0, [], "");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setLoaded(true);
    }, 2500);
    return () => {
      clearTimeout(temporizador);
    };
  }, []);

  return (
    <Loader isReady={loaded}>
      <group>
        <mesh scale={17}>
          <planeGeometry args={[1, 1, 1]} />
          <meshBasicMaterial map={texture} />
        </mesh>

        <Html center position={[-2.5, 0, 0]}>
          <ContainerTextIntroduction content={script} />
        </Html>
      </group>
    </Loader>
  );
};

export default Introduction;
