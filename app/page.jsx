import Header from "@/components/header";
import works from "../public/data/works.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredWorks = works.filter((work) => work.homepage);
  return (
    <div>
      <Header />

      <div className=" p-4 font-brico w-full ">
        <div className="flex justify-between">
          <h1 className="max-w-screen-md md:max-w-screen-sm text-textGray flex flex-wrap gap-x-4 text-3xl md:text-5xl font-clash my-14">
            <div className="overflow-hidden animate-appears7 opacity-0">
              <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100">
                Latest
              </span>
            </div>
            <div className="overflow-hidden animate-appears7 opacity-0">
              <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
                Projects
              </span>
            </div>
            <Link href="/my-works">
              <Image
                className="ml-1 hover:cursor-pointer md:hidden"
                src={"/chevron-right-small.svg"}
                alt="avatar"
                height={33}
                width={28}
              />
            </Link>
          </h1>
          <Link href="/my-works">
            <button className="max-md:hidden flex gap-2 items-center text-sm bg-invisible border-solid border border-textWhite rounded-full my-14 ">
              <span className="py-4 pl-9 pr-6 justify-center  flex items-center text-titleWhite">
                Check out all
                <Image
                  className="ml-1"
                  src={"/chevron-right-small.svg"}
                  alt="avatar"
                  height={23}
                  width={23}
                />
              </span>
            </button>
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-2  gap-y-24 md:gap-y-12 md:gap-x-5">
          {featuredWorks.map((work) => (
            <div key={work.id} className="w-full  max-h-[500px] ">
              <img
                src={work.cover}
                alt={work.name}
                className="w-full h-full  rounded-3xl object-cover"
              />
              <h3 className="text-2xl text-textWhite py-3">{work.name}</h3>
              <p className="text-textWhite gap-x-4">{work.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
