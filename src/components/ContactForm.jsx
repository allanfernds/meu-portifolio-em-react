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
    <div className="container rounded-md my-24 mx-auto md:px-6 bg-gradient-to-tl from-extendcolor01-0 to-neutral-900  w-full">
      <section className="mb-32 font-archivo">
        <div className="">
          <div className="block rounded-lg ] px-6 py-12  md:py-16 md:px-12">
            <h2 className="text-gray-50 text-center mb-20 text-3xl">
              Fale comigo<strong className="text-sky-400">_</strong>
            </h2>
            <div className=" flex gap-8 flex-row-reverse justify-center items-start flex-wrap">
              <div className=" w-full lg:w-1/2">
                <h3 className="text-sky-400 text-3xl pb-5 font-semibold">
                  Do que você precisa?
                </h3>
                <p className="font-archivo text-gray-400 text-2xl">
                  Um site? Ou quer automatizar tarefas chatas? Está planejando
                  organizar um e-commerce? Por favor, descreva aqui a sua
                  necessidade, e estarei à disposição para ajudar.
                </p>
              </div>
              <div className=" mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form className="flex flex-col w-full">
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      id="exampleInput90"
                      placeholder="Seu Nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="email"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 "
                      id="exampleInput91"
                      placeholder="Seu E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="relative mb-6">
                    <textarea
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 "
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
                    className="bg-gradient-to-l from-sky-600 via-sky-400 to-sky-500 w-full block text-center py-2  rounded-lg text-white font-bold border-transparent  hover:border-sky-100 ease-out transition-all text-lg p-x2"
                  >
                    Enviar E-mail
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
