import Canvas from "../components/Canvas"
import Navbar from "../components/Navbar"
import smStoreImg from '../assets/Images/smStore.jpeg'
import Netflix from '../assets/Images/NETFLIX.png'
import Disney from '../assets/Images/DISNEY.png'
import Prime from '../assets/Images/PRIME.jpeg'
import Hbo from '../assets/Images/HBO.jpeg'
import Paramount from '../assets/Images/PARAMOUNT.jpeg'
import '../styles/principal.css'
import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import '../styles/cards.css'
import '../styles/imgCarousel.css'
import Contact from "../components/Contact"
import useFetch from "../hooks/useFetch"
import '../responsive/principalResponsive.css'

const imagenes = {
  netflix: Netflix,
  disney: Disney,
  prime: Prime,
  hbo: Hbo,
  paramount: Paramount,
}

function Principal() {

  const info = useFetch("/utils/cards.json")

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
            <br />
            CATÁLOGO DE PRECIOS
            <br />
            <p className="update-text">Actualizado 30-06-2026</p>
          </h3>
        </header>
      </div>
      <section className="cardContainer">
        {info.map((card) => (
          <Cards
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            carousel={card.movies}
            alt={card.alt}
            img={imagenes[card.alt]}
            planes={card.planes}
            colorTitle={card.colorTitle}
          />
        ))}
      </section>
      <aside className="importantContainer">
        <div>
          <h3>IMPORTANTE</h3>
          <ul>
            <li>Garantía: por el tiempo contratado (en general 30 días según cada plan).</li>
            <li>Disponibilidad sujeta a stock y políticas de cada plataforma.</li>
            <li>Contacto: WhatsApp <span style={{color: "#25D366"}}>+54 9 11 3081 4363 </span> (SM Store)</li>
            <li>La renovación de una plataforma se consulta con 3 dias de anticipacipación.</li>
          </ul>
        </div>
      </aside>
      <hr className="divisorCards"/>
      <Contact></Contact>
      <button className="btnCart">
        <i className="fa-solid fa-cart-shopping" style={{color: "rgb(0, 0, 0)"}}></i>
        <span id="cartItemCount" style={{display:"none"}}>0</span>
      </button>
    </Canvas>
  )
}

export default Principal