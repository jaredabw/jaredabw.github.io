import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-4 flex flex-wrap lg:justify-center"
            initial={{ x: -100 * Math.pow(-1, index), opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: Math.sqrt(index + 1) }}
            viewport={{ once: true }}
          >
            <div className="w-1/4 lg:w-1/5">
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-xl w-full aspect-square object-cover"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 pl-4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 tracking-tight font-light">
                {project.description}
              </p>
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="inline-block mb-2 mt-0 mr-2 rounded cursor-default bg-pomp_and_power-700 px-2 py-1 text-sm font-medium text-dark_purple-300 hover:bg-pomp_and_power-800"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
