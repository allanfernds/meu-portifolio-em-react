import React, { Component } from "react";
import FormationCard from "./FormationCard";

export default class Formations extends Component {
  render() {
    return (
      <div className="flex justify-center bg-gradient-to-b from-black via-black to-white">
        <section className="lg:max-w-5xl flex-col justify-center content-center">
          <h2 class="text-center pt-5 text-2xl font-bold text-white md:text-4xl">
            Formação
          </h2>

          <div class="p-8 pt-0  md:flex justify-around items-center">
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
