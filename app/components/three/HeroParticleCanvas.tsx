"use client";

import { useEffect, useRef } from "react";

export default function HeroParticleCanvas() {
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
        alpha: true,
        antialias: true,
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
      camera.position.z = 50;

      const count = 2000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);

      for (let index = 0; index < count; index += 1) {
        positions[index * 3] = (Math.random() - 0.5) * 120;
        positions[index * 3 + 1] = (Math.random() - 0.5) * 120;
        positions[index * 3 + 2] = (Math.random() - 0.5) * 80;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0x0a0a0a,
        size: 0.4,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let mouseX = 0;
      let mouseY = 0;
      let frameId = 0;

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
        points.rotation.y += 0.0005;
        points.rotation.x += 0.0002;

        camera.position.x += (mouseX * 6 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 4 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

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
        geometry.dispose();
        material.dispose();
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
