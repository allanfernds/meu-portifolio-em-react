import React, { Component } from "react";

export default class SkillsCard extends Component {
  render() {
    const { stack, icon } = this.props;
    return (
      <div className="inline-block p-8 text-center w-48">
        <div className="p-1 flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-indigo-50">
          <img src={icon} alt={stack} width="40" />
        </div>
        <p className="font-bold tracking-wide text-gray-800">{stack}</p>
      </div>
    );
  }
}
