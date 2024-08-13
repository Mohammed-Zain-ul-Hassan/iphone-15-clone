import { Html } from '@react-three/drei'
import React from 'react'
import { bouncy } from 'ldrs'

const Loader = () => {
  bouncy.register()
  return (
    <Html>
      <l-bouncy
        size="45"
        speed="1.75" 
        color="white" 
      ></l-bouncy>
    </Html>
  )
}

export default Loader