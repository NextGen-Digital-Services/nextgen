import { Float, Sphere, Icosahedron, Box } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const Models = () => {
  const groupRef = useRef()

  // Gentle parallax effect based on mouse movement
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05)
    }
  })

  // Glass Material for Sphere
  const glassMaterial = {
    roughness: 0,
    transmission: 1,
    thickness: 1,
    metalness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0,
    ior: 1.5,
  }

  // Premium Metallic Material
  const metallicMaterialParams = {
    roughness: 0.2,
    metalness: 0.8,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  }

  return (
    <group ref={groupRef}>
      {/* Front Glass Sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
        <Sphere position={[3.5, 1, -2]} args={[1.2, 64, 64]}>
          <meshPhysicalMaterial {...glassMaterial} color="#ffffff" />
        </Sphere>
      </Float>

      {/* Floating Card / Box */}
      <Float speed={2.5} rotationIntensity={2.5} floatIntensity={2}>
        <Box position={[-4, -1, -3]} args={[1.8, 2.5, 0.1]} radius={0.1}>
          <meshPhysicalMaterial color="#00F5FF" {...metallicMaterialParams} />
        </Box>
      </Float>

      {/* Gradient Blob / Abstract Shape */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={4}>
        <Icosahedron position={[1.5, -2.5, -1.5]} args={[1, 1]}>
          <meshPhysicalMaterial color="#6C63FF" {...metallicMaterialParams} />
        </Icosahedron>
      </Float>

      {/* Extra floating ring for premium feel */}
      <Float speed={3} rotationIntensity={3} floatIntensity={2}>
        <mesh position={[-2, 2, -4]}>
          <torusGeometry args={[0.8, 0.05, 64, 100]} />
          <meshPhysicalMaterial color="#ffffff" {...metallicMaterialParams} metalness={1} roughness={0} />
        </mesh>
      </Float>
    </group>
  )
}

export default Models