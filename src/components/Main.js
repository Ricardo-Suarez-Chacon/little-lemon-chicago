
import '../App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Menu from '../routes/Menu';
import BookingPage  from '../routes/BookingPage ';
import OrderOnLine from '../routes/OrderOnLine';
import Login from '../routes/Login';
import { useReducer } from 'react';




const updateTimes = (availableTimes , action ) => {
    console.log('action', action)
    console.log('dispponibles', availableTimes)
    return availableTimes
}

const initializeTimes = () => {
    let availableTimes = ['17:00','18:00','19:010','20:00','21:00','22:00']
    return availableTimes
}

const Main = () => {





    const [state, dispatch] = useReducer(updateTimes ,{},initializeTimes)
       // console.log(state)
    return(
            <>
                <BrowserRouter>
                    <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/BookingPage' element={<BookingPage availableTimes={state} dispatch={dispatch}/>} />
                    <Route path='/OrderOnLine' element={<OrderOnLine />} />
                    <Route path='/Login' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </>
          );
}
export default Main