import Name from "../atoms/Name";
import Dropdown from "../atoms/Dropdown";
import Menu from "../atoms/Menu";
function Navbars() {
  return (
    <>
      <div className="w-full flex  overflow-x-hidden p-8 items-center flex-row justify-between ">
        <Name />
        <Dropdown />
        <Menu />
      </div>
    </>
  );
}

export default Navbars;
