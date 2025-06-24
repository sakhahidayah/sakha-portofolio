import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Buttons() {
  return (
    <>
      <div className="mt-5 flex flex-row gap-2 ">
        <a
          href="https://github.com/sakhahidayah"
          target="_blank"
          className="flex items-center gap-2 px-2 py-1 bg-black text-white border rounded-xl cursor-pointer "
        >
          <GitHubIcon fontSize="large" />
        </a>

        <a
          href="https://www.linkedin.com/in/sakha-hidayah-ramadhan-2b1b0236a/"
          target="_blank"
          className="flex items-center px-2 py-1 bg-blue-500 text-white border rounded-xl cursor-pointer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href=""
          className="flex items-center px-2 py-1 bg-red-400 text-white border rounded-xl cursor-pointer"
        >
          <InstagramIcon fontSize="large" />
        </a>
      </div>
    </>
  );
}

export default Buttons;
