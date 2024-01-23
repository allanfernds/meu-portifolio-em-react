import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section className="py-12 px-8  bg-extendcolor01-0 text-gray-100 sm:py-12 lg:py-16 w-full font-archivo">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-archivo leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Projetos<span className="text-sky-400 font-bold text-5xl">_</span>
          </h2>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <ProjectCard
            title="Lorem Ipsum"
            description="Um criador de curriculos que converte dados do usuário em um CV em PDF ja formatado."
            link="https://easy-cv-xi.vercel.app/"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Página de login feita em React e estilizada com TailWind."
            link="https://github.com/allanfernds/poupapig"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Landing-Page feita para uma industria de móveis planejados."
            link="https://allanfernds.github.io/bino-moveis/"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Um chatbot que busca notícias do Twitter e envia para o Telegram."
            link="https://t.me/TweNewsBot"
          />
          <ProjectCard
            title="Lorem Ipsum"
            description="Sistema de precificação de smartphones usados."
            link="https://meucelularusado.com.br/"
          />
        </div>
      </div>
    </section>
  );
}
