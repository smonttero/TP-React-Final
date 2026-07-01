import Canvas from "../components/Canvas"
import Navbar from "../components/Navbar"
import smStoreImg from '../assets/Images/smStore.jpeg'
import '../styles/principal.css'


function Principal() {
  return (
    <Canvas clase='work-sans'>
      <Navbar></Navbar>
      <div className="centerHeader">
      <header className="headerclass">
        <div className="border-color-img">
          <img className="smstore" src={smStoreImg} alt="SM STORE" />
        </div>
        <h3>
          S<span className="letters-color">M</span> STORE
          <br/>
          CATÁLOGO DE PRECIOS
          <br/>
          <p className="update-text">Actualizado 30-06-2026</p>
        </h3>
      </header>
      </div>
    </Canvas>
  )
}

export default Principal