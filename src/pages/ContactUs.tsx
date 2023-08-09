const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex  justify-center items-center font-medium font-kelly-slab text-2xl text-text-primary ">
          <h1 className="border-b-4 border-[#0D3167]">CONTACT</h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p> Feel free to Contact me by submitting the form below and</p>
          <p>I will get back to you as soon as possible</p>
        </div>
        <div className="self-center   w-4/12 ">
          <form className="bg-white  w-full   flex flex-col  gap-32 justify-center px-10 pt-5 pb-5">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className=" font-kelly-slab text-xl">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                className="h-11 border-2 focus:outline-none border-[#0D3167] bg-[#D9D9D9]  pl-3 text-text-primary"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className=" font-kelly-slab text-xl">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your  email"
                id="email"
                className="h-11 border-2 focus:outline-none border-[#0D3167] bg-[#D9D9D9]  pl-3 text-text-primary"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="message" className=" font-kelly-slab text-xl">
                Message :
              </label>
              <textarea
                name="message"
                id="message"
                cols={50}
                rows={20}
                className=" border-2 focus:outline-none border-[#0D3167] bg-[#D9D9D9]  pl-3 text-text-primary"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className=" bg-text-primary text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-end">
              Case Study
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
