import Image from "next/image";

export function MyExperienceSection() {
  return (
    <section id="my-experience">
      <div className="bg-black px-28 py-24">
        <h4 className="text-center text-5xl font-normal text-white">
          My <span className="font-bold">Skills</span>
        </h4>
        <div className="mt-24 flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-4 rounded-lg border-2 border-zinc-500 px-6 py-8">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-x-6">
                <Image
                  src={"/google.svg"}
                  alt="google"
                  width={32}
                  height={32}
                  className="size-8"
                />
                <p className="text-xl font-semibold text-white">
                  Frontend Developer
                </p>
              </div>
              <div className="">
                <p className="font-semibold text-zinc-300">
                  Sep 2024 - Present
                </p>
              </div>
            </div>
            <p className="leading-relaxed text-zinc-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              culpa repellendus facilis corrupti officia sed delectus deserunt
              sapiente, fugit, dolor aliquam recusandae repudiandae labore
              corporis! Sed facilis qui hic labore quod, maiores illum fugit
              placeat sapiente. Vitae iure quis aliquam hic explicabo, earum
              cumque officia, ducimus repellendus et sapiente facere placeat
              molestiae sit ullam ab deleniti suscipit illum! Quae, rem culpa
              debitis omnis quidem vel eum, dignissimos tempore dolorem neque
              cupiditate nihil laboriosam dicta soluta voluptas dolores
              temporibus pariatur accusantium.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 rounded-lg bg-zinc-800 px-6 py-8">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-x-6">
                <Image
                  src={"/google.svg"}
                  alt="google"
                  width={32}
                  height={32}
                  className="size-8"
                />
                <p className="text-xl font-semibold text-white">
                  Frontend Developer
                </p>
              </div>
              <div className="">
                <p className="font-semibold text-zinc-300">
                  Sep 2024 - Present
                </p>
              </div>
            </div>
            <p className="leading-relaxed text-zinc-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              culpa repellendus facilis corrupti officia sed delectus deserunt
              sapiente, fugit, dolor aliquam recusandae repudiandae labore
              corporis! Sed facilis qui hic labore quod, maiores illum fugit
              placeat sapiente. Vitae iure quis aliquam hic explicabo, earum
              cumque officia, ducimus repellendus et sapiente facere placeat
              molestiae sit ullam ab deleniti suscipit illum! Quae, rem culpa
              debitis omnis quidem vel eum, dignissimos tempore dolorem neque
              cupiditate nihil laboriosam dicta soluta voluptas dolores
              temporibus pariatur accusantium.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 rounded-lg border-2 border-zinc-500 px-6 py-8">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-x-6">
                <Image
                  src={"/google.svg"}
                  alt="google"
                  width={32}
                  height={32}
                  className="size-8"
                />
                <p className="text-xl font-semibold text-white">
                  Frontend Developer
                </p>
              </div>
              <div className="">
                <p className="font-semibold text-zinc-300">
                  Sep 2024 - Present
                </p>
              </div>
            </div>
            <p className="leading-relaxed text-zinc-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              culpa repellendus facilis corrupti officia sed delectus deserunt
              sapiente, fugit, dolor aliquam recusandae repudiandae labore
              corporis! Sed facilis qui hic labore quod, maiores illum fugit
              placeat sapiente. Vitae iure quis aliquam hic explicabo, earum
              cumque officia, ducimus repellendus et sapiente facere placeat
              molestiae sit ullam ab deleniti suscipit illum! Quae, rem culpa
              debitis omnis quidem vel eum, dignissimos tempore dolorem neque
              cupiditate nihil laboriosam dicta soluta voluptas dolores
              temporibus pariatur accusantium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
