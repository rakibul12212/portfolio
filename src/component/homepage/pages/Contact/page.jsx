"use client";

import Container from "@/component/UI/[container]/Container";
import ContactInputs from "@/component/UI/[input]/ContactInputs";
import { FaRegCircle } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <Container className="px-4 md:px-10 lg:px-20  2xl:px-20 pt-20 py-10">
        {/* Header */}
        <div className="flex items-center gap-x-2 text-neutral-400 pb-2">
          <span>
            <FaRegCircle size={12} />
          </span>
          <p className="text-sm sm:text-base font-semibold">CONTACT</p>
        </div>

        {/* Title */}
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
            Let's
            <span className="ps-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-purple-500 to-blue-950 bg-clip-text text-transparent">
              Talk
            </span>
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between gap-y-8 md:gap-y-0 md:pr-64 2xl:pr-96 py-10">
          <div>
            <p className="text-sm sm:text-base font-semibold tracking-wider">
              EMAIL :
            </p>
            <p className="text-2xl sm:text-3xl font-semibold pt-2">
              rakibulislamr83@gmail.com
            </p>
          </div>
          <div>
            <p className="text-sm sm:text-base font-semibold tracking-wider">
              CALL :
            </p>
            <p className="text-2xl sm:text-3xl font-semibold pt-2">
              +880 17954 00372
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <ContactInputs />
      </Container>
    </section>
  );
};

export default Contact;



