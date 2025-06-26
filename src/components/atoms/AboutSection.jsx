function AboutSection() {
  return (
    <>
      <div className="w-full  md:w-[450px] h-min font-poppins p-4 flex flex-col gap-1">
        <p className="font-semibold text-2xl lg:text-3xl">ABOUT ME</p>
        <p className="text-xl lg:text-2xl font-medium">
          {" "}
          <span className=" bg-[#8eebda]  px-1 rounded-lg text-white ">
            Sakha Hidayah Ramadhan.
          </span>
        </p>
        <p className="text-lg lg:text-xl py-2 text-slate-400">
          <span className="text-slate-800 font-medium ">
            {" "}
            I am a Junior Web Developer
          </span>{" "}
          . I am a recent vocational high school graduate with plans to continue
          my education at university while working. I love to playing games,
          reading comics , watching anime , and of course — coding.{" "}
        </p>
      </div>
    </>
  );
}

export default AboutSection;
