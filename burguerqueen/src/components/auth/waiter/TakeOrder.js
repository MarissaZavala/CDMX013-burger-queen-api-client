import ProductCard from "./ProductCard";
import '../../../stylesheets/TakeOrder.css';

function Menu() {
    return (
        <div className="menuContainer">
            <nav className="superiorNav">
                <img className="logo-logout" src={require("../../../images/logout.png")} alt="Logout" />
                <button className="logout-button">Logout</button>
                <img className="logo-waiter-layout" src={require("../../../images/queen.png")} alt="Logo" />
            </nav>
            <main className="menu">
                <section className="options-menu">
                    <button className="breakfast-button" type="submit" onClick={() => x()}>Breakfast</button>
                    <button className="lunch-dinner-button" type="submit" onClick={() => x()}>Lunch & dinner</button>
                    <div className="lineOne"></div>
                </section>
                <div className="product-card-container">
                    <ProductCard
                        id="1"
                        name="American Coffe"
                        price="$10.00"
                    />
                    <ProductCard
                        id="2"
                        name="Coffe with Milk"
                        price="$07.00"
                    />
                    <ProductCard
                        id="3"
                        name="Ham & cheese sandwich"
                        price="$10.00"
                    />
                    <ProductCard
                        id="4"
                        name="Natural juice"
                        price="$07.00"
                    />
                     </div>
                     <img className="logo-person" src={require("../../../images/person-pin.png")} alt="Person icon" />
                     <p className="waiter-name">Daenerys Targaryen</p>
            </main>

        </div>
    )
}

export default Menu;
