// components/ThreeCanvas.tsx

"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let animationFrameId: number;
    let particlesGeometry: THREE.BufferGeometry | null = null;

    const initThree = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 360 / 299, 0.1, 1000);
      camera.position.z = 5;

      // Utiliser WebGL
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: true,
      });

      renderer.setSize(360, 299);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Créer des particules/galaxie
      particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 2000;
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);

      // Couleurs inspirées de Vercel
      const color1 = new THREE.Color("#FF0000"); // Rouge
      const color2 = new THREE.Color("#00FF00"); // Vert
      const color3 = new THREE.Color("#0000FF"); // Bleu

      for (let i = 0; i < particlesCount * 3; i += 3) {
        // Distribution sphérique avec distorsion
        const radius = 2 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
        posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        posArray[i + 2] = radius * Math.cos(phi);

        // Interpolation de couleurs
        const mixFactor = Math.random();
        let color;
        if (mixFactor < 0.33) {
          color = color1.clone().lerp(color2, mixFactor / 0.33);
        } else if (mixFactor < 0.66) {
          color = color2.clone().lerp(color3, (mixFactor - 0.33) / 0.33);
        } else {
          color = color3.clone().lerp(color1, (mixFactor - 0.66) / 0.34);
        }

        colorArray[i] = color.r;
        colorArray[i + 1] = color.g;
        colorArray[i + 2] = color.b;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );
      particlesGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colorArray, 3)
      );

      // Utiliser un shader custom pour les particules
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        opacity: 0.8,
      });

      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );
      scene.add(particlesMesh);

      // Animation
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0005;
        particlesMesh.rotation.z += 0.0002;

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };

      animate();
    };

    initThree();

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        scene.clear();
      }
      if (particlesGeometry) {
        particlesGeometry.dispose();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-engine="three.js r184 webgpu"
      width="360"
      height="299"
      style={{ display: "block", width: 360, height: 299 }}
    />
  );
};

export default ThreeCanvas;
