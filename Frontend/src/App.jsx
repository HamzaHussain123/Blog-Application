import React from 'react'
import Navbar from "../src/Components/Navbar.jsx"
import Home from './Components/Home.jsx'
import Footer from './Components/Footer.jsx'
import { Route, Routes, useLocation } from "react-router-dom"
import Blogs from "../src/Pages/Blogs.jsx"
// import About from '../src/Pages/About.jsx'
import Contact from '../src/Pages/Contact.jsx'
import Login from '../src/Pages/Login.jsx'
import Register from '../src/Pages/Register.jsx'
import Dashboard from '../src/Pages/Dashboard.jsx'
import Creators from '../src/Pages/Creators.jsx'
import { useAuth } from './Context/AuthProvider.jsx'

const App = () => {
  const location = useLocation()
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(location.pathname)



  return (
    <div className="content-wrapper">
      {!hideNavbarFooter && <Navbar />
      }
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs" element={<Blogs />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />


      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  )
}

export default App
