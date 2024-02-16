import React from 'react';
import { CheckFat } from '@phosphor-icons/react';

function MoreInfo() {
  return (
    <section className="bg-gradient-to-tl from-extendcolor01-0 to-neutral-900 text-gray-100 font-archivo w-full mt-20">
      <div className="flex flex-col items-center justify-center p-6 py-12  space-y-24 lg:px-8 ">
        <div>
          <h1 className=" text-center pt-5 pl-4 md:pl-9 text-2xl font-bold text-sky-50 font-archivo md:text-4xl">
            Modernize seu negócio<span className="text-sky-500">_</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-400">
            Três importantes aspectos de trazer tecnologia para a sua empresa
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap w-full flex-col lg:flex-row">
            <div className="flex lg:w-1/3 p-4">
              <div className="flex-shrink-0">
                <CheckFat size={32} color="#38bdf8" weight="fill" />
              </div>
              <div className="ml-4 ">
                <h2 className="text-xl font-medium leadi text-gray-50">
                  Automatização de Processos
                </h2>
                <p className="mt-2 text-gray-400">
                  Aumento da eficiência operacional. <br />
                  Redução de erros e retrabalho.
                </p>
              </div>
            </div>
            <div className="flex lg:w-1/3 p-4">
              <div className="flex-shrink-0">
                <CheckFat size={32} color="#38bdf8" weight="fill" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium leadi  três importantes aspectos de trazer tecnologia para o seu negóciotext-gray-50">
                  Análise de Dados
                </h3>
                <p className="mt-2 text-gray-400">
                  Tomada de decisões mais informadas. <br />
                  Antecipação de tendências de mercado.
                </p>
              </div>
            </div>
            <div className="flex lg:w-1/3 p-4">
              <div className="flex-shrink-0">
                <CheckFat size={32} color="#38bdf8" weight="fill" />
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-medium leadi text-gray-50">
                  Presença Online
                </h4>
                <p className="mt-2 text-gray-400">
                  Ampliação do alcance e visibilidade. <br />
                  Interação direta com clientes e marketing digital eficaz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreInfo;
