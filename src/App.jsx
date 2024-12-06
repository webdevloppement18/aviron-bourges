import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Register from './pages/Register'
import { Login } from './pages/Login'
import { Profil } from './pages/Profil'
import EspacesMembers from './pages/esMembers'
import PreClub from './pages/PreClub'
import Horairestarifs from './pages/Horairestarifs'
import StripeContainer from './stripe/StripeContainer'
import { CheckOutForm } from './stripe/CheckOutForm'
import Form from './pages/Form'


function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>     
       <Route path='/register' element={<Register/>}/>     
       <Route path='/login' element={<Login/>}/>     
       <Route path='/profile' element={<Profil/>}/>     
       <Route path='/membres' element={<EspacesMembers/>}/>     
       <Route path='/presentation' element={<PreClub/>}/>     
       <Route path='/horaires' element={<Horairestarifs/>}/>     
       <Route path='/payer' element={<StripeContainer/>}/>
       <Route path='/payement' element={<CheckOutForm/>}/>     
       <Route path='/formulaire' element={<Form/>}/>     

      </Routes>
     <Footer/> 
    </>
  )
}

export default App
