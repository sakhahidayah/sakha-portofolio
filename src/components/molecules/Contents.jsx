import Hello from "../atoms/Hello";
import Image from "../atoms/Image";
function Contents() {
  return (
    <>
      <div className="mt-20 p-14 border flex flex-col justify-center items-center w-full gap-3">
        <Image/>
        <Hello />
      </div>
    </>
  );
}

export default Contents;
