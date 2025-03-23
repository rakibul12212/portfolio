"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

import Container from "../UI/[container]/Container";
import Achievements from "./pages/Achievements/page";
import Banner from "./pages/Banner/page";
import Blog from "./pages/Blog/page";
import Contact from "./pages/Contact/page";
import Location from "./pages/Location/page";
import Portfolio from "./pages/Portfolio/page";
import Services from "./pages/Services/page";
import Testimonial from "./pages/Testimonial/page";

// Scroll animation variants
const scrollVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

// Smooth scroll + animation section
const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={scrollVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // natural easing
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Container className="text-[#FFFFFF]">
      <AnimatedSection delay={0}>
        <Banner />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Services />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <Achievements />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <Testimonial />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <Blog />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <Contact />
      </AnimatedSection>
      <AnimatedSection delay={0.7}>
        <Location />
      </AnimatedSection>
    </Container>
  );
};

export default HomePage;
