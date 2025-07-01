import React from 'react'
import Navbar from './ResuseableComponents/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './ResuseableComponents/Footer'
import ServicePage from './pages/ServicePage'
import AboutUsPage from './pages/AboutUsPage'
import WebServices from './Components/ServiceComponents/WebServices/WebServices'
import MachineServices from './Components/ServiceComponents/MachineLearningServices.jsx/MachineServices'
import AppServices from './Components/ServiceComponents/AppServices/AppServices'
import VideoServices from './Components/ServiceComponents/VideoServices/VideoServices'
import GraphicsServices from './Components/ServiceComponents/GraphicsServices/GraphicsServices'
import DigitalServices from './Components/ServiceComponents/DigitalServices/DigitalServices'

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services" element={<ServicePage />} />
  <Route path="/about-us" element={<AboutUsPage />} />
  <Route path="/services/web-development" element={<WebServices />} />
  <Route path="/services/machine-learning" element={<MachineServices />} />
  <Route path="/services/app-development" element={<AppServices />} />
  <Route path="/services/video-editing" element={<VideoServices />} />
  <Route path="/services/graphic-designing" element={<GraphicsServices />} />
  <Route path="/services/digital-marketing" element={<DigitalServices />} />

</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default App
