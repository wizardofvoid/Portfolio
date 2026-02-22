import { useEffect, useRef, useCallback } from 'react'

export function useParticles(theme) {
    const canvasRef = useRef(null)
    const animRef = useRef(null)
    const particlesRef = useRef([])

    const COLORS = ['63,179,237', '183,148,244', '118,228,247', '246,135,179']

    const createParticle = useCallback((w, h) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.5 + 0.15,
    }), [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let w, h

        const resize = () => {
            w = canvas.width = window.innerWidth
            h = canvas.height = window.innerHeight
        }

        const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80

        const init = () => {
            resize()
            particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => createParticle(w, h))
        }

        const draw = () => {
            ctx.clearRect(0, 0, w, h)
            const ps = particlesRef.current

            ps.forEach(p => {
                p.x += p.vx
                p.y += p.vy
                if (p.x < -5) p.x = w + 5
                if (p.x > w + 5) p.x = -5
                if (p.y < -5) p.y = h + 5
                if (p.y > h + 5) p.y = -5
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
                ctx.fill()
            })

            for (let i = 0; i < ps.length; i++) {
                for (let j = i + 1; j < ps.length; j++) {
                    const dx = ps[i].x - ps[j].x
                    const dy = ps[i].y - ps[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(99,179,237,${0.08 * (1 - dist / 120)})`
                        ctx.lineWidth = 0.8
                        ctx.moveTo(ps[i].x, ps[i].y)
                        ctx.lineTo(ps[j].x, ps[j].y)
                        ctx.stroke()
                    }
                }
            }
            animRef.current = requestAnimationFrame(draw)
        }

        init()
        draw()

        const onResize = () => resize()
        window.addEventListener('resize', onResize, { passive: true })
        return () => {
            cancelAnimationFrame(animRef.current)
            window.removeEventListener('resize', onResize)
        }
    }, [createParticle])

    return canvasRef
}
