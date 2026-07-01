import Canvas from "../components/Canvas"
import Navbar from "../components/Navbar"
import smStoreImg from '../assets/Images/smStore.jpeg'
import Netflix from '../assets/Images/NETFLIX.png'
import '../styles/principal.css'
import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import '../styles/cards.css'

function Principal() {
  useEffect(() => {
    obtenerDatos()
  }, [])
  const [info, setInfo] = useState({})
  async function obtenerDatos() {
    try {
      const respuesta = await fetch("/utils/cards.json")
      const data = await respuesta.json()
      setInfo(data)
    } catch(error){
      console.error("No se pudo conectar con cards.json", error)
    }
  }
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
      <section className="cardContainer">
      <Cards
      title={info.title}
      subtitle={info.subtitle}
      carousel={info.movies}
      alt={info.alt}
      img={Netflix}

      ></Cards>
      </section>
    </Canvas>
  )
}

export default Principal