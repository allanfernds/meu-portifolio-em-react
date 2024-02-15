import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 px-8  bg-extendcolor01-0 text-gray-100 sm:py-12 lg:py-16 w-full font-archivo">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className=" text-center pt-5 pl-4 md:pl-9 text-2xl font-bold text-sky-50 font-archivo md:text-4xl">
            Projetos<span className="text-sky-500">_</span>
          </h2>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <ProjectCard
            title="Dreams Club"
            description="Um site para um programa de Cashback"
            link="https://club.dreamsparts.com.br/"
          />
          <ProjectCard
            title="Grupo de Ofertas"
            description="Robô de grupo de ofertas para E-commerces"
            link="https://t.me/+l08dlX7748hmMTI5"
          />
          <ProjectCard
            title="Be The Law"
            description="Landing-Page feita para um curso de inglês instrumental"
            link="https://be-the-law.web.app/"
          />
          {/* <ProjectCard
            title="Lorem Ipsum"
            description="Um chatbot que busca notícias do Twitter e envia para o Telegram."
            link="https://t.me/TweNewsBot"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Sistema de precificação de smartphones usados."
            link="https://meucelularusado.com.br/"
          /> */}
        </div>
      </div>
    </section>
  );
}
