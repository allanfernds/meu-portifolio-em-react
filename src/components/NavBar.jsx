/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';

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
      className={`w-full z-10 bg-extendcolor01-0 text-slate-50 fixed top-0 left-0 transition duration-500 ${
        showNavBar ? '-translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="justify-around px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#hero">
              <h2 className="text-2xl font-montserrat font-semibold">
                <span className="text-sky-500">{'<'}</span>
                Alan Fernandes
                <span className="text-sky-500">{'/>'}</span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
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
