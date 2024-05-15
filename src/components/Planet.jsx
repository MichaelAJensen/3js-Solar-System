import * as THREE from "three"


const Planet = (props) => {
    return (
        <group ref={props.planetRef}>
            <mesh position={[0, 0, 0]}>
                <sphereGeometry
                    args={[props.planetSize || 3, 32, 32]} />
                {props.children}
            </mesh>
        </group>
    )
}

export default Planet
