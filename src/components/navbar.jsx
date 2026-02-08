import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import {Link} from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "resume",
      href: "/resume.pdf",
      download: true,
    },
    {
      id: 5,
      link: "contact",
    },
    {
      id: 6,
      child: (
        <>
          <button className="group text-white w-fit px-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Hire Me
            <span className="group-hover:-rotate-180 duration-300">
              <FaHandshake size={25} className="ml-1" />
            </span>
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-between w-full h-16 fixed text-white bg-black px-4">
      <div className="flex-1 flex items-center">
        <h1 className="font-signatre1 mt-1 px-4 text-3xl"> Piyush </h1>
        <h1 className="font-signatre1 mt-1 text-3xl"> Gaurav </h1>
      </div>

      <div className="hidden md:flex justify-center flex-1">
        <ul className="flex space-x-4">
          {links.map(({ id, child, link, href, download }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize font-signatre2 hover:scale-105 duration-200"
            >
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                <Link to={link} smooth duration={500}>{link}</Link>
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 flex justify-end md:hidden">
        <ul
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-gray-500"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </ul>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-gray-400">
          {links.map(({ id, child, link, href, download }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 font-signatre2 text-4xl"
            >
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                <Link
                 onClick={()=>setNav(!nav)}
                to={link} smooth duration={500}>{link}</Link>
                {child}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
