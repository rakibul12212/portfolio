"use client";
import { assets } from "@/assets";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { SlSocialLinkedin, SlSocialGoogle } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import "./Banner.css";
import Container from "@/component/UI/[container]/Container";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Banner = () => {
  const { banner } = assets.images;

  const socialLinks = [
    {
      icon: SlSocialLinkedin,
      url: "https://www.linkedin.com/in/md-rakibul-islam-36582620b/",
    },
    {
      icon: SlSocialGoogle,
      url: "mailto:rakibulislamr83@gmail.com", // Or link to Google profile
    },
    {
      icon: SiGithub,
      url: "https://github.com/rakibul12212",
    },
  ];

  return (
    <section id="about">
      <Container className="px-0 md:px-20">
        <div className="w-full ">
          {/* Heading */}
          <div className="text-center py-10  md:py-10">
            <p className="text-outline font-bold text-3xl  md:text-7xl 2xl:text-8xl ">
              MD RAKIBUL ISLAM
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">
            {/* Left Section - Bio, Skills, Contact */}
            <div className="w-full lg:w-1/3 space-y-6">
              {/* Bio */}
              <div>
                <p className="font-semibold text-lg">BIOGRAPHY</p>
                <p className="text-neutral-400 pt-2">
                  Innovative Frontend Developer building sleek, responsive UIs
                  with Next Js, React, Tailwind, and javaScript. Passionate
                  about creating smooth, user-first digital experiences. Always
                  staying ahead of the latest trends.
                </p>
              </div>

              {/* Skills */}
              <div>
                <p className="font-semibold text-lg">SKILLS</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 pt-2 text-neutral-400">
                  {[
                    "React js",
                    "Next js",
                    "JavaScript",
                    "TypeScript",
                    "Express js",
                    "Node js",
                    "HTML",
                    "CSS",
                    "Git",
                    "REST API",
                  ].map((skill, idx) => (
                    <p key={idx} className="flex items-center text-sm ">
                      <BsDot size={24} /> {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact Icons */}
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
                alt="banner"
                width={500}
                height={500}
                className="rounded-md w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-cover"
              />
            </div>

            {/* Right Section - Stats */}
            <div className="flex flex-row lg:flex-col w-full lg:w-1/3 text-center lg:text-end space-x-6 lg:space-x-0 lg:space-y-8 sm:tracking-normal md:tracking-wide">
              {[
                { label: "Projects Done", end: 30, duration: 2, suffix: "+" },
                {
                  label: "Years of Experience",
                  end: 2,
                  duration: 4,
                  prefix: "0",
                },
                {
                  label: "Worldwide Clients",
                  end: 1,
                  duration: 6,
                  prefix: "0",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
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
