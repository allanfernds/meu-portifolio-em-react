/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';

import minhaLogo02 from '../assets/images/alanlogo03.svg';

import { List, X } from '@phosphor-icons/react';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [showNavBar, hideNavBar] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        hideNavBar(false);
      } else {
        hideNavBar(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav
      id="header"
      className={`w-full z-[90] bg-extendcolor01-0 text-slate-50 fixed top-0 left-0 transition duration-500 ${
        showNavBar ? '-translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="justify-around px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#hero" className="flex justify-center items-center gap-2">
              <img
                className="w-10"
                src={minhaLogo02}
                alt="logo alan fernandes"
              />
              <h2 className=" text-xl leading-5 font-light font-archivo text-gray-100">
                Alan <br /> Fernandes
              </h2>
            </a>
            <div className="md:hidden transition-all">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <X size={32} color="#38bdf8" weight="bold" />
                ) : (
                  <List size={32} color="#38bdf8" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="relative text-gray-100 group">
                <a href="#about" className="no-underline">
                  Profissional
                  <span className="invisible md:visible absolute w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-sky-500 bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-2xl"></span>
                </a>
              </li>
              <li className="relative text-gray-100 group">
                <a href="#about" className="no-underline">
                  Redes sociais
                  <span className="invisible md:visible absolute w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-sky-500 bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-2xl"></span>
                </a>
              </li>
              <li className="relative text-gray-100 group">
                <a href="#about" className="no-underline">
                  Projetos
                  <span className="invisible md:visible absolute w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-sky-500 bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-2xl"></span>
                </a>
              </li>
              <li className="relative text-gray-100 group">
                <a href="#about" className="no-underline">
                  Home
                  <span className="invisible md:visible absolute w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-sky-500 bottom-0 left-0 origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-2xl"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
