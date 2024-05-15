import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { BBAnchor, Html } from "@react-three/drei"
import Planet from "../components/Planet"
import saturnMap from "../assets/planets/saturn_map.jpg"
import sunMap from "../assets/planets/sun_map.jpg"


const Saturn = (props) => {
    let planetRef = useRef()
    let ringRef = useRef()
    let planetAngle = 0
    let map = new THREE.TextureLoader().load(saturnMap)
    let map2 = new THREE.TextureLoader().load(sunMap)

    useFrame(() => {
        planetAngle += props.speed
        if (planetAngle > (2 * Math.PI)) {
            planetAngle = 0
        }
        planetRef.current.position.x = props.distance * Math.cos(planetAngle)
        planetRef.current.position.y = 0
        planetRef.current.position.z = props.distance * Math.sin(planetAngle)
        //for rotation
        planetRef.current.rotation.y += .001
        ringRef.current.rotation.x = Math.PI / 2
    })

    return (
        <group>
            <Planet planetRef={planetRef} planetSize={7}>
                <meshBasicMaterial map={map} />
                <mesh ref={ringRef}>
                    <ringGeometry args={[9, 15, 64]} />
                    <meshBasicMaterial color={"white"} side={THREE.DoubleSide} map={map2} />
                </mesh>
                <BBAnchor anchor={[0, 4, 0]}>
                    <Html center distanceFactor={100} occlude>
                        <h1>Saturn</h1>
                    </Html>
                </BBAnchor>
            </Planet>
        </group>
    )
}

export default Saturn