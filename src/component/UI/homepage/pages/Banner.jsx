import { assets } from "@/assets";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { SlSocialLinkedin, SlSocialGoogle } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import Container from "../../Container";

const Banner = () => {
  const { banner } = assets.images;

  return (
    <Container>
      <div className="w-full">
        {/* Heading */}
        <div className="text-center py-10 sm:py-14 md:py-20">
          <p className=" font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
                with React, Tailwind, and TypeScript. Passionate about creating
                smooth, user-first digital experiences. Always staying ahead of
                the latest trends.
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
                  <p key={idx} className="flex items-center text-sm">
                    <BsDot size={24} /> {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact Icons */}
            <div>
              <p className="font-semibold text-lg pb-2">CONTACT</p>
              <div className="flex gap-4">
                {[SlSocialLinkedin, SlSocialGoogle, SiGithub].map(
                  (Icon, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-neutral-700 text-white rounded-full flex items-center justify-center hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon size={20} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Middle Section - Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src={banner}
              alt="banner"
              width={300}
              height={300}
              className="rounded-full w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-cover"
            />
          </div>

          {/* Right Section - Stats */}
          <div className="flex flex-row lg:flex-col w-full lg:w-1/3 text-center lg:text-end space-x-8 lg:space-x-0 lg:space-y-8">
            <div>
              <p className="font-semibold tracking-wide">Projects Done</p>
              <p className="text-4xl sm:text-5xl font-semibold">44</p>
            </div>
            <div>
              <p className="font-semibold tracking-wide">Years of Experience</p>
              <p className="text-4xl sm:text-5xl font-semibold">13+</p>
            </div>
            <div>
              <p className="font-semibold tracking-wide">Worldwide Clients</p>
              <p className="text-4xl sm:text-5xl font-semibold">01</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
