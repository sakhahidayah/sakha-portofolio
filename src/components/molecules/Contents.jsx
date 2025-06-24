import Hello from "../atoms/Hello";
import Image from "../atoms/Image";
function Contents() {
  return (
    <>
      <div className="mt-20 p-10  flex flex-col  w-full gap-3">
        <Image/>
        <Hello />
      </div>
    </>
  );
}

export default Contents;
