import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Promptopia = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center pt-36 gap-16 pb-36">
          <div className=" flex items-center justify-center  gap-3 flex-col">
            <h1 className=" font-kelly-slab text-3xl font-light text-text-primary dark:text-primary-dark">
              promptopia
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

          <img src="/assets/promptopia.png" alt=" promptopia image" />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              project overview
            </h1>
            <div className="dark:text-white">
              <p>
                coryde is simple transport vehicle booking . I am creating
                fronted of this
              </p>
              <p>
                project where you can check available vehicles that travel to
                your
              </p>
              <p>
                destination so that you can book them , also you can find others
                that
              </p>
              <p>
                have same destination as you so that you can move together.I am
                still
              </p>
              <p>developing front-ed of this project .</p>
              <p>
                by its attractive ui and high performance can help to bit its
                competitors
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              Tools I used
            </h1>
            <div className="flex flex-row gap-6">
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>react</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>git</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10   flex items-center justify-center px-3">
                <p>redux</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>github</p>
              </div>

              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>yup</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>mui</p>
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

export default Promptopia;
