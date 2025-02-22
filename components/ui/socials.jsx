import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="">
      <ul className="flex max-md:flex-col gap-8 overflow-hidden">
        <li className="flex text-titleWhite gap-2 animate-appearsAzra opacity-0">
          <Link
            href="https://github.com/Spectrenard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center">
              <Image
                className="filter invert"
                src={"/images/github.svg"}
                height={23}
                width={23}
                alt="githubicon"
              />
              <span className="ml-2">Github</span>
            </span>
          </Link>
        </li>
        <li className="flex text-titleWhite gap-2 animate-appearsAzra opacity-0"></li>
      </ul>
    </div>
  );
}
