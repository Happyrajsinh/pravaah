import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Cloud, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Container component with realistic details
function Container({ position, onPickup }: { position: [number, number, number], onPickup?: () => void }) {
  return (
    <group position={position}>
      {/* Main container body */}
      <mesh castShadow onClick={onPickup}>
        <boxGeometry args={[0.8, 0.8, 2]} />
        <meshStandardMaterial color="#2563EB" metalness={0.6} roughness={0.2} />
      </mesh>
      {/* Container ridges */}
      {[0, 0.5, 1, 1.5].map((z) => (
        <mesh key={z} position={[0, 0, z - 1]} castShadow>
          <boxGeometry args={[0.82, 0.82, 0.05]} />
          <meshStandardMaterial color="#1E40AF" metalness={0.7} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function CargoShip() {
  const shipRef = useRef<THREE.Group>(null);
  const [shipPosition, setShipPosition] = useState(-30);

  useFrame((_, delta) => {
    if (shipPosition < 0) {
      setShipPosition((prev) => prev + delta * 5);
      if (shipRef.current) {
        shipRef.current.position.x = shipPosition;
      }
    }
  });

  return (
    <group ref={shipRef} position={[shipPosition, 0, 0]}>
      {/* Ship hull - more detailed with curved bottom */}
      <group position={[0, 0, 0]}>
        {/* Main hull body */}
        <mesh castShadow>
          <bufferGeometry>
            {(() => {
              const vertices = [];
              const indices = [];
              const width = 4;
              const height = 2;
              const length = 12;
              const segments = 10;

              // Create curved hull shape
              for (let i = 0; i <= segments; i++) {
                const x = (i / segments - 0.5) * width;
                const y = Math.pow(Math.abs(x / (width / 2)), 2) * -0.5;
                vertices.push(x, y, -length/2, x, y, length/2);
                vertices.push(x, height, -length/2, x, height, length/2);
              }

              // Create faces
              for (let i = 0; i < segments; i++) {
                const v = i * 4;
                indices.push(
                  v, v + 1, v + 4,
                  v + 4, v + 1, v + 5,
                  v + 1, v + 3, v + 5,
                  v + 1, v + 2, v + 3,
                  v, v + 4, v + 2,
                  v + 2, v + 4, v + 6
                );
              }

              const geometry = new THREE.BufferGeometry();
              geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
              geometry.setIndex(indices);
              geometry.computeVertexNormals();
              
              return null;
            })()}
          </bufferGeometry>
          <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Bow (front) section */}
        <mesh position={[0, 1, -5.5]} castShadow>
          <bufferGeometry>
            {(() => {
              const vertices = [];
              const indices = [];
              const segments = 8;

              // Create pointed bow shape
              for (let i = 0; i <= segments; i++) {
                const angle = (i / segments) * Math.PI;
                const x = Math.cos(angle) * 2;
                const z = Math.sin(angle) * 2;
                vertices.push(x, 0, -z, x, 2, -z);
              }

              // Create faces
              for (let i = 0; i < segments; i++) {
                const v = i * 2;
                indices.push(
                  v, v + 1, v + 2,
                  v + 1, v + 3, v + 2
                );
              }

              const geometry = new THREE.BufferGeometry();
              geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
              geometry.setIndex(indices);
              geometry.computeVertexNormals();
              
              return null;
            })()}
          </bufferGeometry>
          <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Bridge structure */}
        <group position={[0, 2, -4]}>
          {/* Main bridge */}
          <mesh castShadow>
            <boxGeometry args={[2.5, 2.5, 3]} />
            <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Bridge windows */}
          <mesh position={[0, 0.5, -1.51]}>
            <planeGeometry args={[2, 0.4]} />
            <meshStandardMaterial color="#0EA5E9" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Navigation equipment */}
          <mesh position={[0, 3, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.2, 1, 8]} />
            <meshStandardMaterial color="#94A3B8" />
          </mesh>
        </group>

        {/* Deck details */}
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[1.5 * (i % 2) - 0.75, 2, i - 2]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 0.5, 8]} />
            <meshStandardMaterial color="#94A3B8" />
          </mesh>
        ))}

        {/* Container stack */}
        <group position={[0, 2.4, 2]}>
          {Array.from({ length: 8 }).map((_, i) => {
            const layer = Math.floor(i / 2);
            const row = i % 2;
            return (
              <Container
                key={i}
                position={[
                  row * 1.2 - 0.6,
                  layer * 0.85,
                  0
                ]}
              />
            );
          })}
        </group>
      </group>
    </group>
  );
}

