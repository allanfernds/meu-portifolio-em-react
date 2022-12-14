import { TabGroup } from "@statikly/funk";
import React, { Component } from "react";
import { ProjectCard } from "./ProjectCard";

export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="mb-16">
        <div className="bg-white ">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h3 className="text-center pt-5 text-2xl font-bold text-black md:text-4xl">
              Projetos
            </h3>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md"></div>
          <ProjectCard />
        </div>
      </div>
    );
  }
}
