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
                <h2 className="text-2xl font-bold text-white md:text-4xl">
                  Sobre mim
                </h2>
                <p className="mt-6 text-gray-200">
                  Sou natural de Feira de Santana BA, tenho aproximadamente 4
                  anos de experiencia em programação. Dou aulas particulares de
                  lógica de programação com ênfase em Python e JavaScript e atuo
                  como desenvolvedor WEB Freelancer.
                </p>
                <p className="mt-4 text-gray-200">
                  Atualmente, sou um estudante de desenvolvimento web full-stack
                  na Trybe. Minhas paixões são: jogos onlines, codar, criar
                  enigmas e ler! Tenho trabalhado com JavaScript, React, Node,
                  CSS, HTML e Python.
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
