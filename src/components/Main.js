import { Routes, Route, Link } from "react-router-dom";
import Hero from './Hero'
import Highlights from './Highlights'
import Testimonials from './Testimonials'



const Main = () => {

    return(
        
        <main className='App-main'>
            <Hero />
            <Highlights />
            <Testimonials />
        </main>
    )
}
export default Main