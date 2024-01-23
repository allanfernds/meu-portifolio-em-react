import minhaLogo from '../assets/images/alanlogo.svg';

function Index() {
  return (
    <div className="py-20 overflow-y-hidden">
      <div id="hero" className="pt-20 flex">
        <div className="container flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 flex justify-center items-center md:items-start flex-col mb-5 sm:mb-10 gap-5">
            <h1 className="text-center sm:text-left text-3xl text-white leading-8 md:leading-8 font-archivo">
              Ajudando empresas a construirem{' '}
              <span className="animate-bounce text-sky-400">
                soluções digitais
              </span>{' '}
              modernas e de alta qualidade
            </h1>
            <p className="text-center text-gray-300 md:text-left text-xl font-archivo font-thin">
              Automatizo processos, gerencio E-commerces, desenvolvo sistemas e
              uns sites bonitos
            </p>
            <a
              className="bg-gradient-to-l from-sky-600 via-sky-400 to-sky-500 w-[150px] block text-center py-2  rounded-sm text-gray-50 hover:scale-105 ease-out transition-all text-lg p-x2"
              href="http://instagram.com/_alanfernds/"
              target="blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <figure className="hidden  md:block">
          <img src={minhaLogo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Index;
