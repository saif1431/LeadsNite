import React from 'react';
import img from '/AboutImage/img7.png';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Only using Autoplay and Pagination

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // Only need pagination CSS

const testimonials = [
      
  {
    id: 1,
    name: "Heath",
    role: "Kitchen786 Owner",
    text: "As a startup we didn't have much resources to hire for marketing but Leadsnite came in handy when they offered free marketing service and lead my business growth. Thanks",
     image: "/AboutImage/man1.jpg",
  },
  {
    id: 2,
    name: "Eamon",
    role: "Real Estate Agent",
    text: "I didn't know much about making apps, but Leadsnite made it simple for me. They created a cool app for my business that everyone loves!",
    image: "/AboutImage/man2.jpg",
  },
  {
    id: 3,
    name: "Charles",
    role: "CafeNight Owner",
    text: "Leadsnite really helped us out as a new business. Their marketing skills brought in more customers",
     image: "/AboutImage/man3.png",
  },
  {
    id: 4,
    name: "Lachlan ",
    role: "Marketing Manager",
    text: "I don't know much about tech stuff, but Leadsnite made it easy for me to understand how they could help. They made my website better and got more people interested in what I do. I definitely recommend them!",
     image: "/AboutImage/man4.jpg",
  },
  {
    id: 5,
    name: "Marigold ",
    role: "E-commerce",
    text: "I wasn't sure about trying the free marketing service because I thought it might not be good. But I was wrong. At first, I just wanted help building my online store. Now, we've been working together for over a year!",
     image: "/AboutImage/man6.jpg",
  },
  {
    id: 6,
    name: "Juniper ",
    role: "Finance Manager",
    text: "Leadsnite is awesome with coding! They did machine learning stuff for my business and everything works smarter now.",
     image: "/AboutImage/man3.png",
  },
  {
    id: 7,
    name: "Elara ",
    role: "Travel Agency",
    text: "Leadsnite really helped us out as a new business. Their marketing skills brought in more customers",
     image: "/AboutImage/man7.jpg",
  },
];

function AboutTestimonial() {
  return (
    <div className='max-w-7xl mx-auto lg:px-8 px-4  py-24 flex items-center justify-between flex-col lg:flex-row'>
      <div className='lg:w-[25%] w-full mb-8 lg:mb-0'>
        <img src={img} alt="Testimonial illustration" className='w-full' />
      </div>
      
      <div className='lg:w-[50%] w-full relative'> {/* Added relative positioning */}
        <h1 className='lg:text-4xl text-2xl font-satochi text-start font-bold mb-8'>TESTIMONIAL</h1>
        
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            type: 'bullets',
            dynamicBullets: false,
          }}
          modules={[Autoplay, Pagination]}
          loop={true}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className='py-8 h-full'>
                <p className='lg:text-2xl text-lg text-primary mb-6'>
                  {testimonial.text}
                </p>
                <hr className='mb-6 h-[5px]' />
                <div className='flex items-start gap-2'>
                  <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full mr-4' />
                  <div>
                    <h3 className='font-bold lg:text-xl text-lg'>{testimonial.name}</h3>
                    <p className='text-gray-600'>{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
         {/* Custom pagination container */}
       <div className="absolute bottom-4 right-4 z-10">
  <div className="swiper-pagination-custom !flex gap-2 justify-end" />
</div>
      </div>
    </div>
  );
}

export default AboutTestimonial;