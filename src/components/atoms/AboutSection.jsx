function AboutSection() {
  return (
    <>
      <div className="w-full  md:w-[450px] h-min font-poppins p-4 flex flex-col gap-1">
        <p className="font-semibold text-2xl"> HELLO, MY NAME IS</p>
        <p className="text-xl font-medium">
          {" "}
          <span className=" bg-[#8eebda]  px-1 rounded-lg text-white ">
            Sakha Hidayah Ramadhan.
          </span>
        </p>
        <p className="text-lg p-2">
          I am a recent vocational high school graduate with plans to continue
          my education at university while working. I love to playing games,
          reading comics , watching anime , and of course — coding.{" "}
        </p>
      </div>
    </>
  );
}

export default AboutSection;
