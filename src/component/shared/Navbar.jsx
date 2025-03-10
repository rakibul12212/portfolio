"use client";
import React, { useState } from "react";
import Container from "../UI/Container";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container className="text-white sticky top-0 z-10">
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-2xl font-bold">Rakib</p>
        </div>
        <div className="space-x-2 md:space-x-6 flex items-center  ps-5 md:ps-0 2xl:ps-0 ">
          <Link href="/">
            <button className="group bg-neutral-700 text-white px-3 py-1 rounded-full flex items-center  hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform group-hover:scale-110">
              <span className="relative overflow-hidden">
                <span className="block font-semibold transition-all duration-300 group-hover:font-semibold translate-y-0 group-hover:-translate-y-[100%]">
                  LET'S TALK
                </span>
                <span className="absolute top-0 left-0 w-full block font-semibold translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  LET'S TALK
                </span>
              </span>
              <span className="transition-all duration-300 transform group-hover:scale-200 group-hover:text-neutral-500">
                <BsDot size={30} />
              </span>
            </button>
          </Link>

          <button
            onClick={toggleMenu}
            className="group bg-white text-black px-3 py-1 rounded-full flex items-center  transition-all duration-300"
          >
            <span className="relative overflow-hidden">
              {/* Default text that animates on click */}
              <span
                className={`block font-semibold transition-all duration-300 ${
                  isMenuOpen ? "translate-y-[-100%]" : "translate-y-0"
                }`}
              >
                {isMenuOpen ? "CLOSE" : "MENU"}
              </span>

              {/* Text that appears after animation */}
              <span
                className={`absolute top-0 left-0 w-full block font-semibold transition-all duration-300 ${
                  isMenuOpen ? "translate-y-0" : "translate-y-[100%]"
                }`}
              >
                {isMenuOpen ? "CLOSE" : "MENU"}
              </span>
            </span>
            <span>
              <BsDot
                size={30}
                className="transition-all duration-300 transform group-hover:scale-200 group-hover:text-neutral-500"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Toggleable Menu Section */}
      {isMenuOpen && (
        <div className="bg-gradient-to-r from-purple-500/40 to-blue-500/40 opacity-70 backdrop-grayscale-200 w-[300px] ml-auto rounded-xl">
          <div className=" p-8">
            <ul className="space-y-5  ">
              <li>
                <Link href="/" className="block hover:underline">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/about" className="block hover:underline">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/services" className="block hover:underline">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:underline">
                  TESTIMONIALS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:underline">
                  BLOG
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:underline">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
