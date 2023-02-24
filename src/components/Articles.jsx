import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

export default class Articles extends Component {
  render() {
    return (
      <>
        <div id="articles" className="p-6 mt-20 flex justify-center ">
          <section className="lg:max-w-4xl flex-col justify-center content-center">
            <h2 className="underline decoration-blue-500 text-center pt-5 text-2xl font-bold text-gray-900y md:text-4xl">
              ARTIGOS
            </h2>

            <div className="p-1 pt-0  flex-col justify-around items-center">
              <ArticleCard
                title="Como um erro me levou ao amor pela programação"
                description="Eu sempre tive fascínio por tecnologia, mas foi um erro que me levou a aprender e amar a programação. Em 2013, quando o YouTube começou a ficar popular na minha região"
                theme="Programação"
                data={"fev 01, 2023"}
                link="https://medium.com/@alanfernandes.mm/como-um-erro-me-levou-ao-amor-pela-programação-d67b2aaa29da"
              />
              <ArticleCard
                title="Ciclo de Vida de um Componente em React"
                description="Ciclos de vida em são conceitos essenciais para quem está se aventurando no React, tendo em vista que com estes conceitos podemos tornar nossas aplicações mais optimizadas"
                theme="ReactJS"
                data={"oct 29, 2022"}
                link="https://medium.com/@alanfernandes.mm/ciclo-de-vida-de-um-componente-em-react-2076233536b0"
              />
            </div>
          </section>
        </div>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
      </>
    );
  }
}
