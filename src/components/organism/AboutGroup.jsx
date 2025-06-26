import AboutSection from "../atoms/AboutSection";
import Images from "../atoms/Images";

function AboutGroup() {
  return (
    <>
      <div
        id="about"
        className="w-full mt-20 py-28 mb-64  gap-5  md:flex-row h-max md:mt-36  flex flex-col  items-center justify-start md:justify-center lg:justify-evenly relative"
      >
        <Images />
        <AboutSection />
      </div>
    </>
  );
}

export default AboutGroup;
