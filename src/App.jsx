import React from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Nav from './Nav'
import { Routes,Route } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Service from './Routes/Service'
import Footer from './Routes/Footer'

const App = () => {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='*' element={<Home/>}></Route>
    </Routes>
    <Footer/>


   </>
   
  )
}

export default App
