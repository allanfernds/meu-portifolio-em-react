import React, { Component } from "react";
import SkillsCard from "./SkillsCard";
import tailwindIcon from "../assets/images/tailwindIcon.png";

export default class SkillsSection extends Component {
  render() {
    return (
      <div id="skills" className="mb-16">
        <div className="bg-white ">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h3 className="underline decoration-blue-500 text-center pt-5 text-2xl font-bold text-gray-900 md:text-4xl">
              SKILLS
            </h3>
          </div>
        </div>
        <div className="px-4 sm:px-0">
          <div className="grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <SkillsCard
              stack="JavaScript"
              icon="https://img.icons8.com/ios/512/javascript.png"
            />
            <SkillsCard
              stack="HTML"
              icon="https://img.icons8.com/ios/512/html-5--v2.png"
            />
            <SkillsCard
              stack="CSS"
              icon="https://img.icons8.com/ios/512/css3.png"
            />
            <SkillsCard
              stack="React"
              icon="https://img.icons8.com/ios-filled/512/react-native.png"
            />
            <SkillsCard stack="TailWindCSS" icon={tailwindIcon} />
            <SkillsCard
              stack="Node"
              icon="https://img.icons8.com/windows/512/node-js.png"
            />
            <SkillsCard
              stack="Jest"
              icon="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/512/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-bold-tal-revivo.png"
            />
            <SkillsCard
              stack="Python"
              icon="https://img.icons8.com/ios/512/python.png"
            />
            <SkillsCard
              stack="Git"
              icon="https://img.icons8.com/windows/512/git.png"
            />
            <SkillsCard
              stack="Redux"
              icon="https://img.icons8.com/material-outlined/384/redux.png"
            />
            <SkillsCard
              stack="Firebase"
              icon="https://img.icons8.com/external-tal-revivo-light-tal-revivo/192/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-light-tal-revivo.png"
            />
            <SkillsCard
              stack="Figma"
              icon="https://img.icons8.com/ios/300/figma--v1.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
