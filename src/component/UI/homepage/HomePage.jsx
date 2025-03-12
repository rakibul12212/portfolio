"use client";
import Container from "../[container]/Container";
import Banner from "./pages/[Banner]/Banner";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";

const HomePage = () => {
  return (
    <Container className="text-[#FFFFFF]">
      <Banner />
      <Services />
      <Portfolio />
      <Achievements />
      <Testimonial />
      <Blog />
      <Contact />
      <Location />
    </Container>
  );
};

export default HomePage;
