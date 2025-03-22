"use client";

import Image from "next/image";
import { BsDot } from "react-icons/bs";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import Container from "@/component/UI/[container]/Container";
import { assets } from "@/assets";
import "./Banner.css";
import { skills, socialLinks, stats } from "@/data/BannerData";

const Counting = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Banner = () => {
  const { banner } = assets.images;

  return (
    <section id="about">
      <Container className="px-0 md:px-20">
        <div className="w-full">
          {/* Heading */}
          <div className="text-center py-10 md:py-10">
            <p className="text-outline font-bold text-3xl md:text-7xl 2xl:text-8xl">
              MD RAKIBUL ISLAM
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Section - Bio, Skills, Contact */}
            <div className="w-full lg:w-1/3 space-y-6">
              {/* Bio */}
              <div>
                <p className="font-semibold text-lg">BIOGRAPHY</p>
                <p className="text-neutral-400 pt-2">
                  Innovative{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                    Frontend Developer
                  </span>{" "}
                  building sleek, responsive UIs with Next.js, React, Tailwind,
                  and JavaScript. Passionate about creating smooth, user-first
                  digital experiences. Always staying ahead of the latest
                  trends.
                </p>
              </div>

              {/* Skills */}
              <div>
                <p className="font-semibold text-lg">SKILLS</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 pt-2 text-neutral-400">
                  {skills.map((skill, idx) => (
                    <p key={idx} className="flex items-center text-sm">
                      <BsDot size={24} /> {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="font-semibold text-lg pb-3">CONTACT</p>
                <div className="flex gap-4">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-700 text-white rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform hover:scale-110"
                    >
                      <item.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Section - Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <Image
                src={banner}
                alt="Rakibul Islam"
                width={500}
                height={500}
                className="rounded-md w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-cover"
              />
            </div>

            {/* Right Section - Stats */}
            <div className="flex flex-row lg:flex-col w-full lg:w-1/3 text-center lg:text-end space-x-6 lg:space-x-0 lg:space-y-8 sm:tracking-normal md:tracking-wide">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  variants={Counting}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                >
                  <p className="font-semibold text-xl">{item.label}</p>
                  <p className="text-4xl sm:text-6xl font-semibold pt-2">
                    <CountUp
                      end={item.end}
                      duration={item.duration}
                      prefix={item.prefix || ""}
                      suffix={item.suffix || ""}
                      enableScrollSpy
                      scrollSpyDelay={100}
                    />
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
