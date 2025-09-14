import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function AboutUsSection1() {
  const navigate = useNavigate()
  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "Machine Learning", path: "/services/machine-learning" },
    { name: "App Development", path: "/services/app-development" },
    { name: "Video Editing", path: "/services/video-editing" },
    { name: "Graphic Designing", path: "/services/graphic-designing" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
  ]

  return (
    <div className="max-w-7xl mx-auto  px-4  lg:py-32 py-16 ">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image with overlay */}
        <div className="relative flex flex-col gap-4">
          <div className="relative overflow-hidden">
            <img
              src="/AboutImage/img5.png"
              alt="Team working with futuristic technology and data visualizations"
              className="lg:w-[85%] h-4/4 object-cover"
            />

            {/* Experience overlay card */}
            <div className="lg:absolute mt-6 lg:mt-0 top-12 right-4 bg-[#0E1E2A] backdrop-blur-sm  px-12 py-8    text-white">
              <div className="counting text-8xl font-thin text-gray-200">05</div>
              <div className="text-lg font-bold">Years Experience</div>
            </div>
          </div>

          {/* Decorative chart bars */}
          <div className="absolute hidden  -bottom-4 left-[90%] lg:flex items-end gap-2">
            <div className="w-5 h-64 bg-[#2767FF] "></div>
            <div className="w-5 h-48 bg-[#C8C6FC] "></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold  mb-6">We Help Startups Shine</h2>

            <p className="text-primary font-semibold text-md leading-relaxed">
              We are a team of experts who love helping businesses grow. With our skills in coding, marketing, and
              business, we're here to support you. Whether you're just starting out or already established, we're
              committed to making sure you succeed. When you work with us, you're getting a partner dedicated to helping
              your business thrive.
            </p>
          </div>

          {/* Services list */}
          <div className="space-y-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between lg:justify-start  py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                onClick={() => navigate(service.path)}
              >
                <span className="hover:text-blue-400 transition ease-in duration-200 lg:w-[40%] font-bold text-lg">{service.name}</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

