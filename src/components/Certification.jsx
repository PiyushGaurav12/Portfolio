import React from 'react'

import java from "../assets/certifications/java.png";
import django from "../assets/certifications/django.png";
import reactNative from "../assets/certifications/reactNative.png";
import nanotech from "../assets/certifications/nanotech.png";


const Certification = () => {
    const certificates = [
        {
          id: 1,
          src: java,
          href: "https://drive.google.com/file/d/1cCVlfJUZydqiCtpkT7iz6FqlwG6OYe4h/view?usp=drive_link",
        },
        {
          id: 2,
          src: django,
          href: "https://drive.google.com/file/d/1VWEQI9Bot1srvYSzMOhdugGeiXGEhIjo/view?usp=drive_link",
        },
        {
          id: 3,
          src: reactNative,
          href: "https://drive.google.com/file/d/12CdGwT9WBsV7aYF-WUC_4WnHZlGEMNr6/view?usp=sharing",
        },
        {
          id: 4,
          src: nanotech,
          href: "https://drive.google.com/file/d/1YAz5FMWyBPvKOabfZXy7mxn2KqQuLWJU/view?usp=sharing",
        },
      ];
    return (
        <div
          name="certification"
          className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-signatre2">
                Certifications
              </p>
              <p className="py-6">Have my certifications below</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
              {certificates.map(({ id, src, href }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
    
                  <div className="flex items-center justify-center">
                    <a href={href}>
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hove:scalw-105">
                        Enlarge
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Certification