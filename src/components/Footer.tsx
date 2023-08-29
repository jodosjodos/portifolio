import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/ThemeContext";
const Footer = () => {
  const {darkMode}=useTheme()

  return (
    <div>
      <div className="bg-black px-24  pt-16 flex flex-col gap-16 pb-16">
        <div className="text-white flex flex-row border-b  border-white dark:border-primary-dark  justify-around pb-5 ">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-kelly-slab font-medium dark:text-primary-dark">
              Jean de Dieu NSHIMYUMUKIZA
            </h1>
            <div className="flex flex-col">
              <p>
                I am fullstack developer building backend and fronted of website
                and web
              </p>
              <p className="self-center">
                application that led to success of overall product
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col ">
              <h1 className="text-2xl font-kelly-slab font-medium dark:text-primary-dark">
                Social
              </h1>
              <div className="flex flex-row">
              <Link 
          to="https://www.linkedin.com/in/jean-de-dieu-nshimyumukiza-97b315259/"
          target="_blank"
        >
          <AiFillLinkedin size={25}  color={` ${darkMode? " #00E5A0" :""}`} />
        </Link>
        <Link to="https://twitter.com/JodosJodos1" target="_blank">
          <AiFillTwitterSquare size={25}   color={` ${darkMode? " #00E5A0" :""}`}/>
        </Link>
        <Link to="https://github.com/jodosjodos" target="_blank">
          <AiFillGithub size={25}   color={` ${darkMode? " #00E5A0" :""}`}/>
        </Link>
        <Link to="https://discord.com/users/1054299820615028746" target="_blank">
          <FaDiscord size={25}  color={` ${darkMode? " #00E5A0" :""}`}/>
        </Link>
              </div>
            </div>
            <p>+250727866254</p>
          </div>
        </div>
        <div className=" flex flex-row justify-around text-white  ">
          <div className="flex flex-row gap-3">
            <p className="text-xl text-[]">&copy;</p>
            <p>
              copyright 2023. Made by{" "}
              <span className=" underline">Jean de Dieu</span>
            </p>
          </div>

          <div className="  text-black">dsjfkjaskldfsj;kladsjk;dlsfjf</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
