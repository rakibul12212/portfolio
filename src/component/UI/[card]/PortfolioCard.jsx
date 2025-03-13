"use client";
import { PortfolioData } from "@/data/PortfolioData";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PortfolioCard = () => {
  const router = useRouter();
  return (
    <div className="px-0 md:px-20">
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
          1024: { slidesPerView: 2 },
        }}
      >
        {PortfolioData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => router.push(`/portfolio/${item.id}`)}
                className="rounded-md p-2 text-start cursor-pointer"
              >
                <Image
                  width={360}
                  height={320}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 sm:h-64 object-center rounded-md mb-4 transition-transform duration-300 ease-in-out"
                />
                <div className="flex flex-wrap gap-2 text-neutral-400 text-md sm:text-md font-semibold pt-2 mb-2">
                  <span className="group relative overflow-hidden inline-block">
                    <span className="block transition-all duration-300 group-hover:-translate-y-full">
                      {item.text}
                    </span>
                    <span className="absolute top-0 left-0 w-full block transition-all duration-300 translate-y-full group-hover:translate-y-0">
                      {item.text}
                    </span>
                  </span>
                </div>

                <Link
                  href="/portfolio"
                  className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                >
                  {item.name}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PortfolioCard;
