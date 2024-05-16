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
          <li key={work.id} className="">
            <div className="">
              <Link href={`/my-works/${work.id}`}>
                <img
                  src={work.cover}
                  alt={work.name}
                  className="w-full max-h-[500px] h-full object-cover rounded-3xl"
                />
              </Link>
              <ProjectResume work={work} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
