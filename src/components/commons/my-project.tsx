import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function MyProjectSection() {
  return (
    <section id="my-project">
      <div className="bg-black px-28 py-24">
        <h4 className="text-center text-5xl font-normal text-white">
          My <span className="font-bold">Projects</span>
        </h4>
        <div className="mt-24 flex flex-col gap-y-16">
          <div className="grid grid-cols-2 gap-x-6">
            <div className="flex w-full justify-start">
              <Image
                src={"/example-project.png"}
                alt="example-project"
                width={530}
                height={400}
                className="h-120 w-[96%] rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-8">
              <p className="text-5xl font-bold text-white">01</p>
              <p className="text-4xl font-bold text-white">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita earum at exercitationem explicabo harum tempore ipsum a
                accusantium dolore dicta, minima asperiores consequatur hic
                voluptas illum repudiandae minus in ducimus! Similique nam nisi
                ipsum cumque quia blanditiis architecto mollitia est?
              </p>
              <ExternalLink className="text-white" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <div className="flex flex-col justify-center gap-y-8">
              <p className="text-5xl font-bold text-white">02</p>
              <p className="text-4xl font-bold text-white">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita earum at exercitationem explicabo harum tempore ipsum a
                accusantium dolore dicta, minima asperiores consequatur hic
                voluptas illum repudiandae minus in ducimus! Similique nam nisi
                ipsum cumque quia blanditiis architecto mollitia est?
              </p>
              <ExternalLink className="text-white" />
            </div>
            <div className="flex w-full justify-end">
              <Image
                src={"/example-project.png"}
                alt="example-project"
                width={530}
                height={400}
                className="h-120 w-[96%] rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <div className="flex w-full justify-start">
              <Image
                src={"/example-project.png"}
                alt="example-project"
                width={530}
                height={400}
                className="h-120 w-[96%] rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-8">
              <p className="text-5xl font-bold text-white">03</p>
              <p className="text-4xl font-bold text-white">
                Lorem ipsum dolor sit.
              </p>
              <p className="text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita earum at exercitationem explicabo harum tempore ipsum a
                accusantium dolore dicta, minima asperiores consequatur hic
                voluptas illum repudiandae minus in ducimus! Similique nam nisi
                ipsum cumque quia blanditiis architecto mollitia est?
              </p>
              <ExternalLink className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
