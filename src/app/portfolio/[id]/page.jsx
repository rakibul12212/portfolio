import { PortfolioData } from "@/data/PortfolioData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

const PortfolioDetail = ({ params }) => {
  const project = PortfolioData.find((item) => item.id === params.id);

  if (!project)
    return <p className="text-center text-red-500">Project not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image
        src={project.image}
        alt={project.name}
        width={1000}
        height={500}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-3">{project.name}</h1>
      <p className="text-gray-600 text-lg mb-4">{project.text}</p>
      <div className="flex gap-4 mt-4">
        <a
          href={project.demo}
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <FaExternalLinkAlt className="inline mr-2" />
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          <FaGithub className="inline mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default PortfolioDetail;
