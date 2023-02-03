import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutComp from '../components/AboutComp'
import Footer from '../components/Footer'


const About = () => {

    return(
        <>
            <main className='About-container'>
                <Header />
                <Nav />
                <AboutComp className='App-main'/>
                <Footer />
            </main>

        </>
    )
}
export default About