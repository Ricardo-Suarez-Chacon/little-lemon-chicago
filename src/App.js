
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Reservations from './routes/Reservations';
import OrderOnLine from './routes/OrderOnLine';
import Login from './routes/Login';


function App() {
  return (

    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/OrderOnLine' element={<OrderOnLine />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;