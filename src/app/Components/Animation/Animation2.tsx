'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

export default function Animation2() {
  const mountRef = useRef<HTMLDivElement>(null)

  // Three.js background setup
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current?.appendChild(renderer.domElement)

    // Add subtle animated background (e.g. moving stars or particles)
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    for (let i = 0; i < 500; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(200)) // x
      vertices.push(THREE.MathUtils.randFloatSpread(200)) // y
      vertices.push(THREE.MathUtils.randFloatSpread(200)) // z
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    const material = new THREE.PointsMaterial({ color: 0x00ffc8, size: 1 })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    camera.position.z = 50

    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.y += 0.001
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Overlay for text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        {/* Name Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative text-5xl md:text-7xl font-extrabold text-white px-6 py-3"
        >
          <span className="relative z-10">Hari Joshi</span>
          {/* Double border effect */}
          <span className="absolute inset-0 border-2 border-[#00FFC8] rounded-xl animate-pulse" />
          <span className="absolute inset-1 border-2 border-white rounded-xl" />
        </motion.div>

        {/* Subtitle Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 text-xl md:text-3xl font-medium text-[#00FFC8]"
        >
          Full Stack Developer
        </motion.div>
      </div>
    </div>
  )
}