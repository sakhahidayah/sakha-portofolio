import Calculator from "../atoms/Calculator";
import ChillHtml from "../atoms/ChillHtml";
import ChillMovie from "../atoms/ChillMovie";
import Comics from "../atoms/Comics";
import PortoReact from "../atoms/PortoReact";
import PortoVersionOne from "../atoms/PortoVersionOne";
import Todolist from "../atoms/Todolist";

function ProjectsGroup() {
  return (
    <>
      <div  className="transition duration-300 flex flex-col gap-10 lg:flex-row lg:flex-wrap justify-center">
        <ChillMovie />
        <Calculator />
        <Comics />
        <Todolist />
        <ChillHtml />
        <PortoVersionOne />
        <PortoReact />
      </div>
    </>
  );
}

export default ProjectsGroup;
