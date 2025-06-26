import ProjectsGroup from "../molecules/ProjectsGroup";

function Projects() {
  return (
    <>
      <div className=" flex flex-col  items-center justify-center mb-20">
        <h3 className="font-poppins text-2xl font-semibold mb-20">Project</h3>
        <ProjectsGroup />
      </div>
    </>
  );
}

export default Projects;
