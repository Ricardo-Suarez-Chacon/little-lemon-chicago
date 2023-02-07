import Header from '../components/Header'
import Nav from '../components/Nav'
import ConfirmedBooking from '../components/ConfirmedBooking'
import Footer from '../components/Footer'

const ConfirmedBookingPage  = (props) => {


    return(
        <>  <main className='App-container'>
                <Header />
                <Nav />
                <ConfirmedBooking/>
                <Footer />
            </main>
        </>
    )
}
export default ConfirmedBookingPage