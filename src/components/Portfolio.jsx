import React from "react";

import carousel1 from "../assets/portfolio/carousel1.png";
import carousel2 from "../assets/portfolio/carousel2.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: carousel2,
      href: "https://piyushgaurav.netlify.app/",
      code:"https://github.com/PiyushGaurav12/DjangoProjects.git",
    },
    {
      id: 2,
      src: carousel1,
      href: "https://piyush-academy.netlify.app/",
      code:"https://github.com/PiyushGaurav12/DjangoProjects.git",
    },
    {
      id: 3,
      src: carousel2,
      href: "",
      code:"https://github.com/PiyushGaurav12/DjangoProjects.git",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-signatre2">
            Portfolio
          </p>
          <p className="py-6">check out my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a href={href}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hove:scalw-105">
                    Demo
                  </button>
                </a>
                <a href={code}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hove:scalw-105">
                  code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
