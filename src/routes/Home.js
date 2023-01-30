import Header from '../components/Header'
import Main from '../components/Main'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
    return(
        <>
          <div className='App-container'>
            <Header/>
            <Nav />
            <Main />
            <Footer />
          </div>
      </>
    )
}
export default Home