import * as THREE from "three"
import { Stars } from "@react-three/drei"

const StarField = (props) => {
    return (
        <>
            <group>
                <Stars
                    radius={100}
                    depth={100}
                    count={500}
                    factor={4}
                    saturation={0}
                    fade={true}
                    speed={5}
                    size={1}
                />
                  <Stars
                    radius={100}
                    depth={100}
                    count={1000}
                    factor={4}
                    saturation={0}
                    fade={true}
                    speed={3}
                    size={5}
                />
                  <Stars
                    radius={100}
                    depth={100}
                    count={1000}
                    factor={4}
                    saturation={0}
                    fade={true}
                    speed={1}
                    size={5}
                />
            </group>
        </>
    )
}

export default StarField