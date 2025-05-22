function Product({bestSeller, newCollection, img, title, price}) {
    let showBest;
    if (bestSeller === true) {
        showBest = <span>Best seller</span>
    } else if (newCollection === true) {
        showBest = <span>New collection</span>
    } else {
        showBest = ""
    }

    return (
        <article>
            {showBest}
            <img src={img} alt={title}/>
            <p>{title}</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default Product;