"use client";

import Container from "../Container";
import Banner from "./pages/Banner";
import Services from "./pages/Services";

const HomePage = () => {
  return (
    <Container className="text-[#FFFFFF]">
      <Banner />
      <Services />
    </Container>
  );
};

export default HomePage;
