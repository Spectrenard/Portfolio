import NavNoAnim from "@/components/navnoanim";
import Socials from "@/components/ui/socials";
import Image from "next/image";
import ButtonForm from "@/components/ui/ButtonForm";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="p-8">
      <NavNoAnim />
      <div className="flex mt-44 flex-col xl:flex-row">
        <div className="w-full ">
          <div className="font-clash flex items-center w-full max-w-[700px]">
            <div className="gap-3 flex">
              <div className="flex flex-wrap gap-3 font-medium">
                <div className="flex items-center overflow-hidden">
                  <Image
                    className="rounded-full mr-3 animate-slideUp10 max-lg:w-10"
                    src={"/avatar.png"}
                    width={60}
                    height={40}
                    alt="avataricon"
                  />
                  <div className="overflow-hidden">
                    <span className="flex animate-slideUp1 text-titleGray text-5xl lg:text-6xl">
                      Hello,
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <span className="flex animate-slideUp2 text-titleGray text-5xl lg:text-6xl">
                    Im
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="flex animate-slideUp3 text-titleWhite text-5xl lg:text-6xl">
                    Elyesa
                  </span>
                </div>

                <div className="overflow-hidden ">
                  <span className="flex animate-slideUp4 text-titleWhite text-5xl lg:text-6xl">
                    Web
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="flex animate-slideUp5 text-titleWhite text-5xl lg:text-6xl">
                    Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="items-center justify-center flex-col">
          <div className="overflow-hidden my-10 xl:mb-5">
            <h2 className="text-xl xl:text-2xl text-textWhite animate-slideUps1">
              With experience in a Creative Agency as a Graphic Designer and as
              a UX/UI designer, I combine both fields to understand the needs of
              brands and create experiences that bring them profit.
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="text-textGray text-xl xl:text-2xl animate-slideUps2">
              I have been designing and developing digital products for over 5
              years, both as a full-time employee and as a freelancer working in
              the gaming industry, through the legal industry, to goverment
              projects.
            </p>
          </div>
          {/* Socials  */}
          <div className="flex md:items-center mt-12  gap-8 gap-x-4 max-md:flex-col">
            {" "}
            <div className="">
              <ButtonForm />
            </div>
            <Socials />
          </div>
        </div>
      </div>
      {/* Services  */}
      <div className="flex flex-col gap-8 font-medium my-44 ">
        <div className="text-titleGray text-4xl font-clash">
          <h3 className="">
            How my
            <span className="text-titleWhite px-2">Process</span>
            looks like
          </h3>
        </div>
        <div className="w-full">
          <div className="lg:flex gap-x-8 ">
            <div className="px-8 py-10 w-full bg-cardbgGray rounded-3xl max-lg:mb-10">
              <div className="flex flex-col gap-8 ">
                <Image
                  className="rounded-2xl p-4 bg-white"
                  src={"/images/Consulting.svg"}
                  alt="avatar"
                  height={50}
                  width={70}
                />
                <h1 className="text-2xl font-medium text-titleWhite ">
                  Consulting
                </h1>
                <p className="text-textGray">
                  The first stage is a conversation with the client, in which he
                  gets to know his needs, goals and vision. During this phase,
                  together we analyze the characteristics of the brand, its
                  target group, competition, values and the purpose of the
                  project.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="px-8 py-10 w-full bg-cardbgGray rounded-3xl max-lg:mb-10">
              <div className="flex flex-col gap-8">
                <Image
                  className="rounded-2xl p-4 bg-white"
                  src={"/images/Designing.svg"}
                  alt="avatar"
                  height={50}
                  width={70}
                />
                <h1 className="text-2xl font-medium text-titleWhite">
                  Designing
                </h1>
                <p className="text-textGray">
                  I start my work by designing the home page. This template is
                  crucial because it determines the style in which the entire
                  website will be designed. After accepting the project, I
                  prepare templates for the remaining subpages.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="px-8 py-10 w-full bg-cardbgGray rounded-3xl">
              <div className="flex flex-col gap-8">
                <Image
                  className="rounded-2xl p-4 bg-white"
                  src={"/images/Developing.svg"}
                  alt="avatar"
                  height={50}
                  width={70}
                />
                <h1 className="text-2xl font-medium text-titleWhite">
                  Developing
                </h1>
                <p className="text-textGray">
                  The final phase is the implementation of the website. This
                  requires supervision and experience, which is why I support
                  the client throughout the entire process from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
