import React, { Component } from "react";
import alan_fernandes from "../assets/images/alan_fernandes.png";
import Formations from "./Formations";
import blackbar from "../assets/images/blackbar.png";

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
                  Eu sou natural de Feira de Santana, Bahia, e tenho cerca de 4
                  anos de experiência em programação. Além de atuar como
                  desenvolvedor web freelancer, também dou aulas particulares de
                  lógica de programação, com ênfase em Python e JavaScript.
                  Atualmente, sou estudante de desenvolvimento web full-stack na
                  Trybe.
                </p>
                <p className="mt-4 text-gray-200">
                  Minhas paixões incluem jogos online, codificação, criação de
                  enigmas e leitura. Tenho trabalhado com JavaScript, React,
                  Node, CSS, HTML e Python. O interesse por tecnologia começou
                  por um erro que tive quando tentei jogar Minecraft em 2013.
                  Esse erro me levou a aprender habilidades valiosas como
                  pesquisar soluções, entender e solucionar erros, e
                  compartilhar soluções de forma clara.
                </p>
                <p className="mt-4 text-gray-200">
                  Desde então, erros sempre foram bem-vindos na minha jornada
                  como desenvolvedor, pois eles me permitem aprender e crescer
                  continuamente. Por mais que eu busque ser um criador de
                  soluções, sempre encaro os erros como uma oportunidade única
                  de aprendizado.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={blackbar} alt="barra preta" width={"100%"} />
        <Formations />
      </>
    );
  }
}
