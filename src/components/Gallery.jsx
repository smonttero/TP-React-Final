function Gallery({ images }) {
    return (
        <div className="carousel">
            <div className="group">
                {images.map((img) => (
                    <div key={img} className={`content-carousel ${img}`}></div>
                ))}
            </div>
            <div className="group" aria-hidden>
                {images.map((img) => (
                    <div key={img} className={`content-carousel ${img}`}></div>
                ))}
            </div>
        </div>
    )
}

export default Gallery