"use client";
import Container from "../UI/[container]/Container";
import Achievements from "./pages/Achievements/page";
import Banner from "./pages/Banner/page";
import Blog from "./pages/Blog/page";
import Contact from "./pages/Contact/page";
import Location from "./pages/Location/page";
import Portfolio from "./pages/Portfolio/page";
import Services from "./pages/Services/page";
import Testimonial from "./pages/Testimonial/page";


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
