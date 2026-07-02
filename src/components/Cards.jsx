import Gallery from "./Gallery";

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
                    <Gallery images={carousel} />
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
