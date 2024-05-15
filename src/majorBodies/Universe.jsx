import * as THREE from "three"
import StarField from "./StarField"
import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import SolarSystem from "./SolarSystem"



const Universe = (props) => {
    let rotationRef = useRef()

    useFrame(() => {
        rotationRef.current.rotation.y -= .0001
    })
    return (
        <>    
            <group ref={rotationRef} position={[0,0,0]}>
                <StarField />
                <SolarSystem />
            </group>
            <OrbitControls
                minDistance={50}
                maxDistance={500}
                enablePan={false}
            />
        </>
    )
}

export default Universe