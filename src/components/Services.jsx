import ServiceCard from './ServiceCard';
import automation from '../assets/images/robo-industrial.png';
import ecommerce from '../assets/images/e-commerce.png';
import website from '../assets/images/designer-de-web.png';

function Services() {
  return (
    <section className="py-12 px-4 lg:px-0  text-gray-100 sm:py-12 lg:py-16 w-full font-archivo">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-archivo leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">
            Serviços<span className="text-sky-400">_</span>
          </h2>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <ServiceCard
            icon={automation}
            description="Crio Bots autônomos para realizar tarefas repetitivas, como buscar dados em diferentes sites, enviar e-mails, gerar relatórios e muito mais."
            title="Automação de tarefas"
          />
          <ServiceCard
            icon={ecommerce}
            description="Criação de Loja Online, gestão de processos voltados a E-commerces e Marketplaces. Venda e receba pagamentos através da Internet."
            title="Gestão de E-commerce"
          />
          <ServiceCard
            icon={website}
            description="Desenvolvedor de Sites, HotSites, Landing-Pages, especialista em HTML, CSS, JavaScript, React, MySql."
            title="Criação de sites"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
