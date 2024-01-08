import React, { Component } from 'react';
import alan_fernandes from '../assets/images/alan_fernandes.png';
import Formations from './Formations';

import { InstagramLogo, LinkedinLogo, MediumLogo } from '@phosphor-icons/react';

export default class About extends Component {
  render() {
    return (
      <>
        <div id="about" className=" py-16 px-4 flex justify-center">
          <div className="container p-6 text-gray-600 md:px-12 xl:px-6 bg-neutral-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-neutral-700">
            <div className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src={alan_fernandes} alt="Alan Fernandes" loading="lazy" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className=" text-xl font-archivo text-sky-400">Quem sou</h2>
                <h1 className=" text-2xl font-archivo text-white mt-2">
                  Alan Fernandes
                </h1>
                <h2 className=" text-lg font-archivo text-sky-50 font-thin">
                  Web Developer & E-commerce Manager
                </h2>
                <p className="mt-4 text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque magni laudantium nemo dolorum asperiores amet
                  recusandae ipsa quos omnis optio nobis sapiente sequi tempora
                  nesciunt, minima possimus qui ea eaque!
                </p>
                <ul className="flex gap-3 mt-8">
                  <li className="border-2 p-2 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                    <a
                      href="http://instagram.com/_alanfernds/"
                      target="blank"
                      alt="icone-instagram"
                    >
                      <InstagramLogo size={32} color="#38bdf8" />
                    </a>
                  </li>
                  <li className="border-2 p-2 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                    <a
                      href="http://instagram.com/_alanfernds/"
                      target="blank"
                      alt="icone-linkedin"
                    >
                      <LinkedinLogo size={32} color="#38bdf8" />
                    </a>
                  </li>{' '}
                  <li className="border-2 p-2 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                    <a
                      href="http://instagram.com/_alanfernds/"
                      target="blank"
                      alt="icone-medium"
                    >
                      <MediumLogo size={32} color="#38bdf8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Formations />
      </>
    );
  }
}
