"use client";
import React, { useState } from "react";
import Container from "../UI/[container]/Container";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Container className="text-white bg-black sticky top-0 z-50">
      <div className="flex items-center justify-between py-4 relative">
        {/* Logo */}
        <div>
          <Link href="/" className="text-3xl font-extrabold tracking-wider">
            rakib.
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-2 md:space-x-6 ps-5 md:ps-0">
          {/* Let's Talk Button */}
          <Link href="/#contact">
            <button className="group bg-neutral-700 text-white px-3 py-1 rounded-full flex items-center hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform group-hover:scale-110">
              <span className="relative overflow-hidden">
                <span className=" block font-semibold transition-all duration-300 group-hover:-translate-y-full">
                  LET'S TALK
                </span>
                <span className=" absolute top-0 left-0 w-full block font-semibold translate-y-full group-hover:translate-y-0 transition-all duration-300">
                  LET'S TALK
                </span>
              </span>
              <span className="hidden md:block 2xl:block transition-all duration-300 transform group-hover:scale-200 group-hover:text-neutral-500">
                <BsDot size={30} />
              </span>
            </button>
          </Link>

          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="group bg-white text-black px-3 py-1 rounded-full flex items-center transition-all duration-300"
          >
            <span className="relative overflow-hidden">
              <span
                className={`block font-semibold transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-full" : "translate-y-0"
                }`}
              >
                {isMenuOpen ? "CLOSE" : "MENU"}
              </span>
              <span
                className={`absolute top-0 left-0 w-full block font-semibold transition-all duration-300 ${
                  isMenuOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {isMenuOpen ? "CLOSE" : "MENU"}
              </span>
            </span>
            <span className="hidden md:block 2xl:block transition-all duration-300 transform group-hover:scale-200 group-hover:text-neutral-500">
              <BsDot size={30} />
            </span>
          </button>
        </div>

        {/* Toggleable Menu Floating (absolute positioned) */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-[300px] bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl z-50 shadow-lg md:opacity-70 opacity-100 md:backdrop-grayscale-200 backdrop-none">
            <div className="p-8">
              <ul className="space-y-5 text-white font-medium">
                <li>
                  <Link
                    href="/#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="block group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#portfolio"
                    onClick={() => setIsMenuOpen(false)}
                    className="block group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    onClick={() => setIsMenuOpen(false)}
                    className="block group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                  >
                    TESTIMONIALS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="block group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                  >
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                  >
                    CONTACT
                  </Link>
                </li>
                <li>
                  <a
                    href="/cv/MD_Rakibul_Isalm_Front-end Developer.pdf"
                    download
                    onClick={() => setIsMenuOpen(false)}
                    className="block group relative transition-all duration-300 hover:before:content-['→'] hover:before:mr-1"
                  >
                    DOWNLOAD CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
