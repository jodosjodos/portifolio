import Introduction from "../components/Introduction";
import About from "./About";
import ContactUs from "./ContactUs";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-96 ">
        <div id="introduction">
          <Introduction></Introduction>
        </div>
        <div id="about">
          <About></About>
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
};

export default Home;
