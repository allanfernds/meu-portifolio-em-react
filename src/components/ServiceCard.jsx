/* eslint-disable react/style-prop-object */

function ServiceCard({ title, icon, description }) {
  return (
    <div class="border border-neutral-800 card text-gray-300  hover:brightness-90  transition-all cursor-pointer group bg-gradient-to-tl from-extendcolor01-0 to-neutral-900 hover:from-black hover:to-neutral-950  m-2 rounded-lg overflow-hidden relative">
      <div class="px-8 py-10">
        <div class="  relative w-28  mb-4 group-hover:-translate-y-1 group-hover:shadow-cyan-900 transition-all p-3 rounded-br-lg ">
          <img src={icon} alt="icone" />
        </div>
        <div class="uppercase font-bold text-xl lg:h-[56px] whitespace-pre-line">
          {title}
        </div>

        <div class="text-gray-400 mt-8 mb-20 ">
          <p>{description}</p>
        </div>
      </div>

      <div class="h-2 w-full bg-gradient-to-l via-sky-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
      <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-sky-950 group-hover:via-sky-500 w-[70%] m-auto rounded transition-all"></div>
    </div>
  );
}

export default ServiceCard;
