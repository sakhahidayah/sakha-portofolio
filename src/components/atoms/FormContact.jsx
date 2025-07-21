function FormContact() {
  return (
    <>
      <div className="w-full"  data-aos="fade-up"
          data-aos-duration="1000">
        <form
          className="flex flex-col w-full justify-start gap-7 "
        >
          <input
           action=""
            type="text"
            placeholder="Name"
            className=" border border-[#8eebda] focus:outline-2 focus:outline-teal-400 px-5 py-2 rounded-2xl"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="border border-[#8eebda] focus:outline-2 focus:outline-teal-400  px-5 py-2 rounded-2xl"
          />
          <textarea
            name=""
            id=""
            placeholder="Message..."
            className="border border-[#8eebda] focus:outline-2 focus:outline-teal-400 px-4 pt-3 pb-5 rounded-2xl "
          ></textarea>
        </form>
      </div>
    </>
  );
}

export default FormContact;
