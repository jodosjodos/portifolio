import { CiDark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
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
      <div className="flex flex-row   justify-between items-center py-3 text-text-primary px-5">
        <div
          className="flex  items-center  align-middle justify-center  gap-5  hover:cursor-pointer"
          onClick={() => {
            Navigate("/");
          }}
        >
          <img
            src="/assets/portifolio.jpg"
            alt=" my profile picture"
            className=" w-18 h-14 rounded-md border-2 border-black"
          />
          <h2 className=" font-extrabold">Jean de Dieu NSHIMYUMUKIZA</h2>
        </div>
        <nav className=" flex flex-row gap-5 items-center font-bold  list-none hover:cursor-pointer">
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
          <CiDark size={30} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
