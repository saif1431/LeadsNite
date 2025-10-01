import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const TrustedReview = () => {
  const logos = [
    '/reviewImg/img1.png',
    '/reviewImg/img2.png',
    '/reviewImg/img3.png',
    '/reviewImg/img4.png',
    '/reviewImg/img5.png',
    '/reviewImg/img6.png',
    '/reviewImg/img7.png',
    '/reviewImg/img8.png',
    '/reviewImg/img9.png',
    '/reviewImg/img10.png',
    '/reviewImg/img11.png',
    '/reviewImg/img12.png',
    '/reviewImg/img13.png',
    '/reviewImg/img14.png',
    '/reviewImg/img15.png',
    '/reviewImg/img16.png',
    '/reviewImg/img17.png',
    '/reviewImg/img18.png',
    '/reviewImg/img19.png',
    '/reviewImg/img20.png', 
  ];

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="title">
        <h1>Trusted Reviews</h1>
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