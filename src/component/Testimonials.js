import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import Testimonial from "../assets/images/testimonial.png";
import "../app.css";

const Testimonials = () => {
  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full md:h-96 bg-center bg-[100% auto] p-8">
      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <h3 className="testimonials">Testimonials</h3>
          <span className="w-20 h-1 bg-custom-green"></span>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Configure autoplay
          modules={[Pagination, Autoplay]} // Add Autoplay module
          className="mySwiper"
        >
          <SwiperSlide>
            <article className="flex flex-col justify-center items-center gap-4 mt-10 md:px-10 lg:px-20">
              <p className="testimonial-text">
                "I had the pleasure of collaborating with Ayokunnumi Omololu
                since our early days at Microverse, and I am consistently
                impressed by her dedication, creativity, and technical
                prowess.."
              </p>
              <div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-custom-green"
                    src={Testimonial}
                    alt="testimonials"
                  />
                  <div>
                    <h3 className="testimonial-name">
                      <span>Uzair </span>
                      <span className="text-custom-green">Manzoor</span>
                    </h3>
                    <p className="testimonial-work">Microverse</p>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="flex flex-col justify-center items-center mt-10 gap-4 md:px-10 lg:px-20">
              <p className="testimonial-text">
                "Working with Ayokunnumi Omololu has been a delightful
                experience. Her ability to handle complex problems and provide
                efficient solutions is commendable."
              </p>
              <div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-custom-green"
                    src={Testimonial}
                    alt="testimonials"
                  />
                  <div>
                    <h3 className="testimonial-name">
                      <span>John </span>
                      <span className="text-custom-green">Doe</span>
                    </h3>
                    <p className="testimonial-work">Tech Company</p>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
