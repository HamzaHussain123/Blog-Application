import React from 'react'
import Navbar from "../src/Components/Navbar.jsx"
import Home from './Components/Home.jsx'
import Footer from './Components/Footer.jsx'
import { Route, Routes } from "react-router-dom"
import Blogs from "../src/Pages/Blogs.jsx"
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Dashboard from './Pages/Dashboard.jsx'

const App = () => {
  return (
    <div >
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
