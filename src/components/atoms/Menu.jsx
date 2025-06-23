function Menu() {
  return (
    <>
      <div className="hidden md:inline-block">
        <div className="flex flex-row gap-4 font-poppins font-medium text-lg lg:text-xl">
          <a
            className="hover:text-[#8eebda]  transition-all duration-200 "
            href="#"
          >
            About
          </a>
          <a
            className="hover:text-[#8eebda]  transition-all duration-200 "
            href="#"
          >
            Services
          </a>
          <a
            className="hover:text-[#8eebda]  transition-all duration-200 "
            href="#"
          >
            Project
          </a>
          <a
            className="hover:text-[#8eebda]  transition-all duration-200 "
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
