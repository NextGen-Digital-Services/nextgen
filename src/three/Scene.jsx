import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Sparkles } from "@react-three/drei"
import Models from "./Models"

const Scene = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%', display: 'block' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      
      {/* Dynamic Dramatic Lighting */}
      <spotLight position={[10, 10, 10]} intensity={1.5} angle={0.15} penumbra={1} color="#ffffff" />
      <spotLight position={[-10, 5, -10]} intensity={2} angle={0.3} penumbra={1} color="#6C63FF" />
      <pointLight position={[0, -5, 5]} intensity={1} color="#00F5FF" />

      {/* Give reflections to glass objects */}
      <Environment preset="city" />

      <Sparkles count={200} scale={15} size={2} speed={0.4} opacity={0.5} color="#00F5FF" />
      <Models />

      {/* Minimal orbit controls just for light touch parallax, restricted to prevent breaking layout */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
    </Canvas>
  )
}

export default Scene