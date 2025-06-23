function Dropdown() {
  return (
    <>
      <div className="relative px-2 rounded group w-min bg-[#8eebda]">
        <button className="text-3xl  cursor-pointer transition duration-300 ease-out ">
          ☰
        </button>

        <div className="absolute hidden group-hover:inline-block w-40   right-0 mt-6 ">
          <div className="flex flex-col gap-2 bg-[#53f9da] items-center p-2 rounded font-medium ">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
