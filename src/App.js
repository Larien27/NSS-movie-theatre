import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/index'
import MyReservations from './pages/my-reservations'
import PaymentGateway from './pages/payment-gateway'
import Registration from './pages/registration'
import SignIn from './pages/signin'
import Seats from './pages/seats'
import ReservationInfo from './pages/reservation-info'
import Summary from './pages/summary'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/my-reservations' element={<MyReservations/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/payment-gateway' element={<PaymentGateway/>}></Route>
          <Route path='/seats' element={<Seats/>}></Route>
          <Route path='/reservation-info' element={<ReservationInfo/>}></Route>
          <Route path='/summary' element={<Summary/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;