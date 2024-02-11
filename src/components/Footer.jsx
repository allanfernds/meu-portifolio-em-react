import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer
        id="footer"
        className="bg-extendcolor01-0 w-full border- py-10 flex flex-col justify-center items-center content-center "
      >
        {/* <FooterCard /> */}
        <div>
          <p className="text-gray-400 pt-1">
            Desenvolvido por{' '}
            <a
              className="text-blue-400"
              target="blank"
              href="https://www.linkedin.com/in/alanfernds/"
            >
              Alan Fernandes
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
