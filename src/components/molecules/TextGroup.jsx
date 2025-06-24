import Hello from "../atoms/Hello";
import Image from "../atoms/Image";
import Introduction from "../atoms/Introduction";
import Buttons from "../atoms/Buttons";
Introduction
function TextGrop() {
  return (
    <>
      <div className="p-10 lg:p-16  overflow-x-hidden  flex flex-col  w-full  gap-3 ">
         <div className="font-poppins  flex flex-col relative w-full">
        <Image />
        <Hello />
        <Introduction />
        <Buttons/>
        </div>
      </div>
    </>
  );
}

export default TextGrop;
