"use client";
import { FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TestimonialData } from "@/data/TestimonialData";

const TestimonialCard = () => {
  return (
    <div className="bg-black text-white px-6 py-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        className="max-w-5xl mx-auto"
      >
        {TestimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="flex justify-end text-neutral-900">
                <FaQuoteRight size={80} />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-48 h-48 object-cover rounded-full border-4 border-neutral-700"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-1">
                    {testimonial.name}
                  </h2>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                    {testimonial.role}
                  </p>
                  <p className="italic text-lg text-gray-300 ">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 w-full h-[2px] bg-gray-700 relative">
                    <div className="h-full bg-gradient-to-r from-purple-500/40 to-blue-500/40 full" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
