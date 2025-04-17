'use client';

import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, {Suspense, useMemo, useRef} from 'react';
import {Group, TextureLoader} from 'three';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import styles from "@/app/three/r2gscene.module.css";
import * as THREE from "three";

const Model = () => {
    const ref = useRef<Group>(null);
    const { scene } = useGLTF('/r2gnew.glb');
    scene.rotation.set(1, 0, 0);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.z += 0.0001;
        }
    });

    return <primitive object={scene} ref={ref} />;
};

interface GridPlaneProps {
    texture1: THREE.Texture
    texture0: THREE.Texture
    position: [number, number, number]
}

const GridPlane: React.FC<GridPlaneProps> = ({ texture1, texture0, position }) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    const currentTexture = useRef(Math.random() > 0.5 ? texture1 : texture0)
    const opacity = useRef(Math.random())

    useFrame(() => {
        if (Math.random() < 0.01) {
            currentTexture.current = Math.random() > 0.5 ? texture1 : texture0
        }

        opacity.current += (Math.random() - 0.5) * 0.0005
        opacity.current = THREE.MathUtils.clamp(opacity.current, 0, 0.0075)

        if (meshRef.current) {
            meshRef.current.material.map = currentTexture.current
            ;(meshRef.current.material as THREE.MeshBasicMaterial).opacity = opacity.current
            meshRef.current.material.needsUpdate = true
        }
    })

    return (
        <mesh ref={meshRef} position={position}>
            <planeGeometry args={[0.1, 0.1]} />
            <meshBasicMaterial
                map={currentTexture.current}
                transparent
                opacity={opacity.current}
            />
        </mesh>
    )
}

const Grid: React.FC = () => {
    const texture1 = useLoader(TextureLoader, './bit1.png')
    const texture0 = useLoader(TextureLoader, './bit0.png')

    const grid = useMemo<[number, number, number][]>(() => {
        const rows = 30
        const cols = 60
        const spacing = 0.15
        const positions: [number, number, number][] = []

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                positions.push([
                    j * spacing - (cols * spacing) / 2,
                    i * spacing - (rows * spacing) / 2,
                    -5,
                ])
            }
        }

        return positions
    }, [])

    return (
        <>
            {grid.map((pos, idx) => (
                <GridPlane key={idx} position={pos} texture1={texture1} texture0={texture0} />
            ))}
        </>
    )
}


export default function R2GScene() {
    return (
        <div className={styles.renderBody}>
            <Canvas camera={{position: [0, 0, 13], fov: 10}}>
                <pointLight color="#fff" intensity={0.5} decay={0.5} position={[0, 15, 10]}/>
                <pointLight color="#fff" intensity={0.5} decay={0.5} position={[0, 15, -10]}/>
                <Suspense fallback={null}>
                    <Model/>
                    <Grid/>
                </Suspense>
                <EffectComposer>
                    <Noise opacity={0.25}/>
                    <Bloom intensity={1.0} luminanceThreshold={0.25} luminanceSmoothing={0.1}/>
                </EffectComposer>
                {/*<OrbitControls enableZoom={false} enablePan={false}/>*/}
            </Canvas>
        </div>
    );
}