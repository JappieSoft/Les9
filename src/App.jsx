import "./App.css"
import Button from "./components/Buttons/Button.jsx";
import Product from "./components/Products/Product.jsx";
import Tile from "./components/Tiles/Tile.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";


function App() {

    function toCollectionKlik() {
        console.log(`clicked to the collection button`);
    }

    function allBagsKlik() {
        console.log(`clicked all bags button`);
    }

    function preOrdersKlik() {
        console.log(`clicked pre-orders button`);
    }

    return (
        <>
            <header>
                <h1>Handbags & Purses</h1>
                <nav>
                    <Button disabled={false} title="to the collection" action={toCollectionKlik}/>
                    <Button disabled={false} title="shop all bags" action={allBagsKlik}/>
                    <Button disabled={true} title="pre-orders" action={preOrdersKlik}/>
                </nav>
            </header>

            <main>
                <Product bestSeller={true} newCollection={false} img={bag1} title="The handy bag"   price={400}/>
                <Product bestSeller={true} newCollection={false} img={bag2} title="The stylish bag" price={250}/>
                <Product bestSeller={false} newCollection={true} img={bag3} title="The simple bag"  price={300}/>
                <Product bestSeller={false} newCollection={true} img={bag4} title="The trendy bag"  price={150}/>
            </main>
            <footer>
                <Tile title="the Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi consequuntur delectus deleniti dolor doloribus dolorum ea enim eum ex, illum impedit iure laborum laudantium natus omnis optio praesentium quas reiciendis reprehenderit sequi tempore totam vel? Beatae dolorem excepturi hic laboriosam nam necessitatibus officiis rerum, totam unde. Error, numquam quis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius modi saepe sit tempore, ullam.</p>
                </Tile>
                <Tile img={brand} title="The Brand Image"/>
                <Tile img={ourStory} title="Our Story Image"/>
                <Tile title="Our Story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eos odit pariatur placeat possimus quia quidem rem similique, veritatis? Consectetur debitis dolore eligendi esse, in iure nisi nobis perspiciatis quae qui. Iusto, minus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deleniti doloremque enim ipsam itaque modi quod. A placeat sapiente sint.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
