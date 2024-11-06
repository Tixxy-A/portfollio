import { PROJECTS } from "./Data";
import { motion } from "framer-motion";


function Projects() {
  const variantLeft=(del)=>({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1 , transition:{duration:0.5,delay:del-0.5}},
  })
  const variantRight=(del)=>({
    hidden:{x:100,opacity:0},
    visible:{x:0,opacity:1 , transition:{duration:0.5,delay:del-0.5}},
  })
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 mb-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, ind) => {
          return (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-wrap mb-10 justify-center"
              key={ind}
            >
              <motion.div variants={variantLeft(ind)} whileInView="visible" initial="hidden"  className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={300}
                  height={200}
                  alt="fuck"
                  className="rounded-xl"
                />
              </motion.div>
              <motion.div variants={variantRight(ind)} whileInView="visible" initial="hidden"
              className="w-full max-w-xl lg:w-3/4 py-3">
                <h2 className="mb-2 font-semibold">{project.title}</h2>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 rounded-xl text-sm bg-neutral-900 px-2 py-1 text-purple-800"
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
