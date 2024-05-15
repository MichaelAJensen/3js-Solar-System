import * as THREE from "three"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { BBAnchor, Html } from "@react-three/drei"


const Sun = (props) => {
    return (
        <group>
            {/* <pointLight intensity={4000} color={"white"} position={[0,0,0]}/> */}
            <mesh>
                <sphereGeometry args={[15, , 32, 32]} />
                <meshBasicMaterial color={"yellow"} opacity={.9}/>
            </mesh>
            <EffectComposer>
                <Bloom intensity={2} luminanceThreshold={.8} radius={.4} mipmapBlur />
            </EffectComposer>
            <BBAnchor anchor={[0, 4, 0]}>
                <Html center distanceFactor={100} occlude>
                    <h1>Sun</h1>
                </Html>
            </BBAnchor>
        </group>
    )
}

export default Sun