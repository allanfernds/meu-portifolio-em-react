import alan_fernandes from '../assets/images/alan_fernandes.png';
import Experiences from './Experiences';

import {
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  GithubLogo,
} from '@phosphor-icons/react';

export default function About() {
  return (
    <>
      <div
        id="about"
        className="container mb-20 flex justify-center items-center px-4 lg:px-16"
      >
        <div className="container text-gray-600 p-3 bg-gradient-to-tl from-extendcolor01-0 to-neutral-900 rounded-sm border-2 border-neutral-700 ">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row lg:items-stretch md:gap-6 lg:gap-12 flex-wrap md:flex-nowrap">
            <div className=" xl:w-3/4">
              <img
                className="rounded-sm container"
                src={alan_fernandes}
                alt="Alan Fernandes"
                loading="lazy"
              />
            </div>
            <div className="md:7/12 lg:w-full flex flex-col justify-between">
              <div>
                <h2 className="text-lg lg:text-2xl mt-4 font-archivo text-sky-400">
                  Quem sou
                </h2>
                <h1 className=" text-4xl font-archivo text-white mt-2">
                  Alan Fernandes
                </h1>
                <h2 className="mt-2 text-lg font-archivo text-sky-50 font-thin">
                  Web Developer & E-commerce Manager
                </h2>
                <p className="mt-4 font-extralight text-lg text-white w-full ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque magni laudantium nemo dolorum asperiores amet
                  recusandae ipsa quos omnis optio nobis sapiente sequi tempora
                  nesciunt, minima possimus qui ea eaque! laudantium nemo
                  dolorum asperiores amet recusandae ipsa quos omnis optio nobis
                  sapiente sequi tempora nesciunt, minima possimus qui ea eaque!
                </p>
              </div>
              <ul className="flex gap-3 mt-8">
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    href="http://instagram.com/_alanfernds/"
                    target="blank"
                    alt="icone-instagram"
                  >
                    <InstagramLogo size={40} color="#38bdf8" />
                  </a>
                </li>
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    href="http://instagram.com/_alanfernds/"
                    target="blank"
                    alt="icone-linkedin"
                  >
                    <LinkedinLogo size={40} color="#38bdf8" />
                  </a>
                </li>
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    href="https://github.com/allanfernds"
                    target="blank"
                    alt="icone-medium"
                  >
                    <GithubLogo size={40} color="#38bdf8" />
                  </a>
                </li>
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    href="http://instagram.com/_alanfernds/"
                    target="blank"
                    alt="icone-medium"
                  >
                    <MediumLogo size={40} color="#38bdf8" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Experiences />
    </>
  );
}
