import React, { Component } from "react";

export default class FormationCard extends Component {
  render() {
    const { instituicao, curso, descricao } = this.props;
    return (
      <div class="p-8 pt-0  md:flex justify-around">
        <div class="mt-16 flex justify-between py-6 px-4 max-w-sm lg:max-w-5xl bg-white rounded-lg shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40">
          <div class="flex items-center space-x-4 px-12 md:px-3 md:py-3">
            <div class="flex flex-col my-16 space-y-1">
              <span class="font-bold">
                {instituicao} <p className="text-indigo-500">{curso}</p>
                <p className="text-sm text-gray-700 font-medium ">
                  {descricao}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
