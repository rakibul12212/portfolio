"use client";
import { BlogData } from "@/data/BlogData";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { GoDotFill } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="px-0 md:px-20 ">
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
        {BlogData.map((item, index) => {
          const { image, role, name, date } = item;
          return (
            <SwiperSlide key={index}>
              <div className="rounded-md p-2 text-start">
                <Image
                  width={360}
                  height={320}
                  src={image}
                  alt={name}
                  className="w-full h-60 sm:h-64 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-md sm:text-md font-semibold pt-4 mb-4">
                  {/* first */}
                  <span className="group relative overflow-hidden inline-block">
                    <span className="block transition-all duration-300 group-hover:-translate-y-full">
                      {role}
                    </span>
                    <span className="absolute top-0 left-0 w-full block transition-all duration-300 translate-y-full group-hover:translate-y-0">
                      {role}
                    </span>
                  </span>
                  <GoDotFill className="text-neutral-500" />
                  {/* second */}
                  <span className="group relative overflow-hidden inline-block">
                    <span className="block transition-all duration-300 group-hover:-translate-y-full">
                      {date}
                    </span>
                    <span className="absolute top-0 left-0 w-full block transition-all duration-300 translate-y-full group-hover:translate-y-0">
                      {date}
                    </span>
                  </span>
                </div>

                <Link
                  href="/"
                  className="text-2xl sm:text-3xl md:text-xl font-semibold py-4 transition-all duration-300 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                >
                  {name}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BlogCard;
