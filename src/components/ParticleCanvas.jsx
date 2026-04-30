import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';

extend({ UnrealBloomPass });

const ParticleSwarm = ({ isMobile }) => {
  const meshRef = useRef();
  const count = isMobile ? 6000 : 15000;
  const speedMult = 1;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor; // Alias for user code compatibility
  
  const positions = useMemo(() => {
     const pos = [];
     for(let i=0; i<count; i++) pos.push(new THREE.Vector3((Math.random()-0.5)*100, (Math.random()-0.5)*100, (Math.random()-0.5)*100));
     return pos;
  }, [count]);

  // Material & Geom
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

  const PARAMS = useMemo(() => ({"twist":1.5,"radius":20,"flux":1.6,"zoom":1.8}), []);
  const addControl = (id, l, min, max, val) => {
      return PARAMS[id] !== undefined ? PARAMS[id] : val;
  };
  const setInfo = () => {};
  const annotate = () => {};

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;
    const THREE_LIB = THREE;

    if(material.uniforms && material.uniforms.uTime) {
         material.uniforms.uTime.value = time;
    }

    for (let i = 0; i < count; i++) {
        // USER CODE START
        const twist = addControl("twist", "Helix Twist", 0.5, 4.0, 1.5);
        const radius = addControl("radius", "Helix Radius", 10, 40, 20);
        const flux = addControl("flux", "Structural Flux", 0.1, 4.0, 1.6);
        const zoom = addControl("zoom", "Zoom Multiplier", 0.5, 5.0, 1.8);
        
        const norm = i / count;
        const t = time * 0.4 * flux;
        
        const breakY = Math.sin(t * 0.4) * 60;
        const breakRange = 12.0;
        
        let px = 0, py = 0, pz = 0;
        
        const isBackbone = norm < 0.75;
        
        if (isBackbone) {
        const side = (norm < 0.375) ? 1 : -1;
        const v = ((norm < 0.375 ? norm / 0.375 : (norm - 0.375) / 0.375) - 0.5) * 200;
        const angle = v * 0.1 * twist + t;
        const offset = (side === 1) ? 0 : Math.PI;
        
        const dy = v - breakY;
        const factor = Math.min(1.0, (dy * dy) / 250.0);
        const currentR = radius * (0.95 + 0.05 * factor);
        
        px = Math.cos(angle + offset) * currentR;
        pz = Math.sin(angle + offset) * currentR;
        py = v;
        
        const jitter = (1.0 - factor) * 4.0;
        px += Math.sin(i * 0.5 + t * 8) * jitter;
        pz += Math.cos(i * 0.5 + t * 8) * jitter;
        
        color.setHSL(0.6, 0.8, 0.3 + (1.0 - factor) * 0.4);
        } else {
        const v = ((norm - 0.75) / 0.25 - 0.5) * 200;
        const angle = v * 0.1 * twist + t;
        const lerpVal = Math.sin(i * 99.0) * 0.5 + 0.5;
        const r = radius * (lerpVal * 2.0 - 1.0);
        
        const dy = Math.abs(v - breakY);
        const isLocal = dy < breakRange;
        
        px = Math.cos(angle) * r;
        pz = Math.sin(angle) * r;
        py = v;
        
        if (isLocal && Math.sin(i * 1.5) > 0.4) {
            px += Math.sin(i + t * 5) * 6;
            pz += Math.cos(i + t * 5) * 6;
            color.setHSL(0, 0, 0.95); 
        } else {
            color.setHSL(0.6, 0.1, 0.25);
        }
        }
        
        target.set(px * zoom, py * zoom, pz * zoom);
        
        if (i === 0) {
        setInfo("Macro DNA Simulation", "Adjusted perspective for a wider field of view with stabilized rotation.");
        }
        // USER CODE END

        positions[i].lerp(target, 0.1);
        dummy.position.copy(positions[i]);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, count]} />
  );
};

export default function ParticleCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: isMobile ? 'none' : 'auto' }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 60 }} style={{ background: '#000' }}>
        <fog attach="fog" args={['#000000', 0.01]} />
        <ParticleSwarm isMobile={isMobile} />
        <OrbitControls 
          autoRotate={true} 
          autoRotateSpeed={0.5}
          enableZoom={false} 
          enablePan={false}
          enableRotate={!isMobile} 
        />
        <Effects disableGamma>
            <unrealBloomPass threshold={0} strength={1.8} radius={0.4} />
        </Effects>
      </Canvas>
    </div>
  );
}
