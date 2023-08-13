import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="absolute left-5  top-[20em]">
      <div className="flex flex-col bg-white border-2  px-5 py-2  gap-16">
        <Link
          to="https://www.linkedin.com/in/jean-de-dieu-nshimyumukiza-97b315259/"
          target="_blank"
        >
          <AiFillLinkedin size={40} />
        </Link>
        <Link to="https://twitter.com/JodosJodos1" target="_blank">
          <AiFillTwitterSquare size={40} />
        </Link>
        <Link to="https://github.com/jodosjodos" target="_blank">
          <AiFillGithub size={40} />
        </Link>
        <Link to="https://discord.com/users/1054299820615028746" target="_blank">
          <FaDiscord size={40} />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
