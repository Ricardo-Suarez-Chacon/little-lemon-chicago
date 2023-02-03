import Header from '../components/Header'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
    return(
        <>
          <main className='App-container'>
            <Header/>
            <Nav />
            <section className='App-main'>
              <Hero />
              <Highlights />
              <Testimonials />
            </section>
            <Footer />
          </main>
      </>
    )
}
export default Home