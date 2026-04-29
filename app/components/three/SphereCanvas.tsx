"use client";

import { useEffect, useRef } from "react";

export default function SphereCanvas() {
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
      renderer.setClearColor(0x0a0a0a);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
      camera.position.z = 5;

      const sphereGeometry = new THREE.IcosahedronGeometry(1.6, 4);
      const wireframe = new THREE.WireframeGeometry(sphereGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xc8f04a,
      });
      const wireMesh = new THREE.LineSegments(wireframe, lineMaterial);
      scene.add(wireMesh);

      const orbitCount = 80;
      const orbitGeometry = new THREE.BufferGeometry();
      const orbitPositions = new Float32Array(orbitCount * 3);

      for (let index = 0; index < orbitCount; index += 1) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 1.6 + Math.random() * 1.2;

        orbitPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
        orbitPositions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        orbitPositions[index * 3 + 2] = radius * Math.cos(phi);
      }

      orbitGeometry.setAttribute("position", new THREE.BufferAttribute(orbitPositions, 3));

      const orbitMaterial = new THREE.PointsMaterial({
        color: 0xf5f4f0,
        size: 0.05,
      });

      const orbitDots = new THREE.Points(orbitGeometry, orbitMaterial);
      scene.add(orbitDots);

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
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
      };

      const renderFrame = () => {
        wireMesh.rotation.x += 0.003 + mouseY * 0.005;
        wireMesh.rotation.y += 0.005 + mouseX * 0.005;
        orbitDots.rotation.x -= 0.001;
        orbitDots.rotation.y += 0.007;

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
        sphereGeometry.dispose();
        wireframe.dispose();
        lineMaterial.dispose();
        orbitGeometry.dispose();
        orbitMaterial.dispose();
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
