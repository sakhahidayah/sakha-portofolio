import Navbar from "../organism/Navbar";
import Footer from "../organism/Footer";
import AboutGroup from "../organism/AboutGroup";
function AboutPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <AboutGroup/>
        </div>
      </div>
    </>
  );
}
export default AboutPage;
