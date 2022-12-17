import React, { Component } from "react";
import { FooterCard } from "./FooterCard";

export default class Footer extends Component {
  render() {
    return (
      <footer
        id="contact"
        className="bg-black py-10 flex flex-col justify-center items-center content-center mt-14"
      >
        <h2 class="text-center mb-10 text-2xl font-bold text-white md:text-4xl">
          CONTATO
        </h2>
        <FooterCard />
        <div>
          <p className="text-gray-400 pt-1">
            developed by{" "}
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
