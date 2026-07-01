import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
    const navigate = useNavigate()

    useEffect(() => {
        const nav = document.querySelector('.container-nav')
        let isScrolling

        function handleScroll() {
            nav.classList.add('nav-hidden')
            window.clearTimeout(isScrolling)
            isScrolling = setTimeout(() => {
                nav.classList.remove('nav-hidden')
            }, 200)
        }

        window.addEventListener('scroll', handleScroll)

        // cleanup: se ejecuta si el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.clearTimeout(isScrolling)
        }
    }, [])

    return (
        <nav>
            <div className="container-nav">
                <div className="sm-nav">
                    <h2>S<span className="letters-color">M</span> STORE</h2>
                </div>
                <div className="nav-group">
                    <button onClick={() => navigate("/")}>
                        HOME
                    </button>
                    <button onClick={() => navigate("/principal")}>
                        PRINCIPAL
                    </button>
                    <button onClick={() => navigate("/reclamos")}>
                        RECLAMOS
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar