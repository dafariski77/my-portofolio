import Image from "next/image";

export function AboutMeSection() {
  return (
    <section id="about-me">
      <div className="px-28 py-24">
        <div className="flex flex-row items-start gap-x-28">
          <Image
            src={"/about-me.svg"}
            alt="about-me"
            width={525}
            height={572}
          />
          <div>
            <h4 className="text-left text-5xl font-normal">
              About <span className="font-bold">Me</span>
            </h4>
            <div className="mt-10 flex flex-col gap-y-4 pe-6 leading-relaxed text-zinc-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                sunt inventore quasi minima fugit dolor facere? Labore sequi
                mollitia dolores nihil atque. Dolore voluptas deserunt earum
                vitae inventore alias possimus et vero? Totam explicabo magni
                atque autem obcaecati veniam architecto sequi, deleniti porro,
                facere aut facilis quisquam voluptates culpa cumque velit ut
                vero! Laborum, ipsam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vitae omnis deserunt rerum id temporibus aliquam velit
                distinctio tenetur sunt excepturi, iusto voluptates
                reprehenderit quaerat? Labore deserunt reiciendis corrupti
                ipsam, velit perspiciatis praesentium dicta maxime nesciunt,
                amet recusandae eius tempore minus quis repudiandae voluptates
                sint fugiat at nihil obcaecati optio inventore nobis placeat!
                Nam voluptatibus fugiat repudiandae in laboriosam pariatur cum
                quibusdam eaque eum corrupti consequatur
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vitae omnis deserunt rerum id temporibus aliquam velit
                distinctio tenetur sunt excepturi, iusto voluptates
                reprehenderit quaerat? Labore deserunt reiciendis corrupti
                ipsam, velit perspiciatis praesentium dicta maxime nesciunt,
                amet recusandae eius tempore minus quis repudiandae voluptates
                sint fugiat at nihil obcaecati optio inventore nobis placeat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
