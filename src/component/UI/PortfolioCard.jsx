"use client";
import { PortfolioData } from "@/data/PortfolioData";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioCard = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Category</p>
          <span className="text-xl font-semibold">Portfolio</span>
        </div>
        <div>
          <p className="text-base font-medium">Our Recent Projects</p>
          <p className="text-sm text-gray-500">Explore our latest works</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button className="prev-btn px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
            Previous
          </button>
          <button className="next-btn px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
            Next
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="p-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
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
            const { image, texts, name } = item;
            return (
              <SwiperSlide key={index}>
                <div className="rounded-md p-2 text-start ">
                  <Image
                    width={360}
                    height={320}
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <div className="text-neutral-500 flex flex-wrap gap-2 text-sm mb-2">
                    {texts.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>
                  <h2 className="text-lg font-semibold">{name}</h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioCard;
