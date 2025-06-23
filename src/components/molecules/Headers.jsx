import Name from "../atoms/Name";
import Dropdown from "../atoms/Dropdown";
function Headers() {
  return (
    <>
      <div className="w-screen flex  p-4 items-center flex-row justify-between">
        <Name />
        <Dropdown />
      </div>
    </>
  );
}

export default Headers;
