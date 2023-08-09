import SocialMedia from "./SocialMedia";

const Introduction = () => {
  return (
    <div>
      <div className="flex flex-col  gap-10 items-center justify-center relative pt-[20em] border-b-2 border-black pb-72">
        <h1 className="font-medium  text-4xl  text-text-primary font-kelly-slab">
          HEY,I’M JEAN DE DIEU NSHIMYUMUKIZA
        </h1>
        <div className="flex flex-col ">
          <p>
            I am fullstack developer building backend and fronted of website and
            web
          </p>
          <p className="self-center">application that led to success of overall product</p>
        </div>
        <button className=" font-kelly-slab bg-text-primary text-white rounded-lg px-10 py-3 text-xl">PROJECTS</button>
        <SocialMedia/>
      </div>
    </div>
  );
};

export default Introduction;
