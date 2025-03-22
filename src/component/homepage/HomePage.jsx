"use client";
import { useEffect, useState } from "react";
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

// Custom hook to detect scroll direction
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return scrollDirection;
};

// AnimateOnScroll component
const AnimateOnScroll = ({ children, delay = 0 }) => {
  const scrollDirection = useScrollDirection();

  const getOffset = () => {
    if (scrollDirection === "down") return { x: 0, y: 60 };
    if (scrollDirection === "up") return { x: 0, y: -60 };
    return { x: 0, y: 60 };
  };

  const { x, y } = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// Main Home Page
const HomePage = () => {
  return (
    <Container className="text-[#FFFFFF]">
      <AnimateOnScroll>
        <Banner />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <Services />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.2}>
        <Portfolio />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.3}>
        <Achievements />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.4}>
        <Testimonial />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.5}>
        <Blog />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.6}>
        <Contact />
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.7}>
        <Location />
      </AnimateOnScroll>
    </Container>
  );
};

export default HomePage;
