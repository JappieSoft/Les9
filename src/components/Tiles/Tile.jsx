function Tile({img, title, children}) {
    let showIMG;
    if (img > "") {
        showIMG = <img src={img} alt={title}/>
    } else {
        showIMG = ""
    }

    return (
        <section>
            {showIMG}
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Tile;