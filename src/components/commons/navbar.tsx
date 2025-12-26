import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white px-28 py-6">
      <div className="flex items-center px-2">
        <div className="shrink-0">
          <h4 className="text-xl font-bold">Personal</h4>
        </div>

        <div className="flex flex-1 justify-center">
          <ul className="flex gap-8 font-semibold">
            <li>
              <Link href="#about">About Me</Link>
            </li>
            <li>
              <Link href="#about">Skills</Link>
            </li>
            <li>
              <Link href="#about">Project</Link>
            </li>
            <li>
              <Link href="#about">Contact Me</Link>
            </li>
          </ul>
        </div>

        <div className="shrink-0">
          <Button className="flex items-center gap-2 rounded-none font-semibold">
            Resume <Download className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
