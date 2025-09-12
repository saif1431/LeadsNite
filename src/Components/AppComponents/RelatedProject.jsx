"use client"

import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

function RelatedProject({ data }) {
  const navigate = useNavigate()

  return (
    <div 
    className="mt-28 relative">
      <h2 className="lg:text-4xl text-2xl mt-6 mb-6 font-bold text-center">Related Projects</h2>

      <div className="relative ">
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev  hidden lg:flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">

        </div>

        <div className="swiper-button-next  hidden lg:flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 2500, // 2.5 seconds
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper  h-[600px]"
        >
          {data.relatedProjects.map((relatedProject) => (
            <SwiperSlide key={relatedProject.id}>
              <div className="flex flex-col rounded-xl items-start shadow-lg py-6 gap-4 h-[550px]"> {/* Reduced py-12 to py-6 */}
                <img
                  className="rounded-md w-full object-cover"
                  src={relatedProject.image || "/placeholder.svg"}
                  alt={relatedProject.title}
                  style={{ height: "350px", objectFit: "cover" }} // Set a fixed height for images
                />
                <div className="px-6 space-y-4 w-full">
                  <h3 className="text-2xl font-semibold">{relatedProject.title}</h3>
                  <button
                    className="btn font-semibold"
                    onClick={() => {
                      window.scrollTo(0, 0)
                      navigate(`/app-projects/${relatedProject.id}`)
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default RelatedProject
