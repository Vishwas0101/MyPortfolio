import { PROJECTS } from "../constants/index";
export default function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Project</h2>
      <div>
        {PROJECTS.map((project, index) => {
          <div key={index} className="mt-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