function Crane() {
  const craneRef = useRef<THREE.Group>(null);
  const [isLifting, setIsLifting] = useState(false);
  const [liftProgress, setLiftProgress] = useState(0);

  useFrame((_, delta) => {
    if (isLifting && craneRef.current) {
      setLiftProgress((prev) => Math.min(prev + delta * 0.5, 1));
      craneRef.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 0.25, liftProgress);
    }
  });

  return (
    <group position={[15, 0, 5]} ref={craneRef}>
      {/* Base */}
      <mesh castShadow>
        <cylinderGeometry args={[1, 1.5, 2, 8]} />
        <meshStandardMaterial color="#475569" />
      </mesh>

      {/* Tower */}
      <mesh position={[0, 8, 0]} castShadow>
        <boxGeometry args={[1, 14, 1]} />
        <meshStandardMaterial color="#475569" />
      </mesh>

      {/* Arm */}
      <group position={[0, 14, 0]}>
        <mesh castShadow>
          <boxGeometry args={[12, 1, 1]} />
          <meshStandardMaterial color="#475569" />
        </mesh>

        {/* Cables */}
        <mesh position={[-5, -4, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 8]} />
          <meshStandardMaterial color="#94A3B8" />
        </mesh>
      </group>
    </group>
  );
}

function Warehouse() {
  return (
    <group position={[15, 0, 0]}>
      {/* Main building */}
      <mesh castShadow>
        <boxGeometry args={[12, 8, 20]} />
        <meshStandardMaterial color="#94A3B8" />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 4.5, 0]} castShadow>
        <cylinderGeometry args={[8, 8, 2, 4]} rotation={[0, Math.PI / 4, 0]} />
        <meshStandardMaterial color="#64748B" />
      </mesh>

      {/* Loading dock */}
      <mesh position={[0, 0, 10.5]} castShadow>
        <boxGeometry args={[14, 1, 1]} />
        <meshStandardMaterial color="#475569" />
      </mesh>

      {/* Storage area for containers */}
      <group position={[-6, 0.5, 8]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Container
            key={`warehouse-${i}`}
            position={[i * 1.2 - 1.8, 0, 0]}
          />
        ))}
      </group>
    </group>
  );
}

function Beach() {
  return (
    <group position={[15, -2, 0]}>
      {/* Sand */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[50, 30]} />
        <meshStandardMaterial color="#FCD34D" />
      </mesh>

      {/* Palm trees */}
      {[[-8, 0, -5], [-6, 0, -8], [-10, 0, -7]].map((position, index) => (
        <group key={index} position={position as [number, number, number]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.2, 0.3, 4]} />
            <meshStandardMaterial color="#92400E" />
          </mesh>
          <group position={[0, 2, 0]}>
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh key={i} position={[Math.sin(i * Math.PI / 2), 0, Math.cos(i * Math.PI / 2)]} rotation={[0.3, i * Math.PI / 2, 0]} castShadow>
                <coneGeometry args={[1, 2]} />
                <meshStandardMaterial color="#15803D" />
              </mesh>
            ))}
          </group>
        </group>
      ))}
    </group>
  );
}

export function HeroScene() {
  const oceanRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (oceanRef.current) {
      oceanRef.current.material.uniforms.uTime.value = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[-10, 10, 30]} />
      
      <Environment preset="sunset" />
      
      {/* Atmospheric elements */}
      <Cloud position={[-10, 15, -10]} speed={0.2} opacity={0.5} />
      <Cloud position={[10, 12, -15]} speed={0.2} opacity={0.5} />

      {/* Scene elements */}
      <Float
        speed={1}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <CargoShip />
      </Float>

      <Crane />
      <Warehouse />
      <Beach />

      {/* Ocean */}
      <mesh
        ref={oceanRef}
        rotation-x={-Math.PI / 2}
        position-y={-2}
        receiveShadow
      >
        <planeGeometry args={[100, 100, 64, 64]} />
        <shaderMaterial
          uniforms={{
            uTime: { value: 0 },
            uColor: { value: new THREE.Color("#0EA5E9") },
            uDeepColor: { value: new THREE.Color("#0369A1") },
          }}
          vertexShader={`
            uniform float uTime;
            varying vec3 vPosition;
            varying float vElevation;
            
            void main() {
              vPosition = position;
              vec3 pos = position;
              float elevation = 
                sin(pos.x * 0.2 + uTime) * 
                sin(pos.z * 0.2 + uTime) * 0.5 +
                sin(pos.x * 0.4 + uTime * 2.0) * 
                sin(pos.z * 0.4 + uTime * 2.0) * 0.2;
              pos.y += elevation;
              vElevation = elevation;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 uColor;
            uniform vec3 uDeepColor;
            varying vec3 vPosition;
            varying float vElevation;
            
            void main() {
              float strength = (vElevation + 0.5) * 0.5;
              vec3 color = mix(uDeepColor, uColor, strength);
              gl_FragColor = vec4(color, 1.0);
            }
          `}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.5}
        color="#FDB813"
      />
    </>
  );
}