import React, { Component } from 'react';
import alan_fernandes from '../assets/images/alan_fernandes.png';
import Formations from './Formations';
import blackbar from '../assets/images/blackbar.png';

export default class About extends Component {
  render() {
    return (
      <>
        <div id="about" className="bg-black py-16 flex justify-center">
          <div className="container px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src={alan_fernandes} alt="Alan Fernandes" loading="lazy" />
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="underline decoration-blue-500 text-2xl font-bold text-white md:text-4xl">
                  SOBRE MIM
                </h2>
                <p className="mt-6 text-gray-200">
                  Olá, sou Alan Fernandes, um Analista de E-commerce com
                  experiência de 2 anos no setor de eletrônicos. Atualmente,
                  estou buscando uma nova oportunidade como Desenvolvedor
                  Fullstack Junior. Estou cursando Desenvolvimento Web Fullstack
                  na Trybe, onde estou aprimorando minhas habilidades em
                  JavaScript, TypeScript, Node.js, Python, MySQL e React.
                </p>
                <p className="mt-4 text-gray-200">
                  Sou apaixonado por resolver problemas e criar soluções
                  inovadoras. Adoro compartilhar conhecimento e aprender com a
                  comunidade. Se você está procurando um profissional dedicado,
                  curioso e com ampla bagagem em programação, vamos nos
                  conectar!.{' '}
                  <a
                    href="https://www.linkedin.com/in/alanfernds/"
                    alt="linkedin alan fernades"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-600 hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={blackbar} alt="barra preta" width={'100%'} />
        <Formations />
      </>
    );
  }
}
