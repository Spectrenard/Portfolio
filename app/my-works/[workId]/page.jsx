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
    <div className="mt-28 p-8">
      <NavNoAnim />
      <div className="text-textWhite text-7xl font-clash flex justify-between pb-56 ">
        <h1 className="font-medium">{work.namesimple}</h1>
        <h2 className="font-medium">{work.date}</h2>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-textWhite text-4xl">{work.title} </span>
        <span className="flex ">
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

      <ul>
        {work.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <ul>
        {work.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <img src={work.cover} alt={work.name} />
      <div>
        <a href={work.link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
        <a href={work.github} target="_blank" rel="noopener noreferrer">
          Voir le code source
        </a>
      </div>
    </div>
  );
};

export default WorkPage;
