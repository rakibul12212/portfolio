import React from "react";
import Container from "../UI/[container]/Container";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="text-[#FFFFFF] py-10">
      <div className="flex items-center justify-center gap-1 tra">
        <FaRegCopyright />
        <p className="text-xl">{currentYear} rakib, All Rights Reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
