import Content from "../organism/Content";
import Navbar from "../organism/Navbar";
import AboutGroup from "../organism/AboutGroup";
import Projects from "../organism/Projects";
function HomePage() {
  return (
    <>
      <Navbar />
      <div className="py-20 flex flex-col justify-evenly ">
        <Content />
        <AboutGroup />
        <Projects />
      </div>
    </>
  );
}

export default HomePage;
