import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animationFrame
    let width = window.innerWidth
    let height = window.innerHeight
    let particles = []

    const mouse = {
      x: 0,
      y: 0,
    }

    const createParticles = () => {
      const particleCount = width < 768 ? 50 : 120

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,

        z: Math.random(),

        size: Math.random() * 1.8 + 0.6,

        speedX: (Math.random() - 0.5) * 0.18,
        speedY: (Math.random() - 0.5) * 0.18,

        opacity: Math.random() * 0.5 + 0.15,
      }))
    }

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      createParticles()
    }

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX - width / 2) / width
      mouse.y = (event.clientY - height / 2) / height
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < -30) particle.x = width + 30
        if (particle.x > width + 30) particle.x = -30

        if (particle.y < -30) particle.y = height + 30
        if (particle.y > height + 30) particle.y = -30

        const depth = 0.4 + particle.z

        const parallaxX = mouse.x * 25 * particle.z
        const parallaxY = mouse.y * 25 * particle.z

        const x = particle.x + parallaxX
        const y = particle.y + parallaxY

        const radius = particle.size * depth

        ctx.beginPath()

        ctx.arc(
          x,
          y,
          radius,
          0,
          Math.PI * 2,
        )

        ctx.fillStyle = `rgba(
          139,
          92,
          246,
          ${particle.opacity * depth}
        )`

        ctx.shadowBlur = 10 * particle.z
        ctx.shadowColor = 'rgba(139, 92, 246, 0.7)'

        ctx.fill()

        ctx.shadowBlur = 0
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)

      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  )
}

export default ParticleBackground