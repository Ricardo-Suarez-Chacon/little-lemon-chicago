import { Link } from "react-router-dom";
const Nav = () => {

    return(
        <nav className='App-nav' >
            <menu>
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/About">About</Link>
                    <Link className="links" to="/Menu">Menu</Link>
                    <Link className="links" to="/BookingPage">Reservations</Link>
                    <Link className="links" to="/OrderOnLine">Order online</Link>
                    <Link className="links"  to="/Login">Login</Link>
            </menu>
        </nav>
    )
}
export default Nav