"use client";
import PortfolioCard from "@/component/UI/[card]/PortfolioCard";
import Container from "@/component/UI/[container]/Container";
import { FaRegCircle } from "react-icons/fa";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Portfolio = () => {
  return (
    <div className="bg-neutral-900 rounded-xl pb-12 sm:pb-8 md:pb-20">
      <Container className="px-4 sm:px-6 md:px-48 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="flex items-center gap-x-2 text-neutral-400 pb-2">
          <span>
            <FaRegCircle size={12} />
          </span>
          <p className="text-sm sm:text-base font-semibold">PORTFOLIO</p>
        </div>

        {/* Title */}
        <div>
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide leading-tight">
            Recent
            <span className="ps-2 text-3xl sm:text-4xl md:text-6xl font-semibold bg-gradient-to-r from-purple-500 to-blue-950 bg-clip-text text-transparent">
              Works
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-400 pt-2 max-w-full md:max-w-[500px]">
          Here are some of the projects I’ve designed and developed. From
          landing pages to full web applications, each one is built with modern
          tools, clean code, and a focus on great user experience.
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-6">
          <button className="prev-btn p-3 sm:p-4 bg-neutral-700 rounded-full hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform">
            <GrLinkPrevious />
          </button>
          <button className="next-btn p-3 sm:px-4 sm:py-2 bg-neutral-700 rounded-full hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform">
            <GrLinkNext />
          </button>
        </div>
      </Container>

      {/* Portfolio Cards */}

      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
