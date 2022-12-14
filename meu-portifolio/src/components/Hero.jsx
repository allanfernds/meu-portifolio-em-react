function Index() {
  return (
    <div className="bg-black py-20 overflow-y-hidden">
      {/* Code block starts */}
      <dh-component>
        <div className="bg-black">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white leading-7 md:leading-10">
                Desenvolvedor
                <span className="text-indigo-600"> Front-End</span>
              </h1>
              <p className="mt-6 sm:mt-6 lg:w-10/12 text-gray-300 font-normal text-center text-sm sm:text-lg">
                Meu objetivo é melhorar o mundo através da tecnologia
              </p>
            </div>
          </div>
        </div>
      </dh-component>
    </div>
  );
}

export default Index;
