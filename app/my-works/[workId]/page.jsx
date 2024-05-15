"use client";

import { useParams } from "next/navigation";
import works from "../../../public/data/works.json";
import NavNoAnim from "@/components/navnoanim";
import Image from "next/image";

const WorkPage = () => {
  const { workId } = useParams();
  const work = works.find((work) => work.id === parseInt(workId));

  if (!work) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="md:mt-28 p-8 ">
      <NavNoAnim />
      <div className="text-textWhite text-2xl md:text-7xl font-clash flex justify-between pb-28 md:pb-56 max-md:mt-28">
        <h1 className="font-medium">{work.namesimple}</h1>
        <h2 className="font-medium">{work.date}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-textWhite text-xl md:text-4xl">
            {work.title}{" "}
          </span>
          <p className="text-textGray pt-3 text-xl">{work.stack} </p>
        </div>

        <span className="flex max-sm:hidden">
          <h3 className="text-textWhite text-2xl">Discover</h3>
          <Image
            className=""
            src={"/images/discover.svg"}
            alt="discovericon"
            height={33}
            width={23}
          />
        </span>
      </div>
      <div className="flex flex-col md:flex md:flex-row w-full my-20 ">
        <div className="max-w-screen-md md:max-w-screen-md text-textGray flex flex-wrap gap-x-3 gap-y-2 text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-clash md:pr-10 mb-10 font-medium  md:w-11/12 lg:w-6/12">
          <span className="">Project</span>
          <span className="text-titleWhite">Details</span>
          <p className="text-xl pt-7">{work.description}</p>
        </div>
        <div className="flex flex-col w-full gap-9 mt-8 ">
          <div className="flex justify-between w-full px-4">
            <p className="text-footerDateTitle text-xl">Name</p>
            <span className="text-xl text-textWhite"> {work.namesimple}</span>
          </div>
          <div className="border-b border-b-[0.05px] border-textGray"></div>
          <div className="flex justify-between w-full px-4">
            <p className="text-footerDateTitle text-xl">Services</p>
            <span className="text-xl text-textWhite">{work.services}</span>
          </div>
          <div className="border-b border-b-[0.05px] border-textGray"></div>
          <div className="flex justify-between w-full px-4">
            <p className="text-footerDateTitle text-xl">Year</p>
            <span className="text-xl text-textWhite">{work.date}</span>
          </div>
          <div className="border-b border-b-[0.05px] border-textGray"></div>
          <div className="flex justify-between w-full px-4">
            <p className="text-footerDateTitle text-xl">Site</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <div className="flex text-textWhite underline text-xl">
                Visit website
                <Image
                  className=""
                  src={"/images/learn.svg"}
                  alt="discovericon"
                  height={23}
                  width={20}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
