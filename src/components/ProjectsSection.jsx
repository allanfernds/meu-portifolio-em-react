import React, { Component } from "react";
import { ProjectCard } from "./ProjectCard";

export default class ProjectsSection extends Component {
  render() {
    return (
      <div id="projects" className="flex justify-center bg-white">
        <section className="lg:max-w-4xl flex-col justify-center content-center">
          <h2 className="text-center pt-5 text-2xl font-bold text-gray-800 md:text-4xl">
            PROJETOS
          </h2>

          <div className="p-1 pt-0 md:flex justify-around items-center">
            <ProjectCard />
          </div>
        </section>
      </div>
    );
  }
}
