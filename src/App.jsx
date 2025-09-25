import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import AboutUsPage from './pages/AboutUsPage'
import WebServices from './Components/ServiceComponents/WebServices/WebServices'
import MachineServices from './Components/ServiceComponents/MachineLearningServices.jsx/MachineServices'
import AppServices from './Components/ServiceComponents/AppServices/AppServices'
import VideoServices from './Components/ServiceComponents/VideoServices/VideoServices'
import GraphicsServices from './Components/ServiceComponents/GraphicsServices/GraphicsServices'
import DigitalServices from './Components/ServiceComponents/DigitalServices/DigitalServices'
import ScrollHover from './ResuseableComponents/ScrollHover'
import Navbar from './ResuseableComponents/Navbar'
import Footer from './ResuseableComponents/Footer'
import AppDevelopmentPage from './pages/AppDevelopmentPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import MlPage from './pages/MlPage'
import ProjectDetail from './Components/AppComponents/ProjectDetail'
import WebCardDetail from './Components/WebComponent/WebCardDetail'
import ShowProject from './pages/ShowProject'
import MlProjectDetail from './Components/MlComponent/MlProjectDetail'
import ContactUs from './pages/ContactUs'


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services/web-development" element={<WebServices />} />
          <Route path="/services/ai-agents" element={<MachineServices />} />
          <Route path="/services/app-development" element={<AppServices />} />
          <Route path="/services/ui&ux-design" element={<VideoServices />} />
          <Route path="/services/SaaS-development" element={<GraphicsServices />} />
          <Route path="/services/mvp-development" element={<DigitalServices />} />
          <Route path="/ScrollHover" element={<ScrollHover />} />
          <Route path="/ContactUs" element={<ContactUs padding=" px-4" />} />
          <Route path="/app-development" element={<AppDevelopmentPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/Projects" element={<ShowProject />} />
          <Route path="/machine-learning" element={<MlPage />} />
        <Route path="/app-projects/:id" element={<ProjectDetail />} />
        <Route path="/web-projects/:id" element={<WebCardDetail />} />
        <Route path="/ml-projects/:id" element={<MlProjectDetail />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
