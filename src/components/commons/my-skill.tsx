import {
  DockerIcon,
  ExpressIcon,
  NestIcon,
  NextIcon,
  PostgreIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../icons";

export function MySkillSection() {
  return (
    <section id="my-skill">
      <div className="mt-4 mb-24 px-28 py-6">
        <h4 className="text-center text-5xl font-normal">
          My <span className="font-bold">Skills</span>
        </h4>
        <div className="mt-24 grid grid-cols-5 gap-x-20 gap-y-14">
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <TypescriptIcon className="size-20" />
            <p className="text-2xl font-bold">Typescript</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <ReactIcon className="size-20" />
            <p className="text-2xl font-bold">React.Js</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <TailwindIcon className="size-20" />
            <p className="text-2xl font-bold">Tailwind</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <ReactQueryIcon className="size-20" />
            <p className="text-2xl font-bold">React Query</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <ReduxIcon className="size-20" />
            <p className="text-2xl font-bold">Redux</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <NextIcon className="size-20" />
            <p className="text-2xl font-bold">Next.Js</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <NestIcon className="size-20" />
            <p className="text-2xl font-bold">Nest.Js</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <PostgreIcon className="size-20" />
            <p className="text-2xl font-bold">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <ExpressIcon className="size-20" />
            <p className="text-2xl font-bold">Express</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-8 rounded-sm border-2 border-black py-12">
            <DockerIcon className="size-20" />
            <p className="text-2xl font-bold">Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
}
