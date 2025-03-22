"use client";
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

const AnimateOnScroll = ({ children, direction = "up", delay = 0 }) => {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: 60 };
      case "down":
        return { x: 0, y: -60 };
      case "left":
        return { x: 60, y: 0 };
      case "right":
        return { x: -60, y: 0 };
      default:
        return { x: 0, y: 60 };
    }
  };

  const { x, y } = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <Container className="text-[#FFFFFF]">
      <AnimateOnScroll direction="up">
        <Banner />
      </AnimateOnScroll>
      <AnimateOnScroll direction="right" delay={0.1}>
        <Services />
      </AnimateOnScroll>
      <AnimateOnScroll direction="left" delay={0.2}>
        <Portfolio />
      </AnimateOnScroll>
      <AnimateOnScroll direction="up" delay={0.3}>
        <Achievements />
      </AnimateOnScroll>
      <AnimateOnScroll direction="right" delay={0.4}>
        <Testimonial />
      </AnimateOnScroll>
      <AnimateOnScroll direction="left" delay={0.5}>
        <Blog />
      </AnimateOnScroll>
      <AnimateOnScroll direction="up" delay={0.6}>
        <Contact />
      </AnimateOnScroll>
      <AnimateOnScroll direction="up" delay={0.2}>
        <Location />
      </AnimateOnScroll>
    </Container>
  );
};

export default HomePage;
