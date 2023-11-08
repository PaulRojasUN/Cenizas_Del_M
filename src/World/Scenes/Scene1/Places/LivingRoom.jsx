import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from '@react-three/rapier'

export function LivingRoom(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene1/livingroom/LivingRoom.glb");
  return (
    <group {...props} dispose={null} scale={0.05} position={[-2, -1.9, -10]}>

      <group
        position={[144.126, 10.135, 213.651]}
        rotation={[3.12, 0, Math.PI]}
        scale={[1.029, 1.029, 2.179]}
      >
        <RigidBody colliders='cuboid' type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BrokenChair01_Environment_0.geometry}
            material={materials.Environment}
            position={[-4.62, 1.468, 4.715]}
          />
        </RigidBody>
      </group>

      <group
        position={[-170.322, 82.625, 157.222]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.855, 0.855, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CupboardDoor01_Environment_0.geometry}
          material={materials.Environment}
          position={[-17.353, 0, -1.463]}
        />
      </group>
      <group
        position={[58.687, 32.616, 278.142]}
        rotation={[-Math.PI / 2, 0, -0.262]}
      >
        <RigidBody colliders='cuboid' type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Desk_Low_Poly_Environment_0.geometry}
            material={materials.Environment}
            position={[0, 0, -32.33]}
          />
        </RigidBody>
      </group>
      <group
        position={[20.121, 42.299, 47.597]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[8.557, 0.654, 1]}
      >
        <RigidBody colliders='cuboid' type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door_Frame_Low_Poly_Environment_0.geometry}
            material={materials.Environment}
            position={[-1.127, -60.551, -42.463]}
          />
        </RigidBody>
      </group>
      <group
        position={[160.56, 18.223, 308.576]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.935, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Radiator_Environment_0.geometry}
          material={materials.Environment}
          position={[0, -1.557, -13.958]}
        />
      </group>
      <group
        position={[-116.938, 67.174, 52.053]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shelf_Environment_0.geometry}
          material={materials.Environment}
          scale={[0.757, 0.838, 1]}
        />
      </group>
      <group
        position={[20.507, 58.911, 314.305]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 0.835, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Window_Environment_0.geometry}
          material={materials.Environment}
          position={[0.001, 28.034, 2.11]}
        />
      </group>
      <group
        position={[-185.436, 20.797, 251.01]}
        rotation={[-Math.PI / 2, 0, 0]}
      >

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WorkSurface_Environment_0.geometry}
          material={materials.Environment}
          position={[-16.938, 28.611, 15.669]}
          rotation={[0, 0.012, -Math.PI]}
          scale={[-1, 1, 1]}
        />

      </group>
      <group
        position={[-48.033, 63.235, 46.706]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Painting002_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[1.042, 0.864, 1]}
        />
      </group>
      <group
        position={[-186.106, 1.245, 177.185]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0.997, 0, 0]}
        />
      </group>
      <group
        position={[-175.907, 35.561, 271.498]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0, 0, 1.833]}
          scale={1.286}
        />
      </group>
      <group
        position={[-110.207, 3.566, 217.258]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.297, 1, 1]}
      >
        <RigidBody colliders='cuboid'>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.OtherDrawer_ExtraSTuff_0.geometry}
            material={materials.ExtraSTuff}
            position={[0, 9.637, -3.566]}
          />
        </RigidBody>
      </group>
      <group position={[-67.165, 57.097, 305.831]} rotation={[Math.PI, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plug_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          position={[2.163, 0, -4.015]}
        />
      </group>
      <group
        position={[-0.022, 41.407, 45.628]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group position={[35.702, 0.179, -0.073]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DoorDynamicHandle_ExtraSTuff_0.geometry}
            material={materials.ExtraSTuff}
            position={[-15.562, -1.973, -41.308]}
            rotation={[0, -0.007, -0.002]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoorDynamic_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          position={[20.186, -1.973, -41.308]}
          rotation={[0, -0.007, -0.002]}
        />
      </group>
      <group
        position={[-186.074, 4.711, 218.229]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle2_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          scale={0.61}
        />
      </group>
      <group
        position={[-203.61, 101.321, 99.318]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TopThingy_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          position={[0, -79.484, -2.754]}
        />
      </group>
      <group
        position={[57.305, 57.097, 50.123]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={-1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LightSwitch_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          position={[2.175, 0, -1.554]}
        />
      </group>
      <group
        position={[57.301, 57.097, 51.672]}
        rotation={[2.967, 0, -Math.PI]}
        scale={[-1, -1, -1.528]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LightSwitchSwitch_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          position={[2.179, 0, -3.257]}
        />
      </group>
      <group
        position={[-41.993, 61.823, 48.096]}
        rotation={[Math.PI / 2, 0, 0.005]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          position={[-0.617, -4.232, -1.899]}
        />
      </group>
      <group
        position={[19.429, 22.394, 273.489]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curtain_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          position={[-7.298, -1.038, 19.782]}
          rotation={[0.166, -0.331, -1.035]}
          scale={[1.058, 1.01, 1.01]}
        />
      </group>
      <group
        position={[-174.613, 1.181, 75.28]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <RigidBody colliders='cuboid' type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fridge_Fridge_0.geometry}
            material={materials.Fridge}
          />
        </RigidBody>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrigDor_Fridge_0.geometry}
          material={materials.Fridge}
          position={[19.183, -7.972, 41.877]}
        />
      </group>
      <group
        position={[-104.191, 0, 292.599]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <RigidBody colliders='cuboid' type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Low_Cooker_Cooker_0.geometry}
            material={materials.Cooker}
            rotation={[0, 0, Math.PI / 2]}
            scale={0.606}
          />
        </RigidBody>
      </group>
      <group
        position={[82.681, 36.317, 289.856]}
        rotation={[-Math.PI / 2, 0, 0.201]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SafeBody_Safe_0.geometry}
          material={materials.Safe}
        />
        <group
          position={[6.314, 8.395, 9.84]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[1, 1, 0.078]}
        >
          <group
            position={[5.59, -0.026, 18.35]}
            scale={[2.324, 2.324, 29.806]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SafeDial_Grey_0.geometry}
              material={materials.Grey}
              position={[0, 0, 0.005]}
            />
          </group>
          <group
            position={[9.678, 0.038, 18.231]}
            scale={[0.961, 0.798, 11.261]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SafeHandle_Safe_0.geometry}
              material={materials.Safe}
              position={[2.03, 0, 0.898]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SafeDoor_Safe_0.geometry}
            material={materials.Safe}
            position={[6.264, 0, 0]}
          />
        </group>
      </group>
      <group
        position={[-3.509, 40.292, 178.218]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[8.51, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Room_Room_0.geometry}
          material={materials.Room}
          position={[3.986, 190.616, -40.309]}
          rotation={[0, 0, -3.142]}
        />
      </group>
      <group
        position={[62.98, 32.342, 262.347]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Desk_Drawer_Low_Poly_Assets_0.geometry}
          material={materials.Assets}
          position={[-3.449, -12.871, -0.059]}
          rotation={[-Math.PI / 2, 0.262, -Math.PI]}
          scale={[1, 0.682, 1]}
        />
      </group>
      <group
        position={[83.669, 36.731, 288.627]}
        rotation={[-3.141, -0.504, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pencil01_Assets_0.geometry}
          material={materials.Assets}
          position={[0, 0, -3.833]}
        />
      </group>
      <group
        position={[49.216, 83.478, 309.555]}
        rotation={[-1.611, -0.435, -0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CurtainPole2_Assets_0.geometry}
          material={materials.Assets}
          position={[-19.776, 1.857, 0.139]}
          rotation={[3.141, -0.96, 0.698]}
          scale={[0.788, 0.788, 0.537]}
        />
      </group>
      <group
        position={[48.406, 84.906, 309.79]}
        rotation={[-1.652, -0.432, -0.105]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CurtainPole_Assets_0.geometry}
          material={materials.Assets}
          position={[-19.776, 1.857, 0.139]}
          rotation={[3.141, -0.96, 0.698]}
          scale={[0.788, 0.788, 0.537]}
        />
      </group>
      <group
        position={[28.144, 75.335, 306.309]}
        rotation={[-0.251, -0.555, -2.089]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curtain_Ring01_Assets_0.geometry}
          material={materials.Assets}
          position={[0.083, 0, 0]}
          rotation={[2.443, -1.571, 0]}
          scale={[0.788, 0.788, 0.537]}
        />
      </group>
      <group
        position={[-170.322, 82.625, 250.113]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.855, 0.855, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CupboardDoor002_Environment_0.geometry}
          material={materials.Environment}
          position={[-17.353, 0, -1.463]}
        />
      </group>
      <group
        position={[-188.654, 4.711, 215.11]}
        rotation={[-Math.PI / 2, 0, -0.175]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle003_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          scale={0.61}
        />
      </group>
      <group
        position={[-189.479, 4.711, 221.846]}
        rotation={[-Math.PI / 2, 0, 0.175]}
        scale={1.155}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle004_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          scale={0.61}
        />
      </group>
      <group
        position={[-179.569, 1.245, 171.405]}
        rotation={[0.621, -0.037, 2.259]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper001_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0.997, 0, 0]}
        />
      </group>
      <group
        position={[-182.728, 1.245, 164.374]}
        rotation={[0.556, -1.21, -0.238]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper002_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0.997, 0, 0]}
        />
      </group>
      <group
        position={[-173.598, 1.245, 166.175]}
        rotation={[-1.794, -0.354, 0.538]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper003_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0.997, 0, 0]}
        />
      </group>
      <group
        position={[-188.279, 1.245, 169.157]}
        rotation={[-1.774, -0.737, 0.132]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper004_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0.997, 0, 0]}
        />
      </group>
      <group
        position={[39.848, 1.245, 236.534]}
        rotation={[-1.794, -0.354, 0.538]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper005_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0.997, 0, 0]}
        />
      </group>
      <group
        position={[81.332, 1.245, 233.474]}
        rotation={[0.621, -0.037, 2.259]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper006_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0.997, 0, 0]}
        />
      </group>
      <group
        position={[-203.826, 37.887, 143.317]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <RigidBody colliders='cuboid' type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shelf001_Environment_0.geometry}
            material={materials.Environment}
            scale={[0.757, 0.838, 1]}
          />
        </RigidBody>
      </group>
      <group
        position={[-203.375, 39.276, 152.429]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle005_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0, 0, 1.833]}
          scale={1.286}
        />
      </group>
      <group
        position={[-204.141, 40.972, 146.898]}
        rotation={[-Math.PI, 0.262, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottle006_ExtraSTuff_0.geometry}
          material={materials.ExtraSTuff}
          rotation={[0, 0, 1.833]}
          scale={1.286}
        />
      </group>
      <RigidBody colliders='cuboid' type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench01_Environment_0.geometry}
          material={materials.Environment}
          position={[137.452, 0.042, 72.001]}
          rotation={[-Math.PI / 2, 0, 3.054]}
          scale={[1, 1, 1.324]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cupboards_Environment_0.geometry}
        material={materials.Environment}
        position={[-186.181, 67.397, 206.684]}
        rotation={[-Math.PI / 2, 0, -1.571]}
        scale={[4.968, 1.25, 0.412]}
      />
      <RigidBody colliders='cuboid' type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LowPolyTable_Environment_0.geometry}
          material={materials.Environment}
          position={[134.234, 27.283, 110.78]}
          rotation={[-Math.PI / 2, 0, -3.054]}
          scale={[1, 1, 0.083]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PipesWires01_Environment_0.geometry}
        material={materials.Environment}
        position={[-89.249, 45.476, 309.108]}
        rotation={[Math.PI, -0.131, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PipesWires02_Environment_0.geometry}
        material={materials.Environment}
        position={[169.388, 52.454, 309.328]}
        rotation={[-Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PipesWires03_Environment_0.geometry}
        material={materials.Environment}
        position={[128.676, 36.906, 309.32]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PipesWires04_Environment_0.geometry}
        material={materials.Environment}
        position={[36.433, 97.358, 309.323]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PipesWires05_Environment_0.geometry}
        material={materials.Environment}
        position={[-206.151, 38.492, 236.212]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PipesWires06_Environment_0.geometry}
        material={materials.Environment}
        position={[-206.151, 38.492, 238.242]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <RigidBody colliders='trimesh' type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sofa_Environment_0.geometry}
          material={materials.Environment}
          position={[-65.989, -0.035, 77.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 0.719, 1]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bin_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-194.314, 4.448, 186.952]}
        rotation={[-Math.PI, 0.698, Math.PI / 2]}
        scale={[0.861, 0.861, 0.652]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PlugSocket_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-65.005, 57.097, 309.846]}
        scale={-1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-194.885, 35.329, 259.761]}
        rotation={[-1.571, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-111.018, 37.307, 282.77]}
        rotation={[-1.567, -0.005, -2.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FloorBoardHalf2_Floorboard_0.geometry}
        material={materials.Floorboard}
        position={[91.818, -1.067, 201.096]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FloorBoardHalf_Floorboard_0.geometry}
        material={materials.Floorboard}
        position={[91.818, -1.067, 201.096]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PenPot_Assets_0.geometry}
        material={materials.Assets}
        position={[86.856, 37.495, 299.36]}
        rotation={[-2.967, 0, -0.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_Assets_0.geometry}
        material={materials.Assets}
        position={[162.302, 29.83, 109.418]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.859}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ventalationThingy_Assets_0.geometry}
        material={materials.Assets}
        position={[-104.191, 84.042, 309.754]}
        rotation={[Math.PI, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook01_Assets_0.geometry}
        material={materials.Assets}
        position={[-97.342, 68.438, 52.494]}
        rotation={[-Math.PI / 2, 0, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPaper00_Assets_0.geometry}
        material={materials.Assets}
        position={[53.87, 0.057, 235.694]}
        rotation={[-Math.PI / 2, 0, Math.PI / 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SmallDoor_Environment_0.geometry}
        material={materials.Environment}
        position={[-168.17, 6.506, 207.779]}
        rotation={[1.56, -0.756, 1.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SmallDoor001_Environment_0.geometry}
        material={materials.Environment}
        position={[-167.031, 13.38, 261.306]}
        rotation={[0.656, -1.557, 0.656]}
      />
      <RigidBody colliders='cuboid' type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench002_Environment_0.geometry}
          material={materials.Environment}
          position={[119.767, 6.005, 135.301]}
          rotation={[-0.284, 0.137, -3.097]}
          scale={[1, 1, 1.324]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPaper001_Assets_0.geometry}
        material={materials.Assets}
        position={[74.237, 0.057, 240.025]}
        rotation={[-Math.PI / 2, 0, 1.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPaper002_Assets_0.geometry}
        material={materials.Assets}
        position={[39.468, 0.057, 224.713]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPaper003_Assets_0.geometry}
        material={materials.Assets}
        position={[79.994, 0.057, 240.025]}
        rotation={[-Math.PI / 2, 0, 1.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPaper004_Assets_0.geometry}
        material={materials.Assets}
        position={[68.246, 0.057, 216.284]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPaper005_Assets_0.geometry}
        material={materials.Assets}
        position={[59.208, 36.567, 268.356]}
        rotation={[-Math.PI / 2, 0, 1.222]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PaperPaper006_Assets_0.geometry}
        material={materials.Assets}
        position={[63.36, 36.567, 287.324]}
        rotation={[-Math.PI / 2, 0, 2.094]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-193.084, 5.157, 201.034]}
        rotation={[-1.573, 0.005, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-193.084, 9.421, 200.621]}
        rotation={[-1.416, -0.162, -2.518]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook002_Assets_0.geometry}
        material={materials.Assets}
        position={[-97.342, 69.62, 52.494]}
        rotation={[-Math.PI / 2, 0, 2.967]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook003_Assets_0.geometry}
        material={materials.Assets}
        position={[-97.342, 70.796, 52.494]}
        rotation={[-Math.PI / 2, 0, Math.PI / 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook004_Assets_0.geometry}
        material={materials.Assets}
        position={[-103.188, 70.988, 52.494]}
        rotation={[-Math.PI / 2, -0.698, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook005_Assets_0.geometry}
        material={materials.Assets}
        position={[-105.108, 70.988, 52.091]}
        rotation={[-Math.PI / 2, -0.698, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook006_Assets_0.geometry}
        material={materials.Assets}
        position={[-107.62, 72.132, 52.091]}
        rotation={[-Math.PI / 2, -1.134, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook007_Assets_0.geometry}
        material={materials.Assets}
        position={[-111.382, 72.566, 52.851]}
        rotation={[Math.PI / 2, 1.484, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook008_Assets_0.geometry}
        material={materials.Assets}
        position={[-112.476, 72.791, 52.598]}
        rotation={[1.614, -1.396, -3.098]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook009_Assets_0.geometry}
        material={materials.Assets}
        position={[-115.704, 72.552, 52.598]}
        rotation={[-1.592, -1.221, -0.022]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook010_Assets_0.geometry}
        material={materials.Assets}
        position={[-119.16, 72.869, 52.598]}
        rotation={[1.484, 1.484, 0.087]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook011_Assets_0.geometry}
        material={materials.Assets}
        position={[-119.505, 72.86, 52.31]}
        rotation={[-3.098, -1.563, -1.527]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook012_Assets_0.geometry}
        material={materials.Assets}
        position={[-122.402, 72.351, 52.31]}
        rotation={[-1.588, -1.134, -0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook013_Assets_0.geometry}
        material={materials.Assets}
        position={[-126.167, 71.193, 52.31]}
        rotation={[-1.579, -0.698, -0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BasicBook014_Assets_0.geometry}
        material={materials.Assets}
        position={[-133.505, 69.29, 52.31]}
        rotation={[-1.568, -0.175, 3.138]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-176.237, 35.329, 297.851]}
        rotation={[-1.571, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-189.379, 35.329, 281.342]}
        rotation={[-1.571, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-161.787, 5.122, 231.558]}
        rotation={[1.571, -0.872, 3.142]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-189.459, 27.302, 209.911]}
        rotation={[-1.571, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[-193.95, 30.975, 204.679]}
        rotation={[-1.234, 0.52, -0.614]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_ExtraSTuff_0.geometry}
        material={materials.ExtraSTuff}
        position={[118.393, 29.521, 124.265]}
        rotation={[-1.571, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene1/livingroom/LivingRoom.glb");