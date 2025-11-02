import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeFollowMouse = (eyeX, eyeY) => {
    const angle = Math.atan2(mousePosition.y - eyeY, mousePosition.x - eyeX);
    const distance = Math.min(8, Math.hypot(mousePosition.x - eyeX, mousePosition.y - eyeY) / 30);
    return {
      transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`
    };
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating shapes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Animated 404 with eyes */}
        <div className="mb-8 relative inline-block">
          <h1 className="text-9xl md:text-[12rem] font-bold text-gray-900 relative">
            4
            <span className="inline-block relative mx-4">
              <span className="text-gray-900">0</span>
              {/* Eyes inside the 0 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-6">
                  <div className="w-6 h-6 bg-gray-900 rounded-full relative">
                    <div 
                      className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                      style={eyeFollowMouse(mousePosition.x, mousePosition.y)}
                    ></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-900 rounded-full relative">
                    <div 
                      className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                      style={eyeFollowMouse(mousePosition.x, mousePosition.y)}
                    ></div>
                  </div>
                </div>
              </div>
            </span>
            4
          </h1>
        </div>

        {/* Error message with icon */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <AlertCircle className="w-6 h-6 text-gray-700" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Page Not Found
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Oops! Looks like you've wandered into the digital wilderness. 
          The page you're looking for seems to have taken a coffee break.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to='/'
          
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            
            className="group flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:scale-105 transform"
          >
            <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
            Go Home
          </Link>
          
          <Link to='/' className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-105 transform">
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Link>
        </div>

      


      </div>
    </div>
  );
}