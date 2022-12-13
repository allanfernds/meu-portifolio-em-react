import React, { Component } from "react";
import alan_fernandes from "../assets/images/alan_fernandes.png";

export default class About extends Component {
  render() {
    return (
      <div class="bg-black py-16">
        <div class="container px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:flex md:gap-6 md:space-y-0 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img src={alan_fernandes} alt="Alan Fernandes" loading="lazy" />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl font-bold text-white md:text-4xl">
                Sobre mim
              </h2>
              <p class="mt-6 text-gray-200">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p class="mt-4 text-gray-200">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
