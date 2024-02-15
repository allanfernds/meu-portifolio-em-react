import VerticalTabs from './VerticalTabs';

export default function Experiences() {
  return (
    <>
      <section
        id="formation"
        className="bg-gradient-to-tl from-extendcolor01-0 to-neutral-900 w-full px-10 py-10 md:flex md:justify-around md:items-center"
      >
        <div>
          <h2 className=" text-left pt-5 pl-4 md:pl-9 text-2xl font-bold text-sky-50  font-archivo md:text-4xl">
            Experiências<span className="text-sky-500">_</span>
          </h2>
          <VerticalTabs />
        </div>
      </section>
    </>
  );
}
