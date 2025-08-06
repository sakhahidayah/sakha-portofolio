function PortoReact() {
  const tech = ["REACTJS", "TAILWINDCSS", "REACT ROUTER", "MATERIAL UI"];

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" className="h-full">
        <div className="border group relative shadow-2xl hover:shadow-none hover:ease-in-out hover:scale-110 transition duration-400 hover:bg-black hover:text-white hover:border-2 hover:border-teal-300 cursor-pointer px-3 py-4 gap-4 rounded-lg flex flex-col h-full font-poppins">
          <a href="https://sakha-portofolio.vercel.app/" target="_blank" className="inset-0 absolute z-50"></a>
          <div className="bg-[url('/project/PortoReact.png')] w-full h-40 bg-cover rounded-lg"></div>
          <div className="flex flex-col w-full h-full px-2 gap-2">
            <h1 className="inline-block font-poppins  group-hover:text-teal-800 px-2 py-1 border group-hover:border-teal-300 rounded-lg">Portofolio V2</h1>
            <div className="flex flex-row gap-1">
              <h4>Tech:</h4>
              <div className="flex flex-wrap gap-2 text-xs max-w-full">
                {tech.map((item, index) => {
                  return (
                    <p className="p-1 rounded-lg group-hover:text-teal-800 px-2 py-1 border group-hover:border-teal-300" key={index}>
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortoReact;
