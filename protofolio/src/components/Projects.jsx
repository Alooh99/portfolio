import { projects } from "../constants";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black min-h-screen w-full flex flex-col items-center py-10 px-4"
    >
      <h1 className="font-lobster font-bold text-center text-[#FF4D00] text-4xl sm:text-7xl">
        Projects
      </h1>

      {/* Card Grid */}
      <div
        className="mt-12 grid gap-8 w-full max-w-6xl
                  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.id || `project-${idx}`}
            custom={idx}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.04 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-shadow
                       overflow-hidden flex flex-col p-6 space-y-4"
          >
            <img
              src={project.image}
              alt={project.title || "project image"}
              className="w-full h-[400px] object-contain rounded-lg"
            />
            <h2 className="sm:text-3xl text-2xl text-center font-slab text-[#FF4D00] ">
              {project.title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg font-sans text-center text-white leading-relaxed mx-auto max-w-[90%] sm:max-w-sm md:max-w-md">
              {project.description}
            </p>

            {project.icon && (
              <div className="flex justify-center flex-wrap gap-3 pt-2">
                {project.icon.map((icon, i) => (
                  <img
                    key={`${icon}-${i}`}
                    src={icon}
                    alt="tech icon"
                    className="w-7 h-7"
                  />
                ))}
              </div>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-[#FF4D00] underline underline-offset-4 hover:opacity-80"
              >
                Visit Website...
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
