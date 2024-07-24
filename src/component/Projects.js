import { PROJECTS } from "./Data";

function Projects() {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="mt-24 mb-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, ind) => {
          return (
            <a href={project.link} target='_blank' rel='noreferrer' className="flex flex-wrap mb-10 justify-center" key={ind}>
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={300}
                  height={200}
                  alt="fuck"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4 py-3">
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
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
