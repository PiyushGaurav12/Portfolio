import React from "react";
import css from "../assets/experience/css.png";
import expo from "../assets/experience/expo.png";
import html from "../assets/experience/html.png";
import javaswing from "../assets/experience/javaswing.png";
import react from "../assets/experience/react.jpeg";
import git from "../assets/experience/git.jpg";
import figma from "../assets/experience/figma.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: react,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 4,
      src: expo,
      title: "Expo",
      style: "shadow-indigo-500",
    },
    {
      id: 5,
      src: javaswing,
      title: "Java Swing",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: git,
      title: "Git & Git-Hub",
      style: "shadow-orange-300",
    },
    {
      id: 7,
      src: figma,
      title: "Figma",
      style: "shadow-purple-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 via-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline font-signatre2">
            Experience
          </p>
          <p className="py-6">Here are the technologies I've Worked With</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="w-20 h-20 mx-auto">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
