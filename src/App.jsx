import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Home from './components/home/home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/Services/Services';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />           
            <Route path='/services' element={<Services />} />           
        </Routes>
    </BrowserRouter>
  )
}

export default App
