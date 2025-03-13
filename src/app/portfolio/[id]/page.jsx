import { PortfolioData } from "@/data/PortfolioData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Container from "@/component/UI/[container]/Container";

const PortfolioDetail = ({ params }) => {
  const project = PortfolioData.find((item) => item.id === params.id);

  if (!project)
    return <p className="text-center text-red-500">Project not found</p>;

  return (
    <Container>
      <div className="max-w-3xl mx-auto p-6">
        <Image
          src={project.image}
          alt={project.name}
          width={700}
          height={500}
          className="w-full h-80 object-center  rounded-lg mb-6"
        />
        <h1 className="text-white text-4xl font-bold mb-3">{project.name}</h1>
        <p className="text-neutral-500 text-lg mb-4">{project.text}</p>
        <p className="text-neutral-300 text-lg mb-4">{project.description}</p>
        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            className="bg-gray-900 font-semibold text-white px-4 py-2 rounded-full hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40"
          >
            <FaGithub className="inline mr-2 " />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="bg-white font-semibold text-black px-4 py-2 rounded-full  hover:bg-gradient-to-r from-purple-500/40 to-blue-500/40"
          >
            <FaExternalLinkAlt className="inline mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </Container>
  );
};

export default PortfolioDetail;
