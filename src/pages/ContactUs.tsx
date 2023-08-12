import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { GoVerified } from "react-icons/go";

const contactUsSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});
const ContactUs = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(contactUsSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  // setTimeout(()=>{
  //  setSent(false)
  // },2000)

  const handleSubmition = async (data: FormData) => {
    try {
      if (data) {
        setIsLoading(true);
        const res = await axios.post(
          "http://localhost:5000/api/auth/sendEmail",
          data
        );
        setIsLoading(false);
        if (res.status == 200) {
          setSent(true);
        } else {
          setSent(false);
          alert("try again message not sent");
        }
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      alert("try again message not sent");
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-10 justify-center pt-10">
        <div className="flex  justify-center items-center font-medium font-kelly-slab text-2xl text-text-primary ">
          <h1 className="border-b-4 border-[#0D3167]">CONTACT</h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p> Feel free to Contact me by submitting the form below and</p>
          <p>I will get back to you as soon as possible</p>
        </div>
        <div className="self-center   w-4/12 ">
          <form
            className="bg-white  w-full   flex flex-col  gap-32 justify-center px-10 pt-5 pb-5 z-50"
            onSubmit={handleSubmit(handleSubmition)}
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className=" font-kelly-slab text-xl">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                className="h-11 border-2 focus:outline-none border-[#0D3167] bg-[#D9D9D9]  pl-3 text-text-primary"
                required
                {...register("name")}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className=" font-kelly-slab text-xl">
                Email
              </label>
              <input
                type="eamil"
                required
                placeholder="Enter your  email"
                id="email"
                className="h-11 border-2 focus:outline-none border-[#0D3167] bg-[#D9D9D9]  pl-3 text-text-primary"
                {...register("email")}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="message" className=" font-kelly-slab text-xl">
                Message :
              </label>
              <textarea
                required
                {...register("message")}
                id="message"
                cols={50}
                rows={20}
                className=" border-2 focus:outline-none border-[#0D3167] bg-[#D9D9D9]  pl-3 text-text-primary"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <button
                className={` bg-text-primary ${
                  isLoading ? "opacity-25" : ""
                } text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-end `}
                type="submit"
                disabled={isLoading}
              >
                Case Study
              </button>
              {sent && (
                <span>
                  <GoVerified size={25} color="#0D3167" />
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
