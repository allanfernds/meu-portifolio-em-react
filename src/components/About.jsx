import alan_fernandes from '../assets/images/alan_fernandes.webp';
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
        className="container mb-20 flex justify-center items-center px-2 "
      >
        <div className="container text-gray-600 p-6 bg-gradient-to-tl from-extendcolor01-0 to-neutral-900 rounded-sm border-2 border-neutral-900 max-w-[1008px]">
          <div className="flex justify-center items-center flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:items-stretch md:gap-6 lg:gap-12 flex-wrap md:flex-nowrap">
            <div className="">
              <img
                draggable="false"
                className="rounded-sm container max-w-[950px]"
                src={alan_fernandes}
                alt="Alan Fernandes"
                loading="lazy"
              />
            </div>
            <div className="md:7/12 lg:w-full flex flex-col">
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
                  Sou Alan Fernandes Atualmente sou freelancer como
                  Desenvolvedor. Desenvolvo Páginas web modernas, E-commerces e
                  Robôs para automação de processos. Tenho 23 anos e sou natural
                  de Feira de Santana BA
                </p>
              </div>
              <ul className="flex items-center  lg:justify-start gap-3 mt-8">
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    aria-label="Me siga no instagram"
                    href="http://instagram.com/_alanfernds/"
                    target="blank"
                    alt="icone-instagram"
                  >
                    <InstagramLogo size={32} color="#38bdf8" />
                  </a>
                </li>
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    aria-label="Me siga no linkedin"
                    href="https://www.linkedin.com/in/alanfernds/"
                    target="blank"
                    alt="icone-linkedin"
                  >
                    <LinkedinLogo size={32} color="#38bdf8" />
                  </a>
                </li>
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    aria-label="Me siga no Medium"
                    href="https://medium.com/@alanfernandes.mm"
                    target="blank"
                    alt="icone-medium"
                  >
                    <GithubLogo size={32} color="#38bdf8" />
                  </a>
                </li>
                <li className="border-2 p-4 rounded-md bg-extendcolor01-0 border-neutral-700 hover:border-sky-500 hover:scale-105 transition">
                  <a
                    aria-label="Me siga no Githun"
                    href="https://github.com/allanfernds/"
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
      <Experiences />
    </>
  );
}
