import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"


const Moon = (props) => {
    const moonRef = useRef()
    const moonSpeed = props.speed
    let moonAngle = 0

    useFrame(() => {
        moonAngle += moonSpeed
        if (moonAngle > (2 * Math.PI)) {
            moonAngle = 0
        }
        moonRef.current.position.x = props.position.x + props.distance * Math.cos(moonAngle)
        moonRef.current.position.y = 0
        moonRef.current.position.z = props.position.z + props.distance * Math.sin(moonAngle)

        moonRef.current.rotation.y += .001
    })
    return (
        <group ref={moonRef}>
            <mesh >
                <sphereGeometry args={[.8, 32, 32]} />
                <meshBasicMaterial color={0xaaaaaa} />
            </mesh>
         
        </group>
    )
}

export default Moon



















