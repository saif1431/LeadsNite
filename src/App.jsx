import React from 'react'
import Navbar from './ResuseableComponents/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import Footer from './ResuseableComponents/Footer'

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<HomePage />} />
  {/* <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} /> */}
</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default App
