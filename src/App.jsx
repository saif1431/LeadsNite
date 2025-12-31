import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './ResuseableComponents/Navbar'
import Footer from './ResuseableComponents/Footer'

// Lazy load route components
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
const WebServices = lazy(() => import('./Components/ServiceComponents/WebServices/WebServices'))
const MachineServices = lazy(() => import('./Components/ServiceComponents/MachineLearningServices.jsx/MachineServices'))
const AppServices = lazy(() => import('./Components/ServiceComponents/AppServices/AppServices'))
const VideoServices = lazy(() => import('./Components/ServiceComponents/VideoServices/VideoServices'))
const GraphicsServices = lazy(() => import('./Components/ServiceComponents/GraphicsServices/GraphicsServices'))
const DigitalServices = lazy(() => import('./Components/ServiceComponents/DigitalServices/DigitalServices'))
const ScrollHover = lazy(() => import('./ResuseableComponents/ScrollHover'))
const ProjectDetail = lazy(() => import('./Components/AppComponents/ProjectDetail'))
const WebCardDetail = lazy(() => import('./Components/WebComponent/WebCardDetail'))
const ShowProject = lazy(() => import('./pages/ShowProject'))
const MlProjectDetail = lazy(() => import('./Components/MlComponent/MlProjectDetail'))
const ReviewPage = lazy(() => import('./pages/ReviewPage'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const NotFound = lazy(() => import('./pages/404Page'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>LeadsNite</title>
                <meta
                  name="description"
                  content="Our designers craft visually striking, user-focused interfaces that enhance engagement and reflect your brand's identity with clarity, beauty, and purpose."
                />
                <meta name="keywords" content="web design, web development, app development, UI/UX design, digital agency" />
              </Helmet>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          } />

          {/* Services Page */}
          <Route path="/services" element={
            <>
              <Helmet>
                <title>Our Services</title>
                <meta
                  name="description"
                  content="Complete digital solutions including web development, app development, AI agents, UI/UX design, SaaS and MVP development services."
                />
                <meta name="keywords" content="web development services, app development, AI solutions, SaaS development, MVP development" />
              </Helmet>
              <Navbar />
              <ServicePage />
              <Footer />
            </>
          } />

          {/* About Us Page */}
          <Route path="/about-us" element={
            <>
              <Helmet>
                <title>About Us</title>
                <meta
                  name="description"
                  content="We are a team of experts who love helping businesses grow. With years of experience in web development, app creation, and digital solutions."
                />
                <meta name="keywords" content="about leadsnite, our team, company story, expert developers" />
              </Helmet>
              <Navbar />
              <AboutUsPage />
              <Footer />
            </>
          } />

          {/* Reviews Page */}
          <Route path="/reviews" element={
            <>
              <Helmet>
                <title>Client Reviews</title>
                <meta
                  name="description"
                  content="See what our clients say about our work across various projects in web development, app development and digital solutions. Read authentic client reviews."
                />
                <meta name="keywords" content="client reviews, testimonials, customer feedback, project reviews" />
              </Helmet>
              <Navbar />
              <ReviewPage />
              <Footer />
            </>
          } />

          {/* Contact Us Page */}
          <Route path="/contact-us" element={
            <>
              <Helmet>
                <title>Contact Us</title>
                <meta
                  name="description"
                  content="Reach out via any of our channels. Phone +92 325 5175508. Get in touch for professional web development, app development and digital solutions."
                />
                <meta name="keywords" content="contact leadsnite, get quote, phone number, email contact" />
              </Helmet>
              <Navbar />
              <ContactUs padding=" px-4" />
              <Footer />
            </>
          } />

          {/* Projects Page */}
          <Route path="/Projects" element={
            <>
              <Helmet>
                <title>Our Projects</title>
                <meta
                  name="description"
                  content="Browse through our completed projects in web development, app development, and machine learning solutions. See our portfolio of successful projects."
                />
                <meta name="keywords" content="portfolio, projects, completed work, case studies, our work" />
              </Helmet>
              <Navbar />
              <ShowProject />
              <Footer />
            </>
          } />

          {/* Terms & Conditions Page */}
          <Route path="/terms-and-conditions" element={
            <>
              <Helmet>
                <title>Terms & Conditions - LeadsNite</title>
                <meta
                  name="description"
                  content="Read LeadsNite's Terms & Conditions governing the use of our digital solutions, web development, and app development services."
                />
                <meta name="keywords" content="terms and conditions, terms of service, legal, user agreement" />
              </Helmet>
              <Navbar />
              <TermsAndConditions />
              <Footer />
            </>
          } />

          {/* Privacy Policy Page */}
          <Route path="/privacy-policy" element={
            <>
              <Helmet>
                <title>Privacy Policy - LeadsNite</title>
                <meta
                  name="description"
                  content="Learn how LeadsNite collects, uses, and protects your personal information. Read our comprehensive Privacy Policy."
                />
                <meta name="keywords" content="privacy policy, data protection, personal information, GDPR" />
              </Helmet>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          } />

          {/* Other routes without specific meta tags (they'll use default) */}
          <Route path="/services/web-development" element={<><Navbar /><WebServices /><Footer /></>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/services/ai-agents" element={<><Navbar /><MachineServices /><Footer /></>} />
          <Route path="/services/app-development" element={<><Navbar /><AppServices /><Footer /></>} />
          <Route path="/services/ui&ux-design" element={<><Navbar /><VideoServices /><Footer /></>} />
          <Route path="/services/SaaS-development" element={<><Navbar /><GraphicsServices /><Footer /></>} />
          <Route path="/services/mvp-development" element={<><Navbar /><DigitalServices /><Footer /></>} />
          <Route path="/ScrollHover" element={<ScrollHover />} />
          <Route path="/app-projects/:slug" element={<><Navbar /><ProjectDetail /><Footer /></>} />
          <Route path="/web-projects/:slug" element={<><Navbar /><WebCardDetail /><Footer /></>} />
          <Route path="/ai-agents/:slug" element={<><Navbar /><MlProjectDetail /><Footer /></>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App