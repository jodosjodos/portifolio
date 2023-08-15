import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const AiVisuage = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center pt-36 gap-16 pb-36">
          <div className=" flex items-center justify-center  gap-3 flex-col">
            <h1 className=" font-kelly-slab text-3xl font-light text-text-primary dark:text-primary-dark">
              ai-visuage
            </h1>
            <div className=" text-text-primary dark:text-white flex flex-col">
              <p>
                This page contains the case study of ai-visuage Website which
                includes
              </p>
              <p className="self-center">
                the Project Overview, Tools Used and Live Links to the official
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

          <img src="/assets/aiVisuage.png" alt=" ai visuage image" />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className=" font-kelly-slab text-3xl  font-light text-text-primary dark:text-primary-dark">
              project overview
            </h1>
            <div className="dark:text-white flex flex-col">
              <p>
                AI-Visuage is a cutting-edge platform that uses AI to generate
                stunning
              </p>
              <p>
                images from user-provided text content. The platform prioritizes
                user
              </p>
              <p>
                experience, offering an intuitive interface for easy image
                creation,
              </p>
              <p>
                sharing, and downloading. With advanced AI models, the images
                are
              </p>
              <p className=" self-center">
                contextually relevant and of top-notch quality.
              </p>
              <p>
                The platform fosters an engaged community of creators and
                consumers,
              </p>
              <p>
                providing a seamless experience on desktops and smartphones
                alike. As
              </p>
              <p>
                part of future plans, AI-Visuage aims to introduce collaborative
                features,
              </p>
              <p>
                enabling users to work together on image projects. A dedicated
                mobile
              </p>
              <p>
                app is also in development, empowering users with on-the-go
                image{" "}
              </p>
              <p className="self-center">generation and sharing.</p>
              <p>
                Feel free to explore the AI-Visuage project by visiting the Live
                Link.{" "}
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
                <p>nodejs</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>chatgpt apis</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  flex items-center justify-center">
                <p>netlify</p>
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

export default AiVisuage;
