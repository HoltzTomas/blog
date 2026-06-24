"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function SphereCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.setClearColor(0x0a0a0a)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 2, 0.1, 200)
    camera.position.z = 5

    const sphereGeo = new THREE.IcosahedronGeometry(1.6, 4)
    const wireframe = new THREE.WireframeGeometry(sphereGeo)
    const lineMat = new THREE.LineBasicMaterial({ color: 0x4770ff })
    const wireMesh = new THREE.LineSegments(wireframe, lineMat)
    scene.add(wireMesh)

    const orbitCount = 80
    const orbitGeo = new THREE.BufferGeometry()
    const orbitPos = new Float32Array(orbitCount * 3)
    for (let i = 0; i < orbitCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.6 + Math.random() * 1.2
      orbitPos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      orbitPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      orbitPos[i * 3 + 2] = r * Math.cos(phi)
    }
    orbitGeo.setAttribute("position", new THREE.BufferAttribute(orbitPos, 3))
    const orbitMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 })
    const orbitDots = new THREE.Points(orbitGeo, orbitMat)
    scene.add(orbitDots)

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener("resize", resize)

    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }
    document.addEventListener("mousemove", onMouseMove)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      wireMesh.rotation.x += 0.003
      wireMesh.rotation.y += 0.005
      orbitDots.rotation.x -= 0.001
      orbitDots.rotation.y += 0.007
      wireMesh.rotation.x += mouseY * 0.01
      wireMesh.rotation.y += mouseX * 0.01
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      document.removeEventListener("mousemove", onMouseMove)
      renderer.dispose()
      sphereGeo.dispose()
      wireframe.dispose()
      lineMat.dispose()
      orbitGeo.dispose()
      orbitMat.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} />
}
