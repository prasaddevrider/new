import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/home/Home"
import About from "./pages/about/About"

import Contact from "./pages/contact/Contact"
import Galary from "./pages/galary/Galary"
import Plans from "./pages/plans/Plans"
import Trainer from "./pages/trainers/Trainer"
import PagenotFound from "./pages/pagenotfound/PagenotFound"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './pages/services/SignUp';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/galary" element={<Galary/>}/>
       <Route path="/plans" element={<Plans/>}/> 
       <Route path="/services" element={<SignUp/>}/> 
       <Route path="/trainer" element={<Trainer/>}/>
       <Route path="*" element={<PagenotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
     

    </>
  )
}

export default App