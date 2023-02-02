import Header from '../components/Header'
import Nav from '../components/Nav'
import MenuComp from '../components/MenuComp'
import Footer from '../components/Footer'

const Menu = () => {

    return(
        <>
        <main className='Menu-container'>
            <Header />
            <Nav />
            <MenuComp />
            <Footer />
        </main>
        </>
    )
}
export default Menu