import cvmaker from '../assets/images/cvmaker.png';
import twenewsbot from '../assets/images/twenews.png';
import meucelularusado from '../assets/images/meucelularusado.png';
import geradorDeCertificado from '../assets/images/geradorDeCertificado.png';
import app_de_receita from '../assets/images/app_de_receitas.png';

function StackSpan(props) {
  return (
    <span className="bg-gray-700 px-1 mr-1 mt-1 inline-block font-medium text-white text-xs rounded-sm">
      {props.content}
    </span>
  );
}

function Card3({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = 'Thumbnail',
  link,
  stack,
}) {
  return (
    <div
      className="grid grid-rows-2 rounded-lg p-6 shadow-sm bg-slate-50 shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40"
      style={{ minHeight: '200px' }}
    >
      <div className="rounded-lg row-span-1">
        <a target="blank" href={link}>
          <img
            className="hover:scale-110 transition-all cursor-pointer w-full rounded-lg
            h-auto 
            "
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </a>
      </div>
      <div className="row-span-1">
        <h3 className="pt-5 text-[15px] font-medium text-indigo-600 block">
          {heading}
        </h3>
        <p className="font-normal text-gray-500 cursor-pointer text-sm duration-300 transition mt-2">
          {description}
        </p>
      </div>
      <div className="h-5 flex items-center">
        {stack
          ? stack.map((item, index) => (
              <StackSpan
                key={index}
                content={item}
                className={`ml-1 ${index === 0 ? 'ml-0' : ''}`}
              />
            ))
          : ''}
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
      <Card3
        heading="CV Maker"
        description="Um criador de curriculos que converte dados do usuário em um CV em PDF ja formatado."
        thumbnailSrc={cvmaker}
        link="https://easy-cv-xi.vercel.app/"
        stack={['ReactJS', 'CSS3', 'PDFMake']}
      />{' '}
      <Card3
        heading="PoupaPig"
        description="Página de login feita em React e estilizada com TailWind."
        thumbnailSrc="https://github.com/allanfernds/poupapig/raw/main/layout.jpeg"
        link="https://github.com/allanfernds/poupapig"
        stack={['ReactJS', 'TailWind']}
      />
      <Card3
        heading="Bino Móveis"
        description="Landing-Page feita para uma industria de móveis planejados."
        thumbnailSrc="https://github.com/allanfernds/bino-moveis/raw/main/img/layout.png"
        link="https://allanfernds.github.io/bino-moveis/"
        stack={['JavaScript', 'HTML5', 'CSS3']}
      />
      <Card3
        heading="Twenews Bot"
        description="Um chatbot que busca notícias do Twitter e envia para o Telegram."
        thumbnailSrc={twenewsbot}
        link="https://t.me/TweNewsBot"
        stack={['Python', 'Twitter API', 'Telegram API']}
      />
      <Card3
        heading="Meu Celular Usado"
        description="Sistema de precificação de smartphones usados."
        thumbnailSrc={meucelularusado}
        link="https://meucelularusado.com.br/"
        stack={['React', 'Tailwind', 'Firebase']}
      />
      <Card3
        heading="Gerador de Certificados"
        description="Esse é um script em Python que lê uma planilha de Excel com uma lista de nomes e gera certificados para cada nome."
        thumbnailSrc={geradorDeCertificado}
        link="https://github.com/allanfernds/gerador-de-certificados"
        stack={['Python', 'Pillow', 'Pandas']}
      />
      <Card3
        heading="App de Receitas"
        description="App de pesquisa de receitas com login, favoritos, bebidas, compartilhamento e marcador de progresso."
        thumbnailSrc={app_de_receita}
        link="https://github.com/allanfernds/app-de-receitas"
        stack={['React', 'CSS', 'Context API']}
      />
    </div>
  );
}

export { ProjectCard };
