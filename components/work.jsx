import works from "../public/data/works.json";
import Link from "next/link";
import ProjectResume from "../components/projectResume";
import Image from "next/image";

export default function Work() {
  const featuredWorks = works.filter((work) => work.homepage);
  return (
    <div className="mx-1">
      <ul className="list-none mb-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((work) => (
          <li key={work.id}>
            <div className="relative overflow-hidden">
              <div className="overflow-hidden rounded-3xl">
                {" "}
                {/* Ajout de cette div */}
                <Link href={`/my-works/${work.id}`}>
                  <img
                    src={work.cover}
                    alt={work.name}
                    className="w-full max-h-[500px] h-full object-cover rounded-3xl animate-appearsAzra opacity-0 hover:scale-110 transition duration-300 "
                  />
                </Link>
              </div>
              <ProjectResume work={work} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
