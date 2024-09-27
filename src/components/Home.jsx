import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Typed from "typed.js";
import { Link } from "react-scroll";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Java Developer",
        "Full Stack Web Developer",
        "App Developer",
        "Figma Designer",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full pt-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">I am a</h2>
          <div className="App text-2xl text-cyan-300">
            <span ref={el} />
          </div>
          <p className="text-gray-500 py-4 max-w-md ">
            I specialize in developing responsive applications that deliver an
            exceptional user experience. With my skills, I can elevate the
            portfolio of any organization or individual, ensuring both
            functionality and aesthetics are perfectly aligned to meet your
            goals
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className=" mx-5 md:mx-20  ">
          <img
            src="./assets/heroimage.png"
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full md:h-80 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
