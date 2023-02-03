import Header from '../components/Header'
import Nav from '../components/Nav'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

const BookingPage  = (props) => {


    return(
        <>  <main className='App-container'>
                <Header />
                <Nav />
                <BookingForm className='App-main' availableTimes={props.availableTimes} dispatch={props.dispatch}/>
                <Footer />
            </main>
        </>
    )
}
export default BookingPage