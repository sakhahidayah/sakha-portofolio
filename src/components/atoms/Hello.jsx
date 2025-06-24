function Hello() {
  return (
    <>
      <div className="font-poppins  flex flex-col relative  w-full">
        <p className=" text-xl font-semibold">Hello!</p>
        <span className="font-medium w-full text-3xl">
          MY NAME IS{" "}
          <span className="bg-gradient-to-br from-teal-500 to-teal-200 bg-clip-text text-transparent ">
            SAKHA
          </span>
        </span>
        <p className="font-poppins font-medium text-md mt-2 ">
          I'm a{" "}
          <span className="bg-[#42bda6] absolute animate-bounce ml-2 text-white p-1 rounded hover:bg-teal-200 hover:text-black transition duration-500 hover:font-semibold font-kaushan text-xl ">
            Website Developer
          </span>
        </p>
        <p className="mt-8 font-light text-slate-600 text-sm">
          I am a{" "}
          <span className="bg-[#8eebda] px-1 rounded-lg text-white font-medium text-shadow-2xs">
            Web Developer
          </span>{" "}
          and a graduate of Harisenin.com, an online learning platform
          specializing in fullstack web development. I focus primarily on{" "}
          <span className="bg-[#8eebda] px-1 rounded-lg text-white font-medium text-shadow-2xs">
            front-end development
          </span>
          , equipped with a variety of skills in building modern, responsive,
          and user-friendly websites. With a strong foundation in both{" "}
          <span className="bg-[#8eebda] px-1 rounded-lg text-white font-medium text-shadow-2xs">
            design principles and web technologies
          </span>{" "}
          , I am committed to delivering effective digital solutions tailored to
          user needs and business goals.
        </p>
      </div>
    </>
  );
}

export default Hello;
