import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ setselectionOeuvre }) {
    function handleClick() {
    console.log("Sculpture sélectionnée");
        setselectionOeuvre("sculpture");
    }

    function handleClick2() {
        setselectionOeuvre("peinture");
    }

    return (
        <header>
            <section className="headerGauche">
                <h1>Marie Dufaye</h1>
                <h3>Artiste peintre</h3>
            </section>
            <section className="headerDroite">
                <ul>
                    <li><Link to="/parcours">Parcours</Link></li>
                    <li id="headerOeuvres">
                        <Link to="/oeuvres">Oeuvres</Link>
                            <div className="menuOeuvres">
                                <p onClick={handleClick}>Sculptures</p>
                                <p onClick={handleClick2}>Peintures</p>
                            </div>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </section>
        </header>
    )
}

Header.propTypes =  {
    setselectionOeuvre: PropTypes.func,
};

export default Header;