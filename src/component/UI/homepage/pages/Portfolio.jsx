"use client";
import Container from "../../Container";
import PortfolioCard from "../../PortfolioCard";
import { FaRegCircle } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

const Portfolio = () => {
  return (
    <div className="bg-neutral-900 rounded-xl">
      <Container className="px-0 md:px-48 py-20">
        <div className="flex items-center gap-x-2 text-neutral-400 pb-2">
          <span>
            <FaRegCircle size={12} />
          </span>
          <p className="font-semibold">SERVICES</p>
        </div>

        <div>
          <p className="text-6xl font-bold tracking-wide">
            Recent
            <span className="ps-2 text-6xl font-semibold bg-gradient-to-r from-purple-500 to-blue-950 bg-clip-text text-transparent">
              Works
            </span>
          </p>
        </div>

        <p className="text-neutral-400 pt-2 max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>

        {/* Buttons outside PortfolioCard */}
        <div className="flex gap-2 mt-6">
          <button className="prev-btn p-4 bg-neutral-700 rounded-full hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform ">
            <GrLinkPrevious />
          </button>
          <button className="next-btn px-4 py-2 bg-neutral-700 rounded-full hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform ">
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
