import SocialMedia from "./SocialMedia";
import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const Navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (id === "introduction") {
      Navigate("/");
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        Navigate(`#${id}`);
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col  gap-10 items-center justify-center relative pt-[20em] border-b-2 border-black pb-72 dark:border-primary-dark">
        <h1 className="font-medium  text-4xl  text-text-primary  dark:text-primary-dark font-kelly-slab ">
          HEY,I’M JEAN DE DIEU NSHIMYUMUKIZA
        </h1>
        <div className="flex flex-col  dark:text-white">
          <p>
            I am fullstack developer building backend and fronted of website and
            web
          </p>
          <p className="self-center">application that led to success of overall product</p>
        </div>
        <button className=" font-kelly-slab bg-text-primary dark:bg-primary-dark text-white rounded-lg px-10 py-3 text-xl" onClick={()=>scrollToSection("projects")}>PROJECTS</button>
        <SocialMedia/>
      </div>
    </div>
  );
};

export default Introduction;
