import AboutSection from "../atoms/AboutSection";
import Images from "../atoms/Images";


function AboutGroup() {
  return (
    <>
      <div className="w-full gap-5 md:flex-row h-max md:mt-36  flex flex-col  items-center justify-start md:justify-center">
        <Images />
        <AboutSection/>
      </div>
    </>
  );
}

export default AboutGroup;
