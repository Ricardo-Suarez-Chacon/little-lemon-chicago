import Logof from '../img/little-lemon-logo.png'
import Whatsapp from '../img/whatsapp.svg'
import Facebook from '../img/facebook.svg'
import Twitter from '../img/twitter.svg'
import Instagram from '../img/instagram.svg'
const Footer = () => {

    return(
        <>
        <div className='App-foot'>
            <div className='App-foot-logo'>
                <img src={Logof} alt='little lemon logo' />
            </div>
            <nav >
                <ul className='App-foot-ul'>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Menu</a>
                    </li>
                    <li>
                        <a>Reservations</a>
                    </li>
                    <li>
                        <a>OnLine Order</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                </ul>
            </nav>
            <section className='App-foot-contact'>
                <h2>Contact</h2>
                <p>Adress</p>
                <p>Phone</p>
            </section>
            <div className='App-foot-social'>
                <section >
                    <img className='App-foot-social-ico' src={Whatsapp} alt='Whatsapp logo' />
                    <img className='App-foot-social-ico' src={Facebook} alt='Facebook logo' />
                    <img className='App-foot-social-ico' src={Twitter} alt='Twitter logo' />
                    <img className='App-foot-social-ico' src={Instagram} alt='Instagram logo' />
                </section>
                <small>
                    <p>copyright © 2023 Little Lemon Chicago. All Rights Reserved </p>
                </small>
            </div>
            </div>
        </>
    )
}
export default Footer