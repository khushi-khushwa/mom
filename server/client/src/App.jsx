import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Service from './component/Service';
import Project from './component/Project';
function App() {


  return (
   <>
   
   <BrowserRouter>
  
   <Navbar/>
   
    <Routes>
   
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/project' element={<Project/>}/>
      
    </Routes>
    <ToastContainer />
   </BrowserRouter>
   
   </>
  )
}

export default App
