import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Buttons() {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="900" className="mt-5 flex w-max h-max  flex-row gap-1 md:gap-2 transition duration-500 ">
        <a href="https://github.com/sakhahidayah" target="_blank" className="flex items-center gap-1 px-2 py-1 transition duration-500 hover:text-white group hover:bg-black rounded-xl text-[40px] md:text-[60px]">
          <GitHubIcon fontSize="inherit" />
        </a>

        <a href="https://www.linkedin.com/in/sakha-hidayah" target="_blank" className="flex group gap-1 items-center px-2 py-1 hover:bg-blue-500   transition duration-500 hover:text-white  rounded-xl cursor-pointer text-[40px] md:text-[60px]">
          <LinkedInIcon fontSize="inherit" />
        </a>
        <a href="https://www.instagram.com/sakhahidayahhh_/" target="_blank" className="flex items-center gap-1 px-2 py-1  transition duration-500  hover:bg-red-400 hover:text-white  group rounded-xl cursor-pointer text-[40px] md:text-[60px]">
          <InstagramIcon fontSize="inherit" />
        </a>
      </div>
    </>
  );
}

export default Buttons;
