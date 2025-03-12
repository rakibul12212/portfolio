"use client";
import ServiceCard from "@/component/UI/[card]/ServiceCard";
import Container from "@/component/UI/[container]/Container";
import { FaRegCircle } from "react-icons/fa";


const Services = () => {
  return (
    <section id="services">
      <Container className="px-0 md:px-20 py-20">
        {/* services header section */}
        <div>
          <div className="flex items-center gap-x-2 text-neutral-400 pb-2">
            <span>
              <FaRegCircle size={12} />
            </span>
            <p className="text-sm sm:text-base font-semibold">SERVICES</p>
          </div>

          {/* Title */}
          <div>
            <p className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide leading-tight">
              What I
              <span className="ps-2 text-3xl sm:text-4xl md:text-6xl font-semibold bg-gradient-to-r from-purple-500 to-blue-950 bg-clip-text text-transparent">
                Do
              </span>
            </p>
          </div>
        </div>
        {/* main content */}
        <div className="pt-10">
          <ServiceCard className="border-b-2 border-gradient-to-r from-purple-500/40 to-blue-500/40 " />
        </div>
      </Container>
    </section>
  );
};

export default Services;
