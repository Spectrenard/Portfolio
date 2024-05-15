import Image from "next/image";
import Link from "next/link";

export default function ProjectResume({ work }) {
  return (
    <div className="flex items-center justify-between my-5 mx-2">
      <div>
        <h3 className="text-titleWhite md:text-xl lg:text-2xl mb-1">
          {work.name}
        </h3>
        <h4 className="text-textWhite md:text-md">{work.theme}</h4>
      </div>
      <Link href={`/my-works/${work.id}`}>
        <button className="bg-invisible flex justify-center items-center gap-2 text-x text-textWhite p-4 lg:py-3 lg:px-7 border-solid border rounded-full border-white ease-out">
          <p className="text-lg max-lg:hidden">Learn more</p>
          <Image
            className="lg:ml-1 self-center"
            src={"/images/learn.svg"}
            alt="avatar"
            height={20}
            width={18}
          />
        </button>
      </Link>
    </div>
  );
}
