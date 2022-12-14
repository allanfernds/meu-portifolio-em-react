import cvmaker from "../assets/images/cvmaker.png";
import dreamsstore from "../assets/images/dreamsstore.png";

function Card3({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  link,
}) {
  return (
    <div className="rounded-lg p-6 shadow-sm bg-white shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40">
      <div className="rounded-lg">
        <a target="blank" href={link}>
          <img
            className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </a>
      </div>
      <h3 className="pt-5 text-[14px] font-medium text-indigo-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition mt-2">
        {description}
      </p>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
      <Card3
        heading="CV Maker"
        description="Um criador de curriculos que converte dados do usuário em um CV em PDF ja formatado"
        thumbnailSrc={cvmaker}
        link="https://easy-cv-xi.vercel.app/"
      />
      <Card3
        heading="PoupaPig"
        description="Página de login feita em React e estilizada com TailWind"
        thumbnailSrc="https://github.com/allanfernds/poupapig/raw/main/layout.jpeg"
        link="https://github.com/allanfernds/poupapig"
      />
      <Card3
        heading="Bino Móveis"
        description="Landing-Page feita para uma industria de móveis planejados"
        thumbnailSrc="https://github.com/allanfernds/bino-moveis/raw/main/img/layout.png"
        link="https://github.com/allanfernds/bino-moveis"
      />
      <Card3
        heading="Dreams Store"
        description="E-commerce completo de produtos eletrônicos"
        thumbnailSrc={dreamsstore}
        link="https://www.dreamsstorebr.com.br/"
      />
    </div>
  );
}

export { ProjectCard };
