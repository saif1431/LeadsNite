import { ArrowRight } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative mt-24">
      {/* Wavy Top Shape */}
      <div className="w-full overflow-hidden  z-0 rotate-180">

      </div>

      {/* Footer Content */}
      <footer className="relative py-12 bg-[#00A9E0] text-white px-4 md:px-24 z-10">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="lg:w-1/2 w-full mb-8 md:mb-0">
            <h2 className="text-xl font-semibold">
              Turn Your Startup into Success Story!
            </h2>
            <p className="text-sm lg:w-[70%] w-full mt-2">We build smart digital solutions that help businesses grow, from modern apps to powerful AI-driven platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:underline">Service</Link></li>
              {/* <li><Link to="#" className="hover:underline">Projects</Link></li> */}
              <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="/ContactUs" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
            <div>
            <h3 className="text-2xl font-bold mb-6">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="hover:underline">Web Development</Link></li>
              {/* <li><Link to="#" className="hover:underline">Projects</Link></li> */}
              <li><Link 
              onClick={() => window.scrollTo(0, 0)}
              to="/services/ai-agents" className="hover:underline">AI Agents</Link></li>
              <li><Link 
               onClick={() => window.scrollTo(0, 0)}
              to="/services/app-development" className="hover:underline">App Development</Link></li>
              <li><Link 
               onClick={() => window.scrollTo(0, 0)}
              to="/services/ui&ux-design" className="hover:underline">UI UX Design</Link></li>
              <li><Link  
               onClick={() => window.scrollTo(0, 0)}
              to="/services/SaaS-development" className="hover:underline">SaaS Development</Link></li>
              <li><Link  
               onClick={() => window.scrollTo(0, 0)}
              to="/services/mvp-development" className="hover:underline">MVP Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@leadsnite.com" className="hover:underline">
                  info@leadsnite.com
                </a>
              </li>
              <li>
                <a href="tel:+923255176508" className="hover:underline">
                  Phone: +92 325 5176508
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <p className="mb-4">Join Us to remain update</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 text-black bg-white rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-700 p-2 rounded-r-md hover:bg-blue-800 transition-colors">
                <ArrowRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
          </div>

        {/* Bottom bar */}
       
      </footer>
       <div className=" bg-black py-4 px-4 md:px-8">
          <div className="max-w-7xl space-x-4 mx-auto flex justify-center">
            <a target='_blank' href="https://www.linkedin.com/company/leadsnite/" className="text-white hover:text-gray-300 transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            {/* <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaInstagram 
 className="text-2xl" />
            </a> */}
            {/* <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaSquareXTwitter 
 className="text-2xl" />
            </a> */}
          </div>
        </div>
    </div>
  );
}

export default Footer;
