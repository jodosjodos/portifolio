import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="bg-black px-24  pt-16">
        <div className="text-white flex flex-row border-b  justify-around">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-kelly-slab font-medium">Jean de Dieu NSHIMYUMUKIZA</h1>
            <div className="flex flex-col">
              <p>
                I am fullstack developer building backend and fronted of website
                and web
              </p>
              <p className="self-center">application that led to success of overall product</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col ">
            <h1 className="text-2xl font-kelly-slab font-medium"    >Social</h1>
            <div className="flex flex-row">
              <AiFillLinkedin size={40} />
              <AiFillTwitterSquare size={40} />
              <AiFillGithub size={40} />
              <FaDiscord size={40} />
            </div>
            </div>
            <p>+250727866254</p>
           
          </div>
        </div>
        <div className="text-whit">
            <p>&copy;copyright 2023. Made by Jean de  Dieu</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
