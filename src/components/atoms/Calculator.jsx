function Calculator() {
  const tech = ["JAVASCRIPT", "TAILWINDCSS", "HTML"];

  return (
    <>
      {" "}
      <div className="border relative shadow-2xl hover:shadow-none hover:ease-in-out hover:scale-110 transition duration-400 hover:bg-black hover:text-white hover:border-2 hover:border-teal-300 cursor-pointer  px-3 py-4 gap-4 rounded-lg flex flex-col h-full font-poppins">
        <a href="https://calculator-apps-five.vercel.app/" target="_blank" className="absolute inset-0 z-50"></a>
        <div className="bg-[url('/project/calculator.png')] w-80 h-40 bg-cover rounded-lg"></div>
        <div className="flex flex-row w-full h-full px-2 gap-2">
          <h4>Tech:</h4>
          <div className="flex flex-row gap-2 text-xs">
            {tech.map((item, index) => {
              return (
                <p className="p-1 rounded-lg border" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
