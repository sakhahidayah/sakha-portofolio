function FormContact() {
  return (
    <>
      <div className="w-full">
        <form action="" className="flex flex-col justify-start gap-5 ">
          <input
            type="text"
            placeholder="Name"
            className=" border border-[#8eebda] px-5 py-2 rounded-2xl"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="border border-[#8eebda] px-5 py-2 rounded-2xl"
          />
          <textarea name="" id="" placeholder="Message..." className="border border-[#8eebda] px-4 pt-3 pb-5 rounded-2xl "></textarea>
        </form>
      </div>
    </>
  );
}

export default FormContact;
