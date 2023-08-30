import React, { useRef } from 'react'
import { Text, RenderTexture, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

const Cube = () => {

    const textRef = useRef();
    useFrame((state) => (
        textRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5)
    ));

  return (
    
    <mesh>
        <boxGeometry args={[3.5,3.5,3.5]} />
        <meshStandardMaterial>
            <RenderTexture attach="map" >
                <PerspectiveCamera makeDefault position={[0,0,2]} />
                <color attach="background" args={[0xd3b489]} />
                <Text ref={textRef} fontSize={0.6} color={0xffffff}>
                    About Me
                </Text>
        </RenderTexture>
        </meshStandardMaterial>
    </mesh>
    
  )
}

export default Cube
