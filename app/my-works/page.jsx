import NavNoAnim from "@/components/navnoanim";
import works from "../../public/data/works.json";

export default function Works() {
  const featuredWorks = works.filter((work) => work.homepage);
  return (
    <div className="mx-7">
      <NavNoAnim />;
      <h1 className="max-w-screen-md md:max-w-screen-sm text-textGray flex flex-wrap gap-x-2 gap-y-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-clash my-36">
        <div className="overflow-hidden animate-appears7 opacity-0">
          <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100">
            Check
          </span>
        </div>
        <div className="overflow-hidden animate-appears8 opacity-0">
          <span className="flex animate-fadeInText4 transform-none rotate-0 scale-100 opacity-100 ">
            out
          </span>
        </div>
        <div className="overflow-hidden animate-appears9 opacity-0">
          <span className="flex animate-fadeInText5 transform-none rotate-0 scale-100 opacity-100 ">
            some
          </span>
        </div>
        <div className="overflow-hidden animate-appears10 opacity-0 ">
          <span className="flex animate-fadeInText6 transform-none rotate-0 scale-100 opacity-100">
            of
          </span>
        </div>
        <div className="overflow-hidden animate-appears11 opacity-0">
          <span className="flex animate-fadeInText7 transform-none rotate-0 scale-100 opacity-100">
            the
          </span>
        </div>

        <div className="overflow-hidden animate-appears12 opacity-0">
          <span className="flex animate-fadeInText8 transform-none rotate-0 scale-100 opacity-100">
            projects
          </span>
        </div>
        <div className="overflow-hidden animate-appears13 opacity-0">
          <span className="flex animate-fadeInText9 transform-none rotate-0 scale-100 opacity-100">
            I`ve
          </span>
        </div>
        <div className="overflow-hidden animate-appears14 opacity-0">
          <span className="flex animate-fadeInText10 transform-none rotate-0 scale-100 opacity-100 ">
            Been
          </span>
        </div>
        <div className="overflow-hidden animate-appears15 opacity-0">
          <span className="flex animate-fadeInText11 transform-none rotate-0 scale-100 opacity-100  text-textWhite">
            working
          </span>
        </div>
        <div className="overflow-hidden animate-appears16 opacity-0">
          <span className="flex animate-fadeInText12 transform-none rotate-0 scale-100 opacity-100  text-textWhite">
            on
          </span>
        </div>

        <div className="overflow-hidden animate-appears17 opacity-0">
          <span className="flex animate-fadeInText13 transform-none rotate-0 scale-100 opacity-100  text-textWhite">
            recently
          </span>
        </div>
      </h1>
      <div className=" mx-auto p-4">
        <h1 className="max-w-screen-md md:max-w-screen-sm text-textGray flex flex-wrap gap-x-4 text-3xl md:text-5xl font-clash my-14">
          <div className="overflow-hidden animate-appears7 opacity-0">
            <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100">
              Project
            </span>
          </div>
          <div className="overflow-hidden animate-appears7 opacity-0">
            <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
              Archive
            </span>
          </div>
        </h1>
        <ul className="list-none mb-4">
          {works.map((work) => (
            <li key={work.id} className="mb-4">
              <h3 className="text-lg font-bold">{work.name}</h3>
              <img
                src={work.cover}
                alt={work.name}
                className="w-full h-48 object-cover rounded-t"
              />
              <p className="text-gray-600">{work.description.join(" ")}</p>
              <ul className="list-none mb-4">
                <li>
                  <strong>Technologies:</strong> {work.technologies.join(", ")}
                </li>
                <li>
                  <strong>Features:</strong> {work.features.join(", ")}
                </li>
              </ul>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                View Project
              </a>
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
