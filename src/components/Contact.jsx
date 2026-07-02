

function Contact() {
  return (
    <footer>
        <section className="contactContainer">
            <h2 className="work-sans">Contactos</h2>
            <div className="contactIcons">
                    <a href="https://wa.me/message/SIONJ7EXUALGF1" style={{color: "transparent"}}>
                        <i className="fa-brands fa-whatsapp" style={{color: "rgb(25, 136, 42)"}}></i>
                    </a>
                    <a href="https://www.instagram.com/santtyy.ssj/" style={{color: "transparent"}}>
                        <i className="fa-brands fa-instagram gradient"></i>
                    </a>
                    <a href="https://discord.gg/VFEjzyws" style={{color: "transparent"}}>
                        <i className="fa-brands fa-discord" style={{color: "#5865f2"}}></i>
                    </a>
                </div>
        </section>
        <p>© SM Store. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Contact