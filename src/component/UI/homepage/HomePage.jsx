"use client";

import Container from "../Container";
import Achievements from "./pages/Achievements";
import Banner from "./pages/Banner";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const HomePage = () => {
  return (
    <Container className="text-[#FFFFFF]">
      <Banner />
      <Services />
      <Portfolio />
      <Achievements/>
    </Container>
  );
};

export default HomePage;
