import React, { Component } from 'react';
import { FooterCard } from './FooterCard';

export default class Footer extends Component {
  render() {
    return (
      <footer
        id="footer"
        className="bg-zinc-900 w-full border- py-10 flex flex-col justify-center items-center content-center mt-14 "
      >
        {/* <FooterCard /> */}
        <div>
          <p className="text-gray-400 pt-1">
            Desenvolvido por{' '}
            <a
              className="text-blue-500"
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
