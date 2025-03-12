"use client";

import Container from "../Container";
import Achievements from "./pages/Achievements";
import Banner from "./pages/Banner";
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
      <Location />
    </Container>
  );
};

export default HomePage;
