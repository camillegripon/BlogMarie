import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <section className="headerGauche">
                <h1>Marie Dufaye</h1>
                <h3>Artiste peintre</h3>
            </section>
            <section className="headerDroite">
                <ul>
                    <li><Link to="/parcours">Parcours</Link></li>
                    <li><Link to="/oeuvres">Oeuvres</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </section>
        </header>
    )
}

export default Header;