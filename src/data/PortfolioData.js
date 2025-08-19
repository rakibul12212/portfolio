import { assets } from "@/assets";
import { GrTechnology } from "react-icons/gr";

export const PortfolioData = [
  {
    id: "E-Commerce",
    image1: assets.portfolio.ec1,
    image2: assets.portfolio.ec2,
    image3: assets.portfolio.ec3,
    text: "E-Commerce App",
    name: "E-Commerce",
    page: "/portfolio",
    Technology: ["React", "Next.js", "tailwind CSS", "Rest API", "Swiper"],
    github: "https://github.com/rakibul12212/e-commerce",
    demo: "https://web-ecommerc-client.vercel.app/",
    description:
      "A modern ecommerce web application built with Next.js, React, and Tailwind CSS. Fast, responsive, and ready for your online store. It features dynamic product listings, cart management, and a secure checkout flow. Designed with scalability and clean UI/UX for a seamless shopping experience",
  },
  {
    id: "Medicare",
    image1: assets.portfolio.mc1,
    image2: assets.portfolio.mc2,
    image3: assets.portfolio.mc3,
    text: "HealthCare App",
    name: "Medicare",
    page: "/portfolio",
    Technology: ["React", "Next.js", "tailwind CSS", "Swiper"],
    github: "https://github.com/rakibul12212/medicare",
    demo: "https://medicare-ten-eta.vercel.app/",
    description:
      "A modern medical web application built with Next.js, React, and Tailwind CSS. Fast, secure, and responsive, designed to provide users with easy access to healthcare information and services. It features doctor profiles, appointment booking, health articles, and a clean user-friendly interface for a smooth experience",
  },
  {
    id: "MedicX",
    image1: assets.portfolio.mcm1,
    image2: assets.portfolio.mcm2,
    image3: assets.portfolio.mcm3,
    text: "HealthCare Management App",
    name: "MedicX",
    page: "/portfolio",
    Technology: ["React", "Next.js", "tailwind CSS", "Swiper", "Rechart"],
    github: "https://github.com/rakibul12212/MedicX",
    demo: "https://medic-x-beta.vercel.app/",
    description:
      "A modern healthcare management web application built with Next.js, React, and Tailwind CSS. Fast, secure, and responsive, designed to streamline hospital and patient management. It includes modules for appointments, doctors, billing, prescriptions, reports, and more. Built with scalability and intuitive UI/UX to deliver a seamless experience for patients, doctors, and administrators.",
  },
];
