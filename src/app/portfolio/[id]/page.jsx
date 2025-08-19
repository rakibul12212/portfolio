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
      <div className=" py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         
          <div className="lg:col-span-1 rounded-md overflow-hidden shadow-lg group">
            <Image
              src={project.image1}
              alt={project.name}
              width={700}
              height={500}
              className="w-full h-full object-fit transform group-hover:scale-105 transition duration-500"
            />
          </div>

          
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-md overflow-hidden shadow-lg group">
              <Image
                src={project.image2}
                alt={project.name}
                width={700}
                height={350}
                className="w-full h-60 md:h-72 object-fit transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="rounded-md overflow-hidden shadow-lg group">
              <Image
                src={project.image3}
                alt={project.name}
                width={700}
                height={350}
                className="w-full h-60 md:h-72 object-fit transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-white text-4xl font-bold mb-3">{project.name}</h1>
          <p className="text-neutral-500 text-lg mb-4">{project.text}</p>
          <div>
            {Array.isArray(project.Technology) ? (
              <ol>
                {project.Technology.map((item) => (
                  <li className="uppercase font-semibold text-white bg-gradient-to-r from-purple-500/30 to-blue-500/40 px-8 py-1 rounded-xl inline-block w-fit mb-2 mr-2">
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <span className="uppercase font-semibold text-white bg-gradient-to-r from-purple-500/30 to-blue-500/40 px-8 py-1 rounded-xl inline-block w-fit mb-2 mr-2">
                {project.Technology}
              </span>
            )}
          </div>
          <p className="text-neutral-300 text-lg mb-4 max-w-3xl py-3">{project.description}</p>
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
      </div>
    </Container>
  );
};

export default PortfolioDetail;
