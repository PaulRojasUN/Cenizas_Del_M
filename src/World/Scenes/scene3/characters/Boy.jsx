import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Boy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("assets/models/scene3/character_kid/animated_boy.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="cuerpo_01_cuerpo_shd_0"
            geometry={nodes.cuerpo_01_cuerpo_shd_0.geometry}
            material={materials["cuerpo_shd.001"]}
            skeleton={nodes.cuerpo_01_cuerpo_shd_0.skeleton}
          />
          <skinnedMesh
            name="gum_lower_geo_Gum_shd_0"
            geometry={nodes.gum_lower_geo_Gum_shd_0.geometry}
            material={materials.Gum_shd}
            skeleton={nodes.gum_lower_geo_Gum_shd_0.skeleton}
          />
          <skinnedMesh
            name="gum_upper_geo_Gum_shd_0"
            geometry={nodes.gum_upper_geo_Gum_shd_0.geometry}
            material={materials.Gum_shd}
            skeleton={nodes.gum_upper_geo_Gum_shd_0.skeleton}
          />
          <skinnedMesh
            name="L_ojo_blinn1_0"
            geometry={nodes.L_ojo_blinn1_0.geometry}
            material={materials.blinn1}
            skeleton={nodes.L_ojo_blinn1_0.skeleton}
          />
          <skinnedMesh
            name="L_ojo_blinn2_0"
            geometry={nodes.L_ojo_blinn2_0.geometry}
            material={materials.blinn2}
            skeleton={nodes.L_ojo_blinn2_0.skeleton}
          />
          <skinnedMesh
            name="L_ojo_blinn3_0"
            geometry={nodes.L_ojo_blinn3_0.geometry}
            material={materials.blinn3}
            skeleton={nodes.L_ojo_blinn3_0.skeleton}
          />
          <skinnedMesh
            name="pelo_pelo_shd_0"
            geometry={nodes.pelo_pelo_shd_0.geometry}
            material={materials["pelo_shd.001"]}
            skeleton={nodes.pelo_pelo_shd_0.skeleton}
          />
          <skinnedMesh
            name="pullover_pullover_shd_0"
            geometry={nodes.pullover_pullover_shd_0.geometry}
            material={materials["pullover_shd.001"]}
            skeleton={nodes.pullover_pullover_shd_0.skeleton}
          />
          <skinnedMesh
            name="R_ojo_blinn1_0"
            geometry={nodes.R_ojo_blinn1_0.geometry}
            material={materials.blinn1}
            skeleton={nodes.R_ojo_blinn1_0.skeleton}
          />
          <skinnedMesh
            name="R_ojo_blinn2_0"
            geometry={nodes.R_ojo_blinn2_0.geometry}
            material={materials.blinn2}
            skeleton={nodes.R_ojo_blinn2_0.skeleton}
          />
          <skinnedMesh
            name="R_ojo_blinn3_0"
            geometry={nodes.R_ojo_blinn3_0.geometry}
            material={materials.blinn3}
            skeleton={nodes.R_ojo_blinn3_0.skeleton}
          />
          <skinnedMesh
            name="short_short_bsh_0"
            geometry={nodes.short_short_bsh_0.geometry}
            material={materials["short_bsh.001"]}
            skeleton={nodes.short_short_bsh_0.skeleton}
          />
          <skinnedMesh
            name="teeth_lower_geo_Teeth_shd_0"
            geometry={nodes.teeth_lower_geo_Teeth_shd_0.geometry}
            material={materials.Teeth_shd}
            skeleton={nodes.teeth_lower_geo_Teeth_shd_0.skeleton}
          />
          <skinnedMesh
            name="teeth_upper_geo_Teeth_shd_0"
            geometry={nodes.teeth_upper_geo_Teeth_shd_0.geometry}
            material={materials.Teeth_shd}
            skeleton={nodes.teeth_upper_geo_Teeth_shd_0.skeleton}
          />
          <skinnedMesh
            name="tongue_geo_Tongue_shd_0"
            geometry={nodes.tongue_geo_Tongue_shd_0.geometry}
            material={materials.Tongue_shd}
            skeleton={nodes.tongue_geo_Tongue_shd_0.skeleton}
          />
          <skinnedMesh
            name="zappas_zapas_shd_0"
            geometry={nodes.zappas_zapas_shd_0.geometry}
            material={materials["zapas_shd.001"]}
            skeleton={nodes.zappas_zapas_shd_0.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_1} />
        </group>
        <group name="Armature002" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_2} />
        </group>
        <group name="Armature003" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_3} />
        </group>
        <group name="Armature004" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_4} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/scene3/character_kid/animated_boy.glb");



