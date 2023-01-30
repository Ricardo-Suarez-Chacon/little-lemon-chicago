import { Routes, Route, Link } from "react-router-dom";
const Nav = () => {

    return(
        <nav className='App-nav' >
            <menu>
                <li>
                    <Link className="links" to="/">Home</Link>
                </li>
                <li>
                    <Link className="links" to="/About">About</Link>
                </li>
                <li>
                    <Link className="links" to="/Menu">Menu</Link>
                </li>
                <li>
                    <Link className="links" to="/Reservations">Reservations</Link>
                </li>
                <li>
                <Link className="links" to="/OrderOnLine">Order online</Link>
                </li>
                <li>
                    <Link className="links"  to="/Login">Login</Link>
                </li>
            </menu>
        </nav>
    )
}
export default Nav