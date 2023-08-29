import { CiDark,CiLight } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/ThemeContext";
const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
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
  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <div>
      <div
        className={`dark:text-primary-dark dark:bg-black flex flex-row   justify-between items-center py-3 text-text-primary px-5`}
      >
        <div
          className="flex   items-center  align-middle justify-center  gap-5  hover:cursor-pointer md:flex lg:flex sm:hidden "
          onClick={() => {
            Navigate("/");
          }}
        >
          <img
            src="/assets/portifolio.jpg"
            alt=" my profile picture"
            className=" w-18 h-14 rounded-md border-2 border-black"
          />
          <h2 className="font-extrabold ">Jean de Dieu NSHIMYUMUKIZA</h2>
        </div>
        <nav className=" flex flex-row gap-5 sm:gap-3 items-center font-bold  list-none hover:cursor-pointer">
          <li
            onClick={() => {
              scrollToSection("introduction");
            }}
            role="link"
          >
            HOME
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
            }}
          >
            ABOUT
          </li>
          <li
            onClick={() => {
              scrollToSection("projects");
            }}
          >
            PROJECTS
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
            }}
          >
            CONTACTS
          </li>
          <li onClick={toggleTheme}>
            {darkMode ? <CiLight size={30} /> : <CiDark size={30} />}
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
