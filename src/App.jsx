import React from 'react'
import Navbar from './ResuseableComponents/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './ResuseableComponents/Footer'
import ServicePage from './pages/ServicePage'
import AboutUsPage from './pages/AboutUsPage'

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services" element={<ServicePage />} />
  <Route path="/about-us" element={<AboutUsPage />} />

</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default App
