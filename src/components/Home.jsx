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
        "B-Tech Graduate",
        "SAP S/4 Hana Technical Developer",
        "AI/Ml Learner",
        "Canva Designer",
      ],
      typeSpeed: 80,
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
          I am an Electronics and Communication Engineering graduate and currently working as a SAP Developer at Infosys after completing my training at the Mysore Development Center in Mysuru. I have hands-on experience in SAP ABAP along with building web and mobile applications using React, React Native, Java, and Firebase, and working on IoT-based real-world data systems. I am passionate about continuous learning and am currently focused on strengthening my skills in cloud and DevOps to grow into a versatile Software and DevOps Engineer capable of delivering scalable real-world solutions.
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
              
            </Link>
          </div>
        </div>

        <div className=" mx-5 md:mx-20  ">
          <img
            src="./assets/myportfoliopic.jpeg"
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full md:h-80 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
