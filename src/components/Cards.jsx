function Cards({img, title, carousel = [], subtitle, selector, alt}) {
    return (
        <div className="cardStructure">
            <div>
                <img src={img} alt={alt} />
            </div>
            <div className="insideCard">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div className="carousel">
                    <div className="group">
                        {carousel.map((movie) => (
                            <div key={movie} className={`content-carousel ${movie}`}></div>
                        ))}
                    </div>
                    <div className="group" aria-hidden>
                        {carousel.map((movie) => (
                            <div key={movie} className={`content-carousel ${movie}`}></div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="compras">
                <div>
                    <select name="Selecciona un plan" id="select-netflix">
                        <option selected disabled value="Selecciona un plan">Selecciona un plan</option>
                        <option value="Perfil extra $7.500">Perfil extra $7.800</option>
                    </select>
                </div>
                <div id="div-cart">
                    <button id="button-cart">
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Cards