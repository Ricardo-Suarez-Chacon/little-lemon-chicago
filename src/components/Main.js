
import '../App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Menu from '../routes/Menu';
import BookingPage  from '../routes/BookingPage ';
import OrderOnLine from '../routes/OrderOnLine';
import Login from '../routes/Login';
import ConfirmedBookingPage from '../routes/ConfirmedBookingPage';
import { useReducer, useEffect } from 'react';
import { fetchAPI } from "../api/api";





export const updateTimes = (availableTimes , action ) => {
    const acti = Object.getOwnPropertyNames(action).toString()
    switch(acti){
        case 'date':
            availableTimes = fetchAPI(new Date(action.date))
            break;
        default:
    }
    return availableTimes
}

export const initializeTimes = () => {
    const date = new Date()
    return fetchAPI(date)
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
                    <Route path='/ConfirmedBookingPage' element={<ConfirmedBookingPage />} />
                    </Routes>
                </BrowserRouter>
            </>
          );
}
export default Main