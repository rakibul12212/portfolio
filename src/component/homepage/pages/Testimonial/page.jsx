"use client";

import TestimonialCard from "@/component/UI/[card]/TestimonialCard";
import Container from "@/component/UI/[container]/Container";
import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <Container className="px-4 md:px-10 lg:px-16  2xl:px-10 pt-20 py-10">
        <TestimonialCard />
      </Container>
    </section>
  );
};

export default Testimonial;
