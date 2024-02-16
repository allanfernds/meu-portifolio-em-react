import minhaLogo from '../assets/images/alanlogo.svg';

function Index() {
  return (
    <div className="py-20 lg:py-48">
      <div id="hero" className="pt-20  flex">
        <div className="  flex items-center justify-center">
          <div className=" w-11/12 sm:w-5/6 flex justify-center  items-center md:items-start flex-col mb-5 sm:mb-10 gap-5">
            <h1 className=" text-center sm:text-left text-3xl max-w-[600px] text-white leading-8 lg:text-4xl md:leading-8 font-archivo">
              Ajudando empresas a construirem{' '}
              <span className="animate-bounce font-medium text-sky-400">
                soluções digitais
              </span>{' '}
              modernas e de alta qualidade
            </h1>
            <p className="max-w-[600px] text-center text-gray-300 md:text-left text-2xl font-archivo font-thin">
              Automatizo processos, gerencio <br /> E-commerces, desenvolvo
              sistemas <br /> e uns sites bonitos
            </p>
            <a
              className="bg-gradient-to-l from-sky-600 to-blue-500 w-[150px] block mt-2 text-center py-2 rounded-sm text-white hover:scale-105 ease-out transition-all text-lg px-2"
              href="http://instagram.com/_alanfernds/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <figure className="hidden md:block">
          <img src={minhaLogo} alt="logo alan fernandes" draggable="false" />
        </figure>
      </div>
    </div>
  );
}

export default Index;
