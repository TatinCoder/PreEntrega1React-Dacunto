import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css";

const NavBar = () => {
    return (
        <nav className="hero is-success">
            <div className="hero-body columns">
                <div  className="title column m-0 p-0">
                    <h3>Foreecomerce</h3>
                </div>
                <div className="subtitle column m-0 p-0">
                    <button>Botines</button>
                    <button className="ml-4 mr-4">Pantalones</button>
                    <button>Camisetas</button>
                </div>
                <div className="column m-0 p-0" >
                    <CartWidget />
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar