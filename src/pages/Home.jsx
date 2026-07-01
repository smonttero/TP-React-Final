import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Canvas from '../components/Canvas'
import Navbar from '../components/Navbar'
import '../styles/home.css'
import smStoreImg from '../assets/Images/smStore.jpeg'

function Home() {
    const navigate = useNavigate();
    return (
        <Canvas clase ='centrador'>
            <div className="general">
                <div className="animacion">
                    <img className="imgHome" src={smStoreImg} alt="smstore"/>
                    <h2 className="work-sans homeTitle">BIENVENIDO A S<span className="letters-color">M</span> STORE</h2>
                    <div className="description">
                        <p className="work-sans">Bienvenido a S<span className="letters-color">M</span>STORE, somos tu vendedor de confianza de plataformas digitales, haz click en el botón para acceder a nuestro catálogo.</p>
                        <button onClick={() => navigate('/principal')} className="work-sans">Ingresar</button>
                    </div>
                </div>
            </div>
        </Canvas>
    )
}

export default Home