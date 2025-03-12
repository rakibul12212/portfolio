"use client";

import Container from "../Container";
import Achievements from "./pages/Achievements";
import Banner from "./pages/Banner";
import Blog from "./pages/Blog";
import Location from "./pages/Location";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const HomePage = () => {
  return (
    <Container className="text-[#FFFFFF]">
      <Banner />
      <Services />
      <Portfolio />
      <Achievements />
      <Blog/>
      <Location />
    </Container>
  );
};

export default HomePage;
