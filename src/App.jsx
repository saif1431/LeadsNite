import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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
import ReviewPage from './pages/ReviewPage'

function App() {
  return (
    <BrowserRouter>
      {/* Home Page */}
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>LeadsNite - Professional Web Design & Development Services</title>
              <meta 
                name="description" 
                content="Our designers craft visually striking, user-focused interfaces that enhance engagement and reflect your brand's identity with clarity, beauty, and purpose." 
              />
              <meta name="keywords" content="web design, web development, app development, UI/UX design, digital agency" />
            </Helmet>
            <Navbar/>
            <HomePage />
            <Footer/>
          </>
        } />
        
        {/* Services Page */}
        <Route path="/services" element={
          <>
            <Helmet>
              <title>Our Services - LeadsNite | Web, App & AI Development</title>
              <meta 
                name="description" 
                content="Complete digital solutions including web development, app development, AI agents, UI/UX design, SaaS and MVP development services." 
              />
              <meta name="keywords" content="web development services, app development, AI solutions, SaaS development, MVP development" />
            </Helmet>
            <Navbar/>
            <ServicePage />
            <Footer/>
          </>
        } />
        
        {/* About Us Page */}
        <Route path="/about-us" element={
          <>
            <Helmet>
              <title>About Us - LeadsNite Team | Expert Developers & Designers</title>
              <meta 
                name="description" 
                content="We are a team of experts who love helping businesses grow. With years of experience in web development, app creation, and digital solutions." 
              />
              <meta name="keywords" content="about leadsnite, our team, company story, expert developers" />
            </Helmet>
            <Navbar/>
            <AboutUsPage />
            <Footer/>
          </>
        } />
        
        {/* Reviews Page */}
        <Route path="/reviews" element={
          <>
            <Helmet>
              <title>Client Reviews - LeadsNite | Customer Testimonials</title>
              <meta 
                name="description" 
                content="See what our clients say about our work across various projects in web development, app development and digital solutions. Read authentic client reviews." 
              />
              <meta name="keywords" content="client reviews, testimonials, customer feedback, project reviews" />
            </Helmet>
            <Navbar/>
            <ReviewPage />
            <Footer/>
          </>
        } />
        
        {/* Contact Us Page */}
        <Route path="/ContactUs" element={
          <>
            <Helmet>
              <title>Contact Us - LeadsNite | Get in Touch Today</title>
              <meta 
                name="description" 
                content="Reach out via any of our channels. Phone +92 325 5175508. Get in touch for professional web development, app development and digital solutions." 
              />
              <meta name="keywords" content="contact leadsnite, get quote, phone number, email contact" />
            </Helmet>
            <Navbar/>
            <ContactUs padding=" px-4" />
            <Footer/>
          </>
        } />
        
        {/* Projects Page */}
        <Route path="/Projects" element={
          <>
            <Helmet>
              <title>Our Projects - LeadsNite Portfolio | Completed Work</title>
              <meta 
                name="description" 
                content="Browse through our completed projects in web development, app development, and machine learning solutions. See our portfolio of successful projects." 
              />
              <meta name="keywords" content="portfolio, projects, completed work, case studies, our work" />
            </Helmet>
            <Navbar/>
            <ShowProject />
            <Footer/>
          </>
        } />

        {/* Other routes without specific meta tags (they'll use default) */}
        <Route path="/services/web-development" element={<><Navbar/><WebServices /><Footer/></>} />
        <Route path="/services/ai-agents" element={<><Navbar/><MachineServices /><Footer/></>} />
        <Route path="/services/app-development" element={<><Navbar/><AppServices /><Footer/></>} />
        <Route path="/services/ui&ux-design" element={<><Navbar/><VideoServices /><Footer/></>} />
        <Route path="/services/SaaS-development" element={<><Navbar/><GraphicsServices /><Footer/></>} />
        <Route path="/services/mvp-development" element={<><Navbar/><DigitalServices /><Footer/></>} />
        <Route path="/ScrollHover" element={<ScrollHover />} />
        <Route path="/app-development" element={<><Navbar/><AppDevelopmentPage /><Footer/></>} />
        <Route path="/web-development" element={<><Navbar/><WebDevelopmentPage /><Footer/></>} />
        <Route path="/machine-learning" element={<><Navbar/><MlPage /><Footer/></>} />
        <Route path="/app-projects/:id" element={<><Navbar/><ProjectDetail /><Footer/></>} />
        <Route path="/web-projects/:id" element={<><Navbar/><WebCardDetail /><Footer/></>} />
        <Route path="/ml-projects/:id" element={<><Navbar/><MlProjectDetail /><Footer/></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App