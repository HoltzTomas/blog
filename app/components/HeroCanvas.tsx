"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200)
    camera.position.z = 50

    const count = 2000
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 120
      pos[i * 3 + 1] = (Math.random() - 0.5) * 120
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color: 0x0a0a0a, size: 0.4, sizeAttenuation: true })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

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
      points.rotation.y += 0.0005
      points.rotation.x += 0.0002
      camera.position.x += (mouseX * 6 - camera.position.x) * 0.03
      camera.position.y += (-mouseY * 4 - camera.position.y) * 0.03
      camera.lookAt(scene.position)
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      document.removeEventListener("mousemove", onMouseMove)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" />
}
