import { ArrowRight } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <div className="relative mt-24">
      {/* Wavy Top Shape */}
      <div className="w-full overflow-hidden absolute -top-24 z-0 rotate-180">
        <svg
          className="w-full h-32"
          viewBox="200 20 1200 280"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00A9E0"
            fillOpacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,213.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="relative bg-[#00A9E0] text-white pt-8 pb-14 px-4 md:px-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">
              Turn Your Startup into Success Story!
            </h2>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Projects</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
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
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
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

        {/* Bottom bar */}
       
      </footer>
       <div className=" bg-black py-4 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex justify-center">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
    </div>
  );
}

export default Footer;
