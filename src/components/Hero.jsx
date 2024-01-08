function Index() {
  return (
    <div className="bg-neutral-900  py-20 overflow-y-hidden">
      <div id="hero" className="pt-20">
        <div className="container  flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-left flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-left text-white leading-7 md:leading-10 font-archivo">
              Ajudando empresas a construirem{' '}
              <span className="animate-bounce text-sky-400">
                soluções digitais
              </span>{' '}
              modernas e de alta qualidade
            </h1>
            <p className="mt-6 text-gray-300 text-left w-2/3 text-xl font-archivo font-thin">
              Automatizo processos, gerencio E-commerces, desenvolvo sistemas e
              uns sites bonitos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
