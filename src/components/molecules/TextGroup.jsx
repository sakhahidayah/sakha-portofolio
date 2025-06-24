import Hello from "../atoms/Hello";
import Introduction from "../atoms/Introduction";
import Buttons from "../atoms/Buttons";
Introduction
function TextGrop() {
  return (
    <>
      <div className="p-10 lg:p-16   flex flex-col  w-full md:w-  gap-3 ">
         <div className="font-poppins  flex flex-col relative w-full sm:w-9/12">
        <Hello />
        <Introduction />
        <Buttons/>
        </div>
      </div>
    </>
  );
}

export default TextGrop;
