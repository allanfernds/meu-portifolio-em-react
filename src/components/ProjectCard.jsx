function ProjectCard({ title, description, link }) {
  return (
    <div class="relative flex flex-col justify-center overflow-hidden font-archivo gap-4">
      <div class="mb-4 group relative cursor-pointer overflow-hidden bg-gradient-to-tl from-extendcolor01-0 to-neutral-900 px-6 pt-10 rounded-lg  shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm  sm:px-6 pb-6 lg:px-10">
        <span class="absolute left-0 top-0 h-5 w-full  bg-sky-500 transition-all duration-300 group-hover:scale-[30]"></span>
        <div class="relative z-10 mx-auto max-w-md">
          <div class="space-y-6 pt-5 text-base leading-7 text-gray-50 transition-all duration-300 group-hover:text-white/90">
            <h2 className="text-2xl font-bold font-archivo">
              {title}
              <span className="text-sky-500">.</span>{' '}
            </h2>
            <p className="text-gray-300 h-20 text-lg lgtext-xl group-hover:text-white whitespace-normal">
              {description}
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p className=" font-bold">
              <a
                target="_blank"
                href={link}
                alt={title}
                className="text-sky-500 text-lg transition-all duration-300 group-hover:text-white"
                rel="noreferrer"
              >
                Visualizar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
