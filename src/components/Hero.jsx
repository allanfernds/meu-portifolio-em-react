import minhaLogo from '../assets/images/alanlogo.svg';

function Index() {
  return (
    <div className="py-20 overflow-y-hidden lg:py-48">
      <div id="hero" className="pt-20 flex">
        <div className="container flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 flex justify-center items-center md:items-start flex-col mb-5 sm:mb-10 gap-5">
            <h1 className=" text-center sm:text-left text-3xl max-w-[600px] text-white leading-8 lg:text-4xl md:leading-8 font-archivo">
              Ajudando empresas a construirem{' '}
              <span className="animate-bounce font-medium text-sky-400">
                soluções digitais
              </span>{' '}
              modernas e de alta qualidade
            </h1>
            <p className="max-w-[600px] text-center text-gray-300 md:text-left text-2xl font-archivo font-thin">
              Automatizo processos, gerencio E-commerces, desenvolvo sistemas e
              uns sites bonitos
            </p>
            <a
              className="bg-gradient-to-l bg-sky-600 w-[150px] block mt-2 text-center py-2  rounded-sm text-gray-50 hover:scale-105 ease-out transition-all text-lg p-x2"
              href="http://instagram.com/_alanfernds/"
              target="blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <figure className="hidden w-[900px] md:block">
          <img src={minhaLogo} alt="logo alan fernandes" draggable="false" />
        </figure>
      </div>
    </div>
  );
}

export default Index;
