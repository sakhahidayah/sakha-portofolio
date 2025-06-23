import Name from "../atoms/Name";
import Dropdown from "../atoms/Dropdown";
import Menu from "../atoms/Menu";
function Navbars() {
  return (
    <>
      <div className="w-screen flex  p-8 border-y items-center flex-row justify-between ">
        <Name />
        <Dropdown />
        <Menu />
      </div>
    </>
  );
}

export default Navbars;
