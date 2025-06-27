function Hello() {
  return (
    <>
      <div>
        <p data-aos="fade-right" data-aos-duration="900" className=" text-xl font-semibold md:text-5xl">Hello!</p>
        <span data-aos="fade-left" data-aos-duration="900" className="font-semibold w-full text-2xl md:text-3xl flex flex-row items-center gap-2">
          MY NAME IS{" "}
          <span className="bg-gradient-to-br font-bold from-teal-500 to-teal-200 bg-clip-text text-transparent text-3xl md:text-5xl bg-transparent">
            SAKHA
          </span>
        </span>
        <p data-aos="fade-left" data-aos-duration="900" className="font-poppins font-medium text-md md:text-xl mt-2 ">
          I'm a{" "}
          <span className="bg-[#42bda6]  absolute animate-bounce ml-2 text-white p-1 rounded-xl  font-kaushan text-xl md:text-2xl">
            Website Developer
          </span>
        </p>
      </div>
    </>
  );
}

export default Hello;
