import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { landing } from './data.json'
import {Routes, Route} from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Booking from './views/Booking/Booking';
import Nosotros from './views/Nosotros/Nosotros';
import Services from './views/Services/Services';
import Contact from './views/Contact/Contact';

function App() {
  console.log(landing);

  return (
    <div className = 'App'>
      <Routes>
        <Route path = '/' element = {<Landing />}/>
        <Route path = '/booking' element = {<Booking />}/>
        <Route path = '/nosotros' element = {<Nosotros />}/>
        <Route path = '/services' element = {<Services />}/>
        <Route path = '/contact' element = {<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
