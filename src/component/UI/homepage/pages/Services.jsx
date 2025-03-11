"use client";
import { FaRegCircle } from "react-icons/fa";
import Container from "../../Container";
import ServiceCard from "../../ServiceCard";

const Services = () => {
  return (
    <Container className="px-0 md:px-20 py-20">
      {/* services header section */}
      <div>
        <div className="flex items-center gap-x-2 text-neutral-400 pb-2">
          <span>
            <FaRegCircle size={12} />
          </span>
          <p className="font-semibold ">SERVICES</p>
        </div>
        <p className="text-6xl font-bold tracking-wide">
          What I
          <span className="ps-2 text-6xl font-semibold bg-gradient-to-r from-purple-500 to-blue-950 bg-clip-text text-transparent">
            Do
          </span>
        </p>
      </div>
      {/* main content */}
      <div className="pt-10">
        <ServiceCard className="border-b-2 border-gradient-to-r from-purple-500/40 to-blue-500/40 " />
      </div>
    </Container>
  );
};

export default Services;
