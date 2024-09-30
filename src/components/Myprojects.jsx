import iconProject from "./../assets/images/icon-project.png";
import cvRight from "./../assets/images/chevron-right.png";

const Myprojects = () => {
  const projectList = [
    {
      id: "1",
      title: "TailwindCSS",
      description:
        "Rapidly build modern websites without ever leaving your HTML.",
    },
    {
      id: "2",
      title: "Maizzle",
      description: "Framework for Rapid Email Prototyping",
    },
    {
      id: "3",
      title: "Alpine.js",
      description: "Think of it like Tailwind for JavaScript.",
    },
    {
      id: "4",
      title: "PostCSS",
      description: "A tool for transforming CSS with JavaScript",
    },
  ];
  return (
    <div>
      <div className="container mx-auto">
        <div className="pb-16 lg:pb-20">
          <div className="flex items-center pb-6">
            <img src={iconProject} alt="icon story" />
            <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
              My Projects
            </h3>
          </div>

          {projectList.map((project) => (
            <div key={project.id}>
              <a
                href=" / "
                className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
              >
                <span className="w-9/10 pr-8">
                  <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                    {project.title}
                  </h4>
                  <p className="font-body font-light text-primary dark:text-white">
                    {project.description}
                  </p>
                </span>
                <span className="w-1/10">
                  <img src={cvRight} className="mx-auto" alt="chevron right" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
