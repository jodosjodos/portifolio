import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Coryde = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center pt-36 gap-16 pb-36">
          <div className=" flex items-center justify-center  gap-3 flex-col">
            <h1 className=" font-kelly-slab text-3xl font-light text-text-primary dark:text-primary-dark">
              coryde
            </h1>
            <div className=" text-text-primary dark:text-white flex flex-col">
              <p>
                This page contains the case study of promptopia Website which
                includes
              </p>
              <p className=" self-center">
                the Project Overview, Tools Used and Live Links to the official
                product.
              </p>
              <p className="self-center">
                also include link for source codes of it
              </p>
            </div>
            <button className=" font-kelly-slab bg-text-primary dark:bg-primary-dark text-white rounded-lg px-16 py-2 text-xl">
              live link
            </button>
          </div>

          <img src="/assets/coryde.png" alt=" coryde image" />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              project overview
            </h1>
            <div className="dark:text-white">
              <p>
                promptopia is website I have create where you can create post ,
                share it
              </p>
              <p>
                with friends and family and put tag during creation of your post
                . It have
              </p>
              <p>
                improved searching performance where you can search by using any
              </p>
              <p>
                keyword based on tag , name or post itself . i have implemented
                login
              </p>
              <p>
                simply with google account . Also you can check all post made by
                single
              </p>
              <p>user by clicking their profile picture</p>
              <p>
                its design is good and attractively as it is responsive . Its
                uniqueness is
              </p>
              <p>that it is attractive and has high performance.</p>
              <p>if you feel like it , please visit link</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              Tools I used
            </h1>
            <div className="flex flex-row gap-6">
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>nextjs</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>git</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10   flex items-center justify-center px-3">
                <p>google auth</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>vercel</p>
              </div>

              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>tailwind</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>nodejs</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>mongodb</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              See live
            </h1>
            <div className="flex font-kelly-slab flex-row gap-5">
              <button className=" bg-text-primary text-white rounded-md px-8 py-2 dark:bg-primary-dark">
                live link
              </button>
              <Link
                target="_blank"
                to="/"
                className=" border-2 border-[#0D3167]  rounded-md px-8 py-2 dark:border-primary-dark dark:text-white"
              >
                Go Back
              </Link>
              <button className=" bg-text-primary text-white rounded-md px-8 py-2 dark:bg-primary-dark">
                live codes
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Coryde;
