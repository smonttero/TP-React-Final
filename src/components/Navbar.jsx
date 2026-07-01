import { useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
    const navigate = useNavigate()
    const nav = document.querySelector('.container-nav');
let isScrolling;

window.addEventListener('scroll', () => {
  // 1. Mientras el usuario scrollea, ocultamos la barra
  nav.classList.add('nav-hidden');

  // 2. Limpiamos el temporizador en cada movimiento
  window.clearTimeout(isScrolling);

  // 3. Establecemos un temporizador que se ejecuta cuando el scroll para
  isScrolling = setTimeout(() => {
    // Cuando pasan 150ms sin movimiento, volvemos a mostrarla
    nav.classList.remove('nav-hidden');
  }, 200); // Puedes ajustar este tiempo (ms) a tu gusto
});
    return (
        <nav>
            <div className="container-nav">
                <div className="sm-nav">
                    <h2>S<span className="letters-color">M</span> STORE</h2>
                </div>
                <div className="nav-group">
                    <button onClick={()=> navigate("/")}>
                        HOME
                    </button>
                    <button onClick={()=> navigate("/principal")}>
                        PRINCIPAL
                    </button>
                    <button onClick={()=> navigate("/reclamos")}>
                        RECLAMOS
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar