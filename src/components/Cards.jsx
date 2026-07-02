function Cards({
    img,
    title,
    carousel = [],
    subtitle,
    selector,
    alt,
    planes,
    colorTitle,
}) {
    return (
        <>
            <div className="cardStructure">
                <div>
                    <img src={img} alt={alt} />
                    <h2 className={colorTitle}>{title}</h2>
                </div>
                <div className="insideCard">
                    <h3>{subtitle}</h3>
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
                <div className="compras">
                    <div>
                        <select
                            name="Selecciona un plan"
                            className="select work-sans"
                            defaultValue="Selecciona un plan"
                        >
                            <option value="Selecciona un plan" disabled hidden>
                                Selecciona un plan
                            </option>
                            {planes.map((plan) => (
                                <option key={plan} value={plan}>
                                    {plan}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button className="buttonCart work-sans">Añadir al Carrito</button>
                    </div>
                </div>
            </div>
            <hr className="divisorCards" />
        </>
    );
}

export default Cards;
