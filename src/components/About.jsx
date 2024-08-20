import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-signatre2">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Dedicated software developer with a strong focus on Java Development &
          React application development.Expertise spans across building dynamic,
          user-friendly interfaces that enhance user experiences. Great
          problem-solving abilities and commitment to staying updated with the
          latest industry trends.
        </p>
        <br />
        <p className="text-xl">
          Beyond the professional life,I am passionate about sports,
          particularly volleyball & Badminton where I enjoy both playing and the
          teamwork it fosters. Also I have love for adventure and discovery
          which drives my passion for traveling and sightseeing, allowing me to
          explore new cultures and landscapes, which in turn fuels my creativity
          and perspective in his work.?
        </p>
      </div>
    </div>
  );
};

export default About;
