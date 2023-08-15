const Projects = () => {
  
  
  return (
    <div>
      <div className="flex flex-col gap-20 pt-10 border-b-2 border-black pb-16 dark:border-primary-dark">
        <div className="flex  justify-center items-center font-medium font-kelly-slab text-2xl text-text-primary  dark:text-primary-dark">
          <h1 className="border-b-4 border-[#0D3167] dark:border-primary-dark">PPROJECTS</h1>
        </div>
        <div className="flex flex-row  justify-around">
          <div>
            <img
              src="/assets/aiVisuage.png"
              alt=" ai visuage image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 self-center">
            <h1 className="text-2xl font-bold text-text-primary dark:text-primary-dark self-center">
              ai-visuage
            </h1>
            <div className="flex flex-col gap-2 dark:text-white">
              <p>ai-visuage is online ai website that</p>
              <p>generate image for you based on</p>

              <p className="self-center">text you gave it.</p>
            </div>
            <button className=" bg-text-primary text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-center dark:bg-primary-dark dark:text-white">
              Case Study
            </button>
          </div>
        </div>
        <div className="flex flex-row  justify-around">
          <div>
            <img
              src="/assets/traileress.png"
              alt=" traileress image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 self-center">
            <h1 className="text-2xl font-bold text-text-primary self-center dark:text-primary-dark">
              traileress
            </h1>
            <div className="flex flex-col gap-2 dark:text-white">
              <p> online website where you can</p>
              <p> watch original trailer of all movies</p>
              <p>and tv shows on free with good </p>

              <p className="self-center">quality video </p>
            </div>
            <button className=" bg-text-primary text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-center dark:bg-primary-dark dark:text-white">
              Case Study
            </button>
          </div>
        </div>
        <div className="flex flex-row  justify-around">
          <div>
            <img
              src="/assets/promptopia.png"
              alt=" ai visuage image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 self-center">
            <h1 className="text-2xl font-bold text-text-primary self-center dark:text-primary-dark">
              Promptopia
            </h1>
            <div className="flex flex-col gap-2 dark:text-white">
              <p>An innovative, high-performance</p>
              <p>website that lets you create </p>
              <p>captivating posts and easily search</p>
              <p> them using usernames, trending</p>
              <p> tags, or mesmerizing content. Sign</p>
              <p> in seamlessly with your Google</p>
              <p> account for added convenience.</p>
            </div>
            <button className=" bg-text-primary text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-center dark:bg-primary-dark dark:text-white">
              Case Study
            </button>
          </div>
        </div>
        <div className="flex flex-row  justify-around">
          <div>
            <img
              src="/assets/libblio.png"
              alt=" ai visuage image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 self-center">
            <h1 className="text-2xl font-bold text-text-primary dark:text-primary-dark self-center">
              libblio
            </h1>
            <div className=" dark:text-white flex flex-col gap-2">
              <p>Digital library management system</p>
              <p>where librarians can easily</p>
              <p>manage flow of books in library</p>
              <p className="self-center">easily at small cost </p>
            </div>
            <button className=" bg-text-primary text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-center dark:bg-primary-dark dark:text-white">
              Case Study
            </button>
          </div>
        </div>
        <div className="flex flex-row  justify-around">
          <div>
            <img
              src="/assets/coryde.png"
              alt=" ai visuage image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 self-center">
            <h1 className="text-2xl font-bold text-text-primary dark:text-primary-dark self-center">
              coryde
            </h1>
            <div className="flex flex-col gap-2 dark:text-white">
              <p> this is online website , still going </p>

              <p>on Book taxi or bus going in your </p>
              <p>destination , also find others you</p>
              <p>can are going to use same bus as </p>
              <p>you have .</p>
            </div>
            <button className=" bg-text-primary text-white font-kelly-slab w-48 py-2 rounded-md text-xl self-center  dark:bg-primary-dark dark:text-white">
              Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
