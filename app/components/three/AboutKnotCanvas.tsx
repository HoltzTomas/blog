"use client";

import { useEffect, useRef } from "react";

export default function AboutKnotCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    void import("three").then((THREE) => {
      if (cancelled || !canvasRef.current) {
        return;
      }

      const canvas = canvasRef.current;
      const parent = canvas.parentElement;

      if (!parent) {
        return;
      }

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: false,
        antialias: true,
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x0a0a0a, 1);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0a);

      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
      camera.position.z = 6;

      const knotGeometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 16);
      const knotMaterial = new THREE.MeshStandardMaterial({
        color: 0xc8f04a,
        roughness: 0.3,
        metalness: 0.6,
      });
      const knot = new THREE.Mesh(knotGeometry, knotMaterial);
      scene.add(knot);

      const lightA = new THREE.DirectionalLight(0xffffff, 1.5);
      lightA.position.set(5, 5, 5);
      scene.add(lightA);

      const lightB = new THREE.DirectionalLight(0xc8f04a, 0.5);
      lightB.position.set(-5, -5, 5);
      scene.add(lightB);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
      scene.add(ambientLight);

      let frameId = 0;
      let mouseX = 0;
      let mouseY = 0;

      const resize = () => {
        const width = parent.clientWidth;
        const height = parent.clientHeight;

        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const handlePointerMove = (event: PointerEvent) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      const renderFrame = () => {
        knot.rotation.x += 0.008 + mouseY * 0.001;
        knot.rotation.y += 0.012 + mouseX * 0.001;
        renderer.render(scene, camera);
      };

      const animate = () => {
        renderFrame();
        frameId = window.requestAnimationFrame(animate);
      };

      resize();
      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", handlePointerMove, { passive: true });

      if (prefersReducedMotion) {
        renderFrame();
      } else {
        animate();
      }

      cleanup = () => {
        window.cancelAnimationFrame(frameId);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", handlePointerMove);
        knotGeometry.dispose();
        knotMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
