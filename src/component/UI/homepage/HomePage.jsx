"use client";

import Container from "../Container";
import Banner from "./pages/Banner";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const HomePage = () => {
  return (
    <Container className="text-[#FFFFFF]">
      <Banner />
      <Services />
      <Portfolio />
    </Container>
  );
};

export default HomePage;
