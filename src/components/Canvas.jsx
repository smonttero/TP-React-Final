import { useEffect, useRef } from 'react'
import '../styles/global.css'

export default function Canvas({ children , clase }) {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        let particles = []

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 1.5
                this.speedY = Math.random() * 0.7 + 0.1
                this.opacity = Math.random()
            }

            update() {
                this.y += this.speedY
                if (this.y > canvas.height) {
                    this.y = 0
                    this.x = Math.random() * canvas.width
                }
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        function init() {
            for (let i = 0; i < 200; i++) {
                particles.push(new Particle())
            }
        }

        let animationId
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.update()
                p.draw()
            })
            animationId = requestAnimationFrame(animate)
        }

        function handleResize() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        init()
        animate()

        // Cleanup: importante para evitar fugas de memoria
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <div>
            <div className="bg-container">
                <canvas ref={canvasRef} id="particleCanvas"></canvas>
                <div className="grid-overlay"></div>
            </div>
            <div className= {clase}> 
            {children}
            </div>
        </div>
    )
}