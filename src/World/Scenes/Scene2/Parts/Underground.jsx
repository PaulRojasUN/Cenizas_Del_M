import { KeyboardControls, Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Howl } from "howler";
import React, { useEffect, useRef, useState } from "react";
import { keyboardControls } from "../../../../hooks/useControls";
import { useGameStore } from "../../../../store/game";
import { getSceneScript } from "../../../../utils/script";
import { Alex } from "../../../Characters/Alex";;
import Backlog from "../../../../components/design/Backlog";
import { Bunker } from "../Places/Bunker";
import Lights from "../Places/Lights";

const Underground = () => {
    const alexURL = "/assets/models/character/alex_main.glb";

    const animationSet = {
        idle: "idle",
        walk: "walking",
        run: "running",
        jump: "moving-jump",
        jumpIdle: "idle-jump",
        jumpLand: "idle",
        fall: "idle", // This is for falling from high sky
        action1: "pickup",
    };

    return (
        <>
            <Physics debug>
                <Lights />
                <KeyboardControls map={keyboardControls}>
                    <Ecctrl
                        position={[0, -2, 0]}
                        autoBalance={false}
                        maxVelLimit={5}
                        capsuleRadius={0.35}
                        floatHeight={0}
                        capsuleHalfHeight={0.91}
                        friction={0.2}
                        
                        name="alex"
                        animated
                    >
                        <EcctrlAnimation characterURL={alexURL} animationSet={animationSet}>
                            <Alex position={[0, -1.25, 0]} scale={1.65} />
                        </EcctrlAnimation>
                    </Ecctrl>
                </KeyboardControls>
                <Bunker position={[22, 0, 0]} scale={2.1} />
                <RigidBody type="fixed" >
                  <mesh position={[-6.7, -4, 0]} rotation={[Math.PI/2,0,0]}>
                    <planeGeometry attach="geometry" args={[20, 33]}/>
                    <meshStandardMaterial
                      transparent={true}
                      opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-6.7, -4, 22.5]} rotation={[Math.PI/2,0,0]}>
                    <planeGeometry attach="geometry" args={[103, 33]}/>
                    <meshStandardMaterial
                      transparent={true}
                      opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-6.7, -4, -24]} rotation={[Math.PI/2,0,0]}>
                    <planeGeometry attach="geometry" args={[103, 32]}/>
                    <meshStandardMaterial
                      transparent={true}
                      opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[40, -4, 0]} rotation={[Math.PI/2,0,0]}>
                    <planeGeometry attach="geometry" args={[10, 33]}/>
                    <meshStandardMaterial
                      transparent={true}
                      opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[50, -4, -1]} rotation={[Math.PI/2,0,0]}>
                    <planeGeometry attach="geometry" args={[30, 7]}/>
                    <meshStandardMaterial
                      transparent={true}
                      opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-12.5, -4, -1]} rotation={[0,Math.PI/2,0]}>
                    <planeGeometry attach="geometry" args={[15, 12]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-12.5, -4, -7.3]} rotation={[0,0,0]}>
                    <planeGeometry attach="geometry" args={[16, 15]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-12.5, -4, 5]} rotation={[0,0,0]}>
                    <planeGeometry attach="geometry" args={[16, 15]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-4.3, 0, -12]} rotation={[0,Math.PI/2,0]}>
                    <planeGeometry attach="geometry" args={[9, 8]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-4.4, 0, 9.5]} rotation={[0,Math.PI/2,0]}>
                    <planeGeometry attach="geometry" args={[9, 8]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-4.4, -2, -15.5]} rotation={[Math.PI,0,0]}>
                    <planeGeometry attach="geometry" args={[120, 4]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[-4.4, -2, 13.4]} rotation={[0,0,0]}>
                    <CuboidCollider args={[2.8,1,3.4]} position={[24.5,0,-3.2]}/>
                    <planeGeometry attach="geometry" args={[65.8, 4]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[40, 0, 0]} rotation={[0,0,0]}>
                    <CuboidCollider args={[3.5,10,16]} position={[20,0,0]}/>
                    <CuboidCollider args={[9,1.5,1]} position={[13.5,-2,2]}/>
                    <CuboidCollider args={[9,1.5,1]} position={[13.5,-2,-4.6]}/>
                    <CuboidCollider args={[0.7,1.3,1.8]} position={[5.2,-2,-6]}/>
                    <CuboidCollider args={[0.7,1.3,2.9]} position={[5.2,-2,5.9]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
                <RigidBody type="fixed" >
                  <mesh position={[0, 0, 0]} rotation={[0,0,0]}>
                    <CuboidCollider args={[0.7,1.3,2.9]} position={[3,-2,3.6]}/>
                    <CuboidCollider args={[0.7,1.3,2.9]} position={[3,-2,-6]}/>
                    <CuboidCollider args={[16.5,1.3,0.8]} position={[20.4,-2,-8.4]}/>
                    <CuboidCollider args={[17,1.3,0.8]} position={[19.5,-2,6]}/>
                    <meshStandardMaterial
                        transparent={true}
                        opacity={0}
                    />
                  </mesh>
                </RigidBody>
            </Physics>
        </>
    )
};

export default Underground;