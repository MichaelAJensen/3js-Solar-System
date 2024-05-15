import * as THREE from "three"
import { useRef } from "react"
import { useState } from "react"
import { useFrame } from "@react-three/fiber"
import Planet from "../components/Planet"
import earthMap from "../assets/planets/earth_map.jpg"
import { BBAnchor, Html } from "@react-three/drei"
import Moon from "../components/Moon"


const Earth = (props) => {
    let planetRef = useRef()
    let [position, setPosition] = useState([])
    let planetAngle = 0
    let map = new THREE.TextureLoader().load(earthMap)

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
        setPosition(planetRef.current.position)
    })

    return (
        <group>
            <Planet planetRef={planetRef} planetSize={6}>
                <meshBasicMaterial map={map} />
                <BBAnchor anchor={[0, 4, 0]}>
                    <Html center distanceFactor={100} occlude>
                        <h1>Earth</h1>
                    </Html>
                </BBAnchor>
            </Planet>
            <Moon speed={.005} distance={8} position={position}/>
        </group>
    )
}

export default Earth