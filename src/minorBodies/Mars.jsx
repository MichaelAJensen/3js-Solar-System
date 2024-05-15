import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { BBAnchor, Html } from "@react-three/drei"
import Planet from "../components/Planet"
import marsMap from "../assets/planets/mars_map.jpg"


const Mars = (props) => {
    let planetRef = useRef()
    let planetAngle = 0
    let map = new THREE.TextureLoader().load(marsMap)

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
    })

    return (
        <group>
            <Planet planetRef={planetRef}>
                <meshBasicMaterial map={map} />
                <BBAnchor anchor={[0, 4, 0]}>
                    <Html center distanceFactor={100} occlude>
                        <h1>Mars</h1>
                    </Html>
                </BBAnchor>
            </Planet>
        </group>
    )
}

export default Mars