import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from './Home';
import AddMovie from './AddMovie';
import Contact from './Contact';
import NotFound from './NotFound';
import NavBar from './NavBar';
import './App.css';
import MovieRoute from './MovieRoute';
import Footer from './Footer';



function App() {
  return (
    <div className='App'>
     <NavBar/>
     
    
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/AddMovie" element={<AddMovie/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route exact path="/:id" element={<MovieRoute/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App

