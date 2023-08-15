import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Libblio = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center pt-36 gap-16 pb-36">
          <div className=" flex items-center justify-center  gap-3 flex-col">
            <h1 className=" font-kelly-slab text-3xl font-light text-text-primary dark:text-primary-dark">
              libblio
            </h1>
            <div className=" text-text-primary dark:text-white flex flex-col">
              <p>
                This page contains the case study of libblio Website which
                includes the{" "}
              </p>
              <p className=" self-center">
                Project Overview, Tools Used and Live Link to the official
                product.
              </p>
              <p className="self-center">
                also include link for source codes of back-end of it{" "}
              </p>
            </div>
            <button className=" font-kelly-slab bg-text-primary dark:bg-primary-dark text-white rounded-lg px-16 py-2 text-xl">
              live link
            </button>
          </div>

          <img src="/assets/libblio.png" alt=" ai visuage image" />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              project overview
            </h1>
            <div className="dark:text-white">
              <p>
                libblio is online library management system where librarians can
                easily
                <p>
                  manage books founds in their library . In this project I have
                  worked on
                </p>
                <p>
                  backe-nd developement where I was dealing with registering
                  librarians
                </p>
                <p>
                  and send emails to their email with credentials they entered ,
                  i have
                </p>
                <p>
                  implemented reset password and other authentication of website
                  .
                </p>
                <p>
                  libblio besides its strongest back-end it is very fast and has
                  high
                </p>
                <p>performance for processing requests and take actions</p>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              Tools I used
            </h1>
            <div className="flex flex-row gap-6">
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>nodejs</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>git</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>mongodb</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p> github</p>
              </div>

              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>nodemailer</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>mongo atlas</p>
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

export default Libblio;
