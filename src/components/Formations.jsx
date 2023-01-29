import React, { Component } from "react";
import FormationCard from "./FormationCard";

export default class Formations extends Component {
  render() {
    return (
      <div id="formation" className="flex justify-center ">
        <section className="lg:max-w-4xl flex-col justify-center content-center">
          <h2 className="underline decoration-blue-500 text-center pt-5 text-2xl font-bold text-gray-900y md:text-4xl">
            FORMAÇÃO
          </h2>

          <div className="p-1 pt-0  md:flex justify-around items-center">
            <FormationCard
              instituicao="Trybe"
              curso="Desenvolvimento Web"
              descricao="Formação que aborda fundamentos de desenvolvimento
            web, desenvolvimento, Front-End, Back-End, Ciência da computação, metodologias
            ágeis e habilidades comportamentais."
            />
            <FormationCard
              instituicao="One Bit Code"
              curso="Programador FullStack JavaScript"
              descricao="Curso prático focado em formar Desenvolvedores FullStack para o mercado de trabalho com enfase em Tecnologias como: HTML, CSS, JavaScript, React, NodeJS, TypeScript, SQL, MongoDB e +"
            />
          </div>
        </section>
      </div>
    );
  }
}
