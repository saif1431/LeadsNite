import { ArrowRight, Linkedin } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
// import { LiaLinkedin } from "react-icons/lia"

 function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#00A9E0"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="bg-[#00A9E0] overflow-y-hidden pt-16 pb-14 px-4 md:px-24">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left column */}
          <div className="flex items-center  md:items-start">
            <h2 className="text-white text-2xl font-semibold">Turn Your Startup into Success Story!</h2>
          </div>

          {/* Middle column - Quick Links */}
         
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
             <div>
              <h3 className="text-white text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Get In Touch</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@leadsnite.com" className="text-white hover:underline">
                    info@leadsnite.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923255176508" className="text-white hover:underline">
                    Phone: +92 325 5176508
                  </a>
                </li>
              </ul>
            </div>
          {/* Right column - Contact form */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-white mb-4">Join Us to remain update</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="flex-grow px-4 py-2 bg-white rounded-l-md focus:outline-none" />
              <button className="bg-blue-700 text-white p-2 rounded-r-md hover:bg-blue-800 transition-colors">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
       </div>
        </div>
      </div>

      {/* Bottom bar with social icons */}
      <div className="bg-black py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                       <FaLinkedin className="text-2xl " />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
