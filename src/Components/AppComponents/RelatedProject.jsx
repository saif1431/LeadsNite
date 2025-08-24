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
    className="mt-12 relative">
      <h2 className="text-2xl text-center mb-6 font-bold">Related Projects</h2>

      <div className="relative ">
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev  absolute flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
       
        </div>

        <div className="swiper-button-next absolute  flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {data.relatedProjects.map((relatedProject) => (
            <SwiperSlide key={relatedProject.id}>
              <div className="flex flex-col rounded-md items-start shadow-xl  py-12 gap-4 ">
                <img
                  className="rounded-md w-full object-cover"
                  src={relatedProject.image || "/placeholder.svg"}
                  alt={relatedProject.title}
                />
                <div className="px-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{relatedProject.title}</h3>

                  {/* Project Detail Link */}
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
