import { Wrench, Kanban, UsersThree, Coffee } from '@phosphor-icons/react';
import { useState } from 'react';

const ContactForm = () => {
  // Estados para armazenar os dados do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário
  const handleMailToClick = () => {
    const subject = encodeURIComponent('Contato do Formulário'); // Assunto do e-mail
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
    ); // Corpo do e-mail

    const mailtoLink = `mailto:alanfernandes.mm@gmail.com?subject=${subject}&body=${body}`;

    // Abre o cliente de e-mail padrão do usuário com os dados preenchidos
    window.location.href = mailtoLink;
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 font-archivo">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('../assets/images/oculos-vr.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <h2 className="text-gray-50 text-center mb-20 text-3xl">
              Fale comigo<strong className="text-sky-400">_</strong>
            </h2>
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="border-b-2  block min-h-[auto] w-full  border-0 bg-transparent py-[0.32rem] px-3 text-white "
                      id="exampleInput90"
                      placeholder="Nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="email"
                      className="border-b-2  block min-h-[auto] w-full  border-0 bg-transparent py-[0.32rem] px-3 text-white "
                      id="exampleInput91"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <textarea
                      className="border-b-2  block min-h-[auto] w-full  border-0 bg-transparent py-[0.32rem] px-3 text-white "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Como eu posso te ajudar?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={handleMailToClick}
                    className="bg-gradient-to-l from-sky-600 via-sky-400 to-sky-500 w-full block text-center py-2  rounded-sm text-gray-50 hover:scale-105 ease-out transition-all text-lg p-x2"
                  >
                    Enviar E-mail
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-white p-4 text-sky-400">
                          <Wrench size={32} color="#38bdf8" weight="fill" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2  text-lg  text-white">
                          Suporte Técnico
                        </p>
                        <p className="mb-2 font-thin text-gray-50 ">
                          Te ajudo a resolver tudo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-white p-4 text-sky-400">
                          <Kanban size={32} color="#38bdf8" weight="fill" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2  text-lg  text-white">Orçamento</p>
                        <p className="mb-2 font-thin text-gray-50 ">
                          Vamos planejar um projeto juntos
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-white p-4 text-sky-400">
                          <UsersThree size={32} color="#38bdf8" weight="fill" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2  text-lg  text-white">Parcerias</p>
                        <p className="mb-2 font-thin text-gray-50 ">
                          Vamos de zap
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0 ">
                        <div className="inline-block rounded-md bg-white p-4 text-sky-400">
                          <Coffee size={32} color="#38bdf8" weight="fill" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2  text-lg  text-white">Café</p>
                        <p className="mb-2 font-thin text-gray-50 ">
                          Você paga
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
