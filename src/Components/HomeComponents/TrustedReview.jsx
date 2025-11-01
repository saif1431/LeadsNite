import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const TrustedReview = () => {
  const logos = [
    '/reviewImg/img1.webp',
    '/reviewImg/img2.webp',
    '/reviewImg/img3.webp',
    '/reviewImg/img4.webp',
    '/reviewImg/img5.webp',
    '/reviewImg/img6.webp',
    '/reviewImg/img7.webp',
    '/reviewImg/img8.webp',
    '/reviewImg/img9.webp',
    '/reviewImg/img10.webp',
    '/reviewImg/img11.webp',
    '/reviewImg/img12.webp',
    '/reviewImg/img13.webp',
    '/reviewImg/img14.webp',
    '/reviewImg/img15.webp',
    '/reviewImg/img16.webp',
    '/reviewImg/img17.webp',
    '/reviewImg/img18.webp',
    '/reviewImg/img19.webp',
    '/reviewImg/img20.webp', 
  ];

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="title font-satochi">
        <h1 className='title '>Trusted Reviews</h1>
      </div>

      <div className="relative mt-6 w-full py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 1, // Using 1ms delay for a continuous feel
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000} // Adjust this value to control the scroll speed
          breakpoints={{
            // On mobile, show fewer slides to avoid crowding
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // On tablet, show a bit more
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // On desktop, let it be auto or a fixed number
            1024: { // On desktop, show 3 slides
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1380: { // On desktop, show 3 slides
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} style={{ width: '570px', height: '300px' }}>
              <img
                src={logo}
                alt={`Review ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-contain border border-gray-300 rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedReview;