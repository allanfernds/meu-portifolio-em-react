import { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState('Farmácia Brito'); // Estado para rastrear a guia ativa

  const data = [
    {
      label: 'Farmácia Brito',
      value: 'Farmácia Brito',
      office: 'Gestor e E-commcerce',
      date: 'Jul 2023 - Set 2023 (3 meses)',
      desc: `Durante meu período na Farmácia Brito, unifiquei meus conhecimentos em E-commerce e programação para desenvolver ferramentas que alavancassem as vendas. Atualmente, a empresa conta com um robô de ofertas criado por mim. Diariamente, esse robô envia automaticamente as ofertas do site da empresa para um grupo no Telegram. resultando em um aumento de vendas de 19,20%.`,
    },
    {
      label: 'Dreams Club',
      value: 'Dreams Club',
      office: 'Gestor de E-commerce E Marketplace',
      date: 'Jul 2023 - Set 2023 (3 meses)',
      desc: `Trabalhei na gestão e criação das plataformas de venda da empresa, implementando padrões de cadastro de produtos e otimizando a logística de entrega.`,
    },
    {
      label: 'Teste',
      value: 'Teste',
      office: 'Gestor de E-commerce',
      date: 'Jul 2023 - Set 2023 (3 meses)',
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.making mistakes. We're
      constantly trying to express ourselves and actualize our dreams`,
    },
  ];

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <Tabs
      value={activeTab}
      orientation="vertical"
      className="my-8 flex flex-col mx-auto lg:flex-row md:justify-center gap-16 px-4 md:px-10 lg:w-full"
    >
      <TabsHeader className="rounded-sm text-white bg-extendcolor01-0 lg:w-72">
        {data.map(({ label, value }) => (
          <Tab
            className={`text-xl py-4 hover:text-sky-400 border-l-4 ${
              activeTab === value
                ? 'text-sky-400 border-sky-400'
                : 'border-transparent'
            } hover:border-sky-400 transition border-spacing-2 flex justify-start pl-8`}
            key={value}
            value={value}
            onClick={() => handleTabClick(value)}
          >
            <p>{label}</p>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, date, office, label }) => (
          <TabPanel
            key={value}
            value={value}
            className="py-1 px-4 font-archivo text-white flex flex-col gap-5"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-xl font-medium text-white">{office}</h3>
              <span className="font-light text-gray-500">{date}</span>
            </div>
            <h3 className="text-sky-400 font-semibold text-lg">{label}</h3>
            <p className="font-normal text-gray-300 md:w-[600px]">{desc}</p>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
