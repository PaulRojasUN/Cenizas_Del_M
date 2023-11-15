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
                <RigidBody type="fixed">
                    <Bunker  position={[0,0,0]} scale={3}/>
                </RigidBody>
                <KeyboardControls map={keyboardControls}>
                    <Ecctrl
                        position={[0,1,0]}
                        autoBalance={false}
                        maxVelLimit={1}
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
            </Physics>
        </>
    )
};

export default Underground;