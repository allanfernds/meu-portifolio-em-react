/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

export default class FormationCard extends Component {
  render() {
    const { instituicao, curso, descricao } = this.props;
    return (
      <div className="px-7 md:flex justify-around">
        <div className="mt-16 flex justify-between py-6 px-4 max-w-sm lg:max-w-5xl bg-white rounded-lg shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40">
          <div className="flex items-center space-x-4 px-6 py-3">
            <div className="flex flex-col my-16 space-y-1">
              <span className="font-semibold">{instituicao}</span>
              <strong className="text-indigo-500">{curso}</strong>
              <p className="text-sm text-gray-700 font-medium ">{descricao}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
