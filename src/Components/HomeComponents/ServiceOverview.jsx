import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    id: 1,
    title: "Machine Learning",
    description:
      "Simplifying the world of machine learning. We build intelligent systems, teach algorithms, and solve complex problems.",
    technologies: ["Python", "C++", "Java"],
    image: "/servicesImg/SliderImg1.png",
  },
  {
    id: 2,
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable insights. Our analytics solutions help you make data-driven decisions.",
    technologies: ["R", "Python", "Tableau"],
    image: "/servicesImg/SliderImg1.png",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to power your applications and services with maximum uptime.",
    technologies: ["AWS", "Azure", "Google Cloud"],
    image: "/servicesImg/SliderImg2.png",
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive security solutions and continuous monitoring.",
    technologies: ["Encryption", "Firewall", "Threat Detection"],
    image: "/servicesImg/SliderImg3.png",
  },
];

export default function ServiceOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full  px-4  lg:px-26 md:px-20 py-28">
      <div className=" px-4 max-w-7xl mx-auto h-full flex flex-col">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-8">Service Overview</h1>

        <div className="flex-1 relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: true 
            }}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-full w-full"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="h-full flex flex-col lg:flex-row items-start gap-8 py-14">
                  {/* Image Container */}
                  <div className="w-full lg:ml-10 images  rounded-4xl lg:w-[80%]">
                      <img
                        src={service.image}
                        alt={`${service.title} Illustration`}
                        className="w-full h-full rounded-4xl object-cover"
                      />
                    
                  </div>
                  
                  {/* Card Container - now part of the same slide */}
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {services.map((service) => (
             <div className="w-full lg:w-[40%] lg:absolute lg:left-[58%] lg:top-[75%] lg:transform lg:-translate-y-1/2 mt-4 lg:mt-0  z-40">
                    <div className="bg-white border-[#01ACE4] rounded-xl shadow-lg py-16 px-8 border">
                      <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                      <p className="text-gray-600 font-semibold text-lg mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.technologies.map((tech, techIndex) => (
                          <li key={techIndex} className="flex items-center">
                            <span className="h-3 w-3 rounded-full bg-blue-600 mr-3"></span>
                            <span className="text-gray-600 font-semibold text-lg">{tech}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
          ))}

          {/* Vertical pagination - right side */}
          <div className="absolute top-[10%] right-4 transform -translate-y-1/2 z-40">
            <div className="flex flex-col items-center space-y-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const swiperInstance = document.querySelector(".swiper")?.swiper;
                    if (swiperInstance) {
                      swiperInstance.slideTo(index);
                    }
                  }}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === activeIndex ? "bg-blue-600 h-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}