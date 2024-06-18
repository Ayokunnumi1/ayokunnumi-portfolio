import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "../app.css";
import { urlFor, client } from "../client";
import LoaderSpinner from "./LoaderSpinner";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
      setLoading(false);
      console.log(data)
    });
  }, []);

  return (
    <section className="bg-home-pg-bg-image bg-no-repeat bg-cover text-white w-full bg-center bg-[100% auto] p-8">
      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <h3 className="testimonials">Testimonials</h3>
          <span className="w-20 h-1 bg-custom-green"></span>
        </div>

        {loading ? (
          <LoaderSpinner />
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Configure autoplay
            modules={[Pagination, Autoplay]} // Add Autoplay module
            className="mySwiper"
          >
            {testimonials?.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <article className="flex flex-col justify-center items-center gap-4 mt-10 md:px-10 lg:px-20">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div>
                    <div className="flex flex-row justify-center items-center gap-4">
                      <img
                        className="w-8 h-8 rounded-full border-2 border-custom-green"
                        src={urlFor(testimonial.icon)}
                        alt="testimonials"
                      />
                      <div>
                        <h3 className="testimonial-name">
                          <span>{testimonial.firstName} </span>
                          <span className="text-custom-green">
                            {testimonial.surname}
                          </span>
                        </h3>
                        <p className="testimonial-work">
                          {testimonial.postion}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
