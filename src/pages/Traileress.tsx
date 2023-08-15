import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Traileress = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center pt-36 gap-16 pb-36">
          <div className=" flex items-center justify-center  gap-3 flex-col">
            <h1 className=" font-kelly-slab text-3xl font-light text-text-primary dark:text-primary-dark">
              traileress
            </h1>
            <div className=" text-text-primary dark:text-white flex flex-col">
              <p>
                This page contains the case study of traileress Website which
                includes the
              </p>
              <p className="self-center">
                Project Overview, Tools Used and Live Links to the official
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

          <img src="/assets/traileress.png" alt=" ai visuage image" />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              project overview
            </h1>
            <div className="dark:text-white flex flex-col">
              <p>
                traileress is online website I built for being able to stream
                trailers of
              </p>
              <p>
                movies online and in easy way using my fronted skills . at
                traileress you
              </p>
              <p>
                can find official trailer which can prevent you to watch unreal
                trailers . Its
              </p>
              <p>
                responsiveness make it possible to use it everywhere in mobiles
                and
              </p>
              <p className=" self-center">desktop and tablet.</p>
              <p>
                libblio besides its strongest back-end it is very fast and has
                high
              </p>
              <p>
                I took User Interface ideas by visiting different types of
                websites of
              </p>
              <p>
                the same industry and even visited platforms like dribbble to
                get inspiration
              </p>
              <p className="self-center">for building a good User Interface.</p>
              <p>
                Feel free to check out the Project by visiting the Live Link.
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
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>TMDB apis</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>vercel</p>
              </div>

              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>tailwind</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>github</p>
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

export default Traileress;
