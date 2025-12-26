import { ASSETS } from "@/constants/assets";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="about" className="h-[90vh] w-full">
      <div className="px-28 py-6">
        <div className="pointer-events-none absolute inset-y-0 right-28 z-0 w-7/12">
          <div className="relative h-full w-full">
            <Image
              src={ASSETS.HERO_BANNER}
              alt="accent-bg"
              fill
              priority
              className="object-contain object-bottom-right lg:object-right"
            />
          </div>
        </div>
        <div className="relative w-7/12 px-2 pt-40">
          <div className="flex flex-col gap-y-8">
            <p className="text-5xl font-normal">
              Hello I&apos;am{" "}
              <span className="font-bold">Riski Dafa Setyawan.</span>
            </p>
            <p className="text-5xl font-bold">
              Fullstack{" "}
              <span className="text-white [text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000]">
                Developer
              </span>
            </p>
            <p className="text-5xl font-normal">
              Based in <span className="font-bold">Indonesia</span>
            </p>
          </div>
          <div className="mt-16 w-10/12">
            <p className="text-base leading-relaxed font-normal text-zinc-500">
              I&apos;m Dafa Riski Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
          </div>
          <div className="mt-36 flex flex-row items-center gap-x-8">
            <div className="flex size-16 items-center justify-center rounded-sm bg-black">
              <Github strokeWidth={0} fill="white" className="size-8" />
            </div>
            <div className="flex size-16 cursor-pointer items-center justify-center rounded-sm border-2 border-black bg-white">
              <Linkedin strokeWidth={1.2} fill="white" className="size-8" />
            </div>
            <div className="flex size-16 cursor-pointer items-center justify-center rounded-sm border-2 border-black bg-white">
              <Facebook strokeWidth={1.2} fill="white" className="size-9" />
            </div>
            <div className="flex size-16 cursor-pointer items-center justify-center rounded-sm border-2 border-black bg-white">
              <Instagram strokeWidth={1.2} fill="white" className="size-8" />
            </div>
            <div className="flex size-16 cursor-pointer items-center justify-center rounded-sm border-2 border-black bg-white">
              <Youtube strokeWidth={1.2} fill="white" className="size-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
