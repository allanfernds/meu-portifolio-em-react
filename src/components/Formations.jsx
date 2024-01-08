import React, { Component } from 'react';
import VerticalTabs from './VerticalTabs';

export default class Formations extends Component {
  render() {
    return (
      <>
        <section
          id="formation"
          className="bg-black py-10 md:flex md:justify-around md:items-center"
        >
          <div>
            <h2 className=" text-left pt-5 pl-4 md:pl-9 text-2xl font-bold text-sky-50 font-archivo md:text-4xl">
              Experiências <span className="text-sky-500">_</span>
            </h2>
            <VerticalTabs />
          </div>
        </section>
      </>
    );
  }
}
