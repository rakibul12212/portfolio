import { assets } from "@/assets";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import Container from "../../Container";

const Banner = () => {
  const { banner } = assets.images;

  return (
    <Container>
      <div>
        <div>
          <p className="font-kalam font-bold text-5xl text-center py-20">
            MD RAKIBUL ISLAM
          </p>
        </div>
        <div className="flex items-center justify-between">
          {/* start */}
          <div>
            {/* first */}
            <div className="pb-4">
              <p className="font-semibold">BIOGRAPHY</p>
              <p className="max-w-78 py-4 text-neutral-400">
                Innovative Frontend Developer building sleek, responsive UIs
                with React, Tailwind, and TypeScript. Passionate about creating
                smooth, user-first digital experiences. Always staying ahead of
                the latest trends.
              </p>
            </div>
            {/* second */}
            <div className="max-w-78">
              <p className="font-semibold py-4">SKILLS</p>
              <p className="text-neutral-400 pb-2">Front End Development</p>
              <div className="grid grid-cols-3  text-neutral-400">
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>React js</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>Next js</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>JavaScript</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>TypeScript</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>Express js</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>Node js</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>HTML</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>CSS</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>Git</span>
                </p>
                <p className="flex items-center">
                  <BsDot size={30} />
                  <span>REST API</span>
                </p>
              </div>
            </div>
            {/* third */}
            <div className="pt-8">
              <p className="pb-4 font-semibold">CONTACT</p>
              <div className="flex items-center justify-baseline gap-4">
                <div className=" p-2  group bg-neutral-700 text-white  rounded-full flex items-center  hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform group-hover:scale-110">
                  <SlSocialLinkedin size={20} />
                </div>
                <div className=" p-2  group bg-neutral-700 text-white  rounded-full flex items-center  hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform group-hover:scale-110">
                  <SlSocialGoogle size={20} />
                </div>
                <div className=" p-2  group bg-neutral-700 text-white  rounded-full flex items-center  hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40 transition-all duration-300 transform group-hover:scale-110">
                  <SiGithub size={20} />
                </div>
              </div>
            </div>
          </div>
          {/* middle */}
          <div>
            <Image
              src={banner}
              alt="banner"
              width={400} // Specify width
              height={400}
              className="rounded-full" // Specify height
            />
          </div>
          {/* end */}
          <div className="max-w-64 text-end space-y-10">
            <div>
              <p className="font-semibold tracking-wide">Projects Done</p>
              <p className="text-6xl font-semibold">44</p>
            </div>
            <div>
              <p className="font-semibold tracking-wide">Years of Experience</p>
              <p className="text-6xl font-semibold">13+</p>
            </div>
            <div>
              <p className="font-semibold tracking-wide">Worldwide Clients</p>
              <p className="text-6xl font-semibold">01</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
