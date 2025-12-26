import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactMeSection() {
  return (
    <section id="contact">
      <div className="px-28 py-24">
        <div className="grid grid-cols-2 gap-x-28">
          <div className="flex flex-col gap-y-6">
            <Input placeholder="Your name" />
            <Input placeholder="Email" />
            <Textarea placeholder="How can I help?" className="min-h-28" />
            <Button className="flex h-12 items-center gap-2 rounded-none text-lg font-semibold">
              Get In Touch
            </Button>
          </div>
          <div className="flex flex-col justify-center gap-y-6">
            <p className="text-5xl leading-snug font-bold">
              Let's{" "}
              <span className="text-white [text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000]">
                talk
              </span>{" "}
              for <br /> Something special
            </p>
            <p className="text-zinc-500">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <p className="text-2xl font-bold">dafariski555@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
