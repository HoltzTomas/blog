"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function AboutCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.setClearColor(0x0a0a0a, 1)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a0a)

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200)
    camera.position.z = 6

    const knotGeo = new THREE.TorusKnotGeometry(1, 0.3, 128, 16)
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x4770ff,
      roughness: 0.3,
      metalness: 0.6,
      wireframe: false,
    })
    const knot = new THREE.Mesh(knotGeo, knotMat)
    scene.add(knot)

    const light1 = new THREE.DirectionalLight(0xffffff, 1.5)
    light1.position.set(5, 5, 5)
    scene.add(light1)
    const light2 = new THREE.DirectionalLight(0x4770ff, 0.5)
    light2.position.set(-5, -5, 5)
    scene.add(light2)
    scene.add(new THREE.AmbientLight(0xffffff, 0.2))

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
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    document.addEventListener("mousemove", onMouseMove)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      knot.rotation.x += 0.008
      knot.rotation.y += 0.012
      knot.rotation.x += mouseY * 0.005
      knot.rotation.y += mouseX * 0.005
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      document.removeEventListener("mousemove", onMouseMove)
      renderer.dispose()
      knotGeo.dispose()
      knotMat.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} />
}
