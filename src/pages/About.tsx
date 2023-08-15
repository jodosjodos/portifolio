import { Link, useNavigate } from "react-router-dom";

const About = () => {
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
      <div className="flex pb-40 pt-10 border-b-2 border-black  dark:border-primary-dark  flex-col gap-8">
        <div className="flex  justify-center items-center font-medium font-kelly-slab text-2xl text-text-primary  dark:text-primary-dark">
          <h1 className="border-b-4 border-[#0D3167]  dark:border-[#00E5A0]">ABOUT ME</h1>
        </div>
        <div className="flex flex-col items-center  justify-center  dark:text-white">
          <p>
            Here you will find more information about me , what I do , and my
            current skills mostly in terms
          </p>
          <p>of programming and technology </p>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-text-primary dark:text-primary-dark">
              Get know me!{" "}
            </h1>
            <div className="flex flex-col gap-1 dark:text-white ">
              <p>
                I'm a{" "}
                <span className="font-bold">Full Stack Web Developer</span> with
                a strong focus on JavaScript
              </p>
              <p>
                ,php, python, c technologies. My expertise lies in building and
                optimizing
              </p>
              <p>
                the Front-end and back-end of Websites and Web Applications,
                ensuring
              </p>
              <p>
                their success ,user satisfaction and their performance.Also
                focused on
              </p>
              <p>
                Data structure and algorithmns in python.You can explore some of
                my
              </p>
              <p className="self-center">
                {" "}
                projects in the{" "}
                <span className="font-bold ">Projects section.</span>
              </p>
              <p>
                As an enthusiast for knowledge sharing, I love providing
                valuable content
              </p>
              <p>
                related to <span className="font-bold">Web Development</span>{" "}
                and Programming, aiming to help fellow
              </p>
              <p>
                developers in the Dev Community. You can find and connect with
                me on
              </p>
              <p>
                <Link
                  className="font-bold text-text-primary text-xl border-b-2 border-[#0D3167] dark:text-primary-dark"
                  to="https://www.linkedin.com/in/jean-de-dieu-nshimyumukiza-97b315259/"
                  target="_blank"
                >
                  LinkedIn,
                </Link>{" "}
                and you can check some my codes on{" "}
                <Link
                  className="font-bold text-text-primary text-xl border-b-2 border-[#0D3167] dark:text-primary-dark"
                  to="https://github.com/jodosjodos"
                  target="_blank"
                >
                  Github
                </Link>{" "}
                where I
              </p>
              <p className="self-center">
                {" "}
                regularly post informative content and codes.
              </p>
              <p>
                I am currently open to{" "}
                <span className="font-bold">job opportunities</span> where I can
                contribute my
              </p>
              <p>
                skills, continue learning, and grow professionally. If you have
                a position
              </p>
              <p>
                that aligns with my experience and expertise, please don't
                hesitate to
              </p>
              <p>
                reach out to me in{" "}
                <span className="font-bold"> Contact section.</span> I'm excited
                to explore potential
              </p>
              <p className="self-center">
                {" "}
                opportunities and be a valuable asset to your team.
              </p>
            </div>
            <button
              className=" bg-text-primary text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-center  dark:bg-primary-dark"
              onClick={() => scrollToSection("contact")}
            >
              Contact me
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-text-primary dark:text-primary-dark">My skills</h1>
            <div className="grid grid-cols-3 gap-3">
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary dark:bg-[#00E5A0] dark:text-white flex items-center justify-center">
                <p>html</p>
              </div>
              <div className="dark:bg-[#00E5A0] dark:text-white bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center">
                <p>css</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>js</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>react</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>vue</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>tailwind</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>git</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>github</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>express</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>python</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>php</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>laravel</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-32  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>docker basics</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>sql basics</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>nextjs</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>redux</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>typescript</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>prisma</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-24  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>graphql</p>
              </div>
              <div className=" bg-[#D9D9D9] rounded-md h-10 w-36  text-text-primary flex items-center justify-center dark:bg-[#00E5A0] dark:text-white">
                <p>responsive design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
