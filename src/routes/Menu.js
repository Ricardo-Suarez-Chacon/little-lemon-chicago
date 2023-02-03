import Header from '../components/Header'
import Nav from '../components/Nav'
import MenuComp from '../components/MenuComp'
import Footer from '../components/Footer'

const Menu = () => {

    return(
        <>
        <main className='App-container'>
            <Header />
            <Nav />
            <MenuComp className='App-main'/>
            <Footer />
        </main>
        </>
    )
}
export default Menu