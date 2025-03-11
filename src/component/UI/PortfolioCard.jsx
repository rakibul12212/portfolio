"use client";
import { PortfolioData } from "@/data/PortfolioData";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { HiArrowNarrowRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const PortfolioCard = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 ">
      <Swiper
        modules={[FreeMode, Navigation]}
        spaceBetween={16}
        freeMode={true}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {PortfolioData.map((item, index) => {
          const { image, text, name } = item;
          return (
            <SwiperSlide key={index}>
              <div className="rounded-md p-2 text-start">
                <Image
                  width={360}
                  height={320}
                  src={image}
                  alt={name}
                  className="w-full h-60 sm:h-64 object-cover rounded-xl mb-4"
                />
                <div className="flex flex-wrap gap-2 text-sm sm:text-md mb-2">
                  <span className="group relative overflow-hidden inline-block">
                    <span className="block transition-all duration-300 group-hover:-translate-y-full">
                      {text}
                    </span>
                    <span className="absolute top-0 left-0 w-full block transition-all duration-300 translate-y-full group-hover:translate-y-0">
                      {text}
                    </span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1">
                  {name}
                </h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PortfolioCard;
