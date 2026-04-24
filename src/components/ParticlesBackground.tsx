import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const particleCount = 50
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
    }))

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseDown = () => {
      mouseRef.current.active = true
    }

    const handleMouseUp = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = getComputedStyle(document.documentElement).backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current

      // Update and draw particles
      particles.forEach((p, i) => {
        // Apply velocity
        p.x += p.vx
        p.y += p.vy

        // Bounce off walls
        if (p.x - p.radius < 0 || p.x + p.radius > canvas.width) p.vx *= -1
        if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) p.vy *= -1

        // Keep in bounds
        p.x = Math.max(p.radius, Math.min(canvas.width - p.radius, p.x))
        p.y = Math.max(p.radius, Math.min(canvas.height - p.radius, p.y))

        // Repel from mouse or attract to mouse
        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          if (mouseRef.current.active) {
            // Attract to mouse when clicking
            const force = 0.5 / distance
            p.vx += (dx / distance) * force
            p.vy += (dy / distance) * force
          } else {
            // Repel from mouse otherwise
            const force = 1 / distance
            p.vx -= (dx / distance) * force
            p.vy -= (dy / distance) * force
          }
        }

        // Apply friction
        p.vx *= 0.99
        p.vy *= 0.99

        // Draw particle
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)
          if (dist < 150) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ pointerEvents: 'auto' }}
    />
  )
}
