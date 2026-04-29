"use client";

import { useEffect, useRef } from "react";

export default function PostWaveCanvas() {
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
      camera.position.set(0, 2, 4);
      camera.lookAt(0, 0, 0);

      const gridResolution = 40;
      const gridGeometry = new THREE.BufferGeometry();
      const gridPositions = new Float32Array(gridResolution * gridResolution * 3);

      let pointer = 0;
      for (let x = 0; x < gridResolution; x += 1) {
        for (let z = 0; z < gridResolution; z += 1) {
          gridPositions[pointer] = (x / gridResolution - 0.5) * 8;
          gridPositions[pointer + 1] = 0;
          gridPositions[pointer + 2] = (z / gridResolution - 0.5) * 8;
          pointer += 3;
        }
      }

      gridGeometry.setAttribute("position", new THREE.BufferAttribute(gridPositions, 3));

      const gridMaterial = new THREE.PointsMaterial({
        color: 0xc8f04a,
        size: 0.06,
      });
      const grid = new THREE.Points(gridGeometry, gridMaterial);
      scene.add(grid);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      let frameId = 0;
      let time = 0;

      const resize = () => {
        const width = parent.clientWidth;
        const height = parent.clientHeight;

        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const renderFrame = () => {
        time += prefersReducedMotion ? 0.012 : 0.03;

        const positions = gridGeometry.attributes.position.array as Float32Array;
        let index = 0;

        for (let x = 0; x < gridResolution; x += 1) {
          for (let z = 0; z < gridResolution; z += 1) {
            positions[index + 1] =
              Math.sin((x / gridResolution) * Math.PI * 4 + time) * 0.3 +
              Math.sin((z / gridResolution) * Math.PI * 4 + time * 0.7) * 0.3;
            index += 3;
          }
        }

        gridGeometry.attributes.position.needsUpdate = true;
        grid.rotation.y += 0.002;
        renderer.render(scene, camera);
      };

      const animate = () => {
        renderFrame();
        frameId = window.requestAnimationFrame(animate);
      };

      resize();
      window.addEventListener("resize", resize);

      if (prefersReducedMotion) {
        renderFrame();
      } else {
        animate();
      }

      cleanup = () => {
        window.cancelAnimationFrame(frameId);
        window.removeEventListener("resize", resize);
        gridGeometry.dispose();
        gridMaterial.dispose();
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
