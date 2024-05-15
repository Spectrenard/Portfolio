import NavNoAnim from "../../components/navnoanim";
import works from "../../public/data/works.json";
import ProjectResume from "../../components/projectResume";
import Work from "../../components/work";

export default function Works() {
  const featuredWorks = works.filter((work) => work.homepage);
  return (
    <div className="mx-7">
      <NavNoAnim />;
      <h1 className="max-w-screen-md md:max-w-screen-md text-textGray flex flex-wrap gap-x-3 gap-y-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-clash my-28">
        <div className="overflow-hidden ">
          <span className="flex animate-slideUp1 translate-y-0 rotate-0 scale-100 opacity-100">
            Check
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUp2 translate-y-0 rotate-0 scale-100 opacity-100 ">
            out
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUp3 translate-y-0 rotate-0 scale-100 opacity-100 ">
            some
          </span>
        </div>
        <div className="overflow-hidden  ">
          <span className="flex animate-slideUp4 translate-y-0 rotate-0 scale-100 opacity-100">
            of
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUp5 translate-y-0 rotate-0 scale-100 opacity-100">
            the
          </span>
        </div>

        <div className="overflow-hidden ">
          <span className="flex animate-slideUp6 translate-y-0 rotate-0 scale-100 opacity-100">
            projects
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUp7 translate-y-0 rotate-0 scale-100 opacity-100">
            I‘ve
          </span>
        </div>
        <div className="overflow-hidden  ">
          <span className="flex animate-slideUp8 translate-y-0 rotate-0 scale-100 opacity-100 ">
            Been
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUp9 translate-y-0 rotate-0 scale-100 opacity-100 text-textWhite">
            working
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUp10 translate-y-0 rotate-0 scale-100 opacity-100 text-textWhite">
            on
          </span>
        </div>

        <div className="overflow-hidden ">
          <span className="flex animate-slideUp11 translate-y-0 rotate-0 scale-100 opacity-100  text-textWhite">
            recently
          </span>
        </div>
      </h1>
      <div className=" mx-auto">
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
        <Work />
      </div>
    </div>
  );
}
