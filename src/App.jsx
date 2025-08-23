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
import ContactUs from './pages/ContactUs'
import Navbar from './ResuseableComponents/Navbar'
import ProjectNavbar from './ResuseableComponents/ProjectNavbar'
import Footer from './ResuseableComponents/Footer'
import { useLocation } from 'react-router-dom'
import AppDevelopmentPage from './pages/AppDevelopmentPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import MlPage from './pages/MlPage'
import ProjectDetail from './Components/AppComponents/ProjectDetail'

function Layout({ children }) {
  const location = useLocation();
  const showFirstNavbar = ["/", "/services", "/about-us", "/ContactUs", "/scrollhover","/services/web-development", "/services/machine-learning", "/services/app-development", "/services/video-editing", "/services/graphic-designing", "/services/digital-marketing"].includes(location.pathname);

  return (
    <>
      {showFirstNavbar ? <Navbar /> : <ProjectNavbar />}
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
          <Route path="/ScrollHover" element={<ScrollHover />} />
          <Route path="/ContactUs" element={<ContactUs padding="lg:px-38 px-4" />} />
          <Route path="/app-development" element={<AppDevelopmentPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/machine-learning" element={<MlPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
