import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import reviewData from '../ReviewsComponent/reviewData.json'


export default function AboutUsSection1() {
  const navigate = useNavigate()

  
  
  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "AI Agents", path: "/services/ai-agents" },
    { name: "App Development", path: "/services/app-development" },
    { name: "UI UX Design", path: "/services/ui&ux-design" },
    { name: "SaaS Development", path: "/services/SaaS-development" },
    { name: "MVP Development", path: "/services/mvp-development" },
  ]

  return (
    <div className="max-w-7xl mx-auto lg:px-8 px-4 lg:py-32 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image with overlay */}
        <div className="relative h-[100%] flex flex-col gap-4">
          <div className="relative lg:h-full overflow-hidden">
            {/* Blur placeholder */}

                <div className="lg:w-[85%]  bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded" />            
              <img
                src={reviewData.aboutImage.src}
                alt={reviewData.aboutImage.alt}
                loading="lazy"
                width={800}
                height={520}
                className={`lg:w-[85%] lg:h-full h-96  object-cover transition-all duration-500
                `}
              />

            {/* Experience overlay card */}
            <div className="lg:absolute mt-6 lg:mt-0 top-12 right-4 bg-[#0E1E2A] opacity-90 backdrop-blur-sm px-12 py-8 text-white">
              <div className="counting text-8xl font-thin text-gray-200">05</div>
              <div className="text-lg font-bold">Years Experience</div>
            </div>
          </div>

          {/* Decorative chart bars */}
          <div className="absolute hidden -bottom-0 left-[90%] lg:flex items-end gap-2">
            <div className="w-5 h-64 bg-primary"></div>
            <div className="w-5 h-48 bg-[#01abe470]"></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold font-satochi mb-6">We Help Startups Shine</h2>

            <p className="text-primary font-semibold text-md leading-relaxed">
              We are a team of experts passionate about helping businesses grow. By combining our skills in technology, design, and strategy, we guide startups and established companies alike, turning ideas into successful products. When you work with us, you get a partner dedicated to your growth and long-term success.
            </p>
          </div>

          {/* Services list */}
          <div className="space-y-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between lg:justify-start py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
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