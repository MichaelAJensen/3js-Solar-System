import * as THREE from "three";
import Sun from "../minorBodies/Sun";
import Earth from "../minorBodies/Earth"
import Uranus from "../minorBodies/Uranus"
import Venus from "../minorBodies/Venus"
import Saturn from "../minorBodies/Saturn"
import Neptune from "../minorBodies/Neptune"
import Mercury from "../minorBodies/Mercury"
import Mars from "../minorBodies/Mars"
import Jupiter from "../minorBodies/Jupiter"



const SolarSystem = () => {
    return (
 
        <group position={[0, 0, 0]}>

            <Sun />
            <Mercury distance={50} speed={.005} />
            <Venus distance={75} speed={.01} />
            <Earth distance={100} speed={.004} />
            <Mars distance={125} speed={.003} />
            <Jupiter distance={150} speed={.007} />
            <Saturn distance={175} speed={.006} />
            <Uranus distance={200} speed={.005} />
            <Neptune distance={250} speed={.002} />
        </group>
    
    )
}

export default SolarSystem