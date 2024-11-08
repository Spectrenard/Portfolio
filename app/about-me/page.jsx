"use client";

import NavNoAnim from "@/components/navnoanim";
import Socials from "@/components/ui/socials";
import Image from "next/image";
import ButtonForm from "@/components/ui/ButtonForm";
import Footer from "@/components/footer";
import { useState } from "react";

function AccordionFAQ({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-cardbgGray p-7 rounded-3xl mb-4 w-full">
      <h1
        className="text-textWhite cursor-pointer text-lg md:text-xl flex justify-between items-center "
        onClick={toggleAccordion}
      >
        {title}
        <span className="text-textGray text-4xl font-brico font-thin transition-transform duration-200 transform">
          {isOpen ? "-" : "+"}
        </span>
      </h1>
      <div
        className={`overflow-hidden transition-max-height duration-200 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="text-gray-400 max-sm:text-sm pt-2">{content}</div>
      </div>
    </div>
  );
}

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
                    <span className="flex animate-slideUp1 text-titleGray text-4xl lg:text-6xl">
                      Hello,
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <span className="flex animate-slideUp2 text-titleGray text-4xl lg:text-6xl">
                    I‘m
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="flex animate-slideUp3 text-titleWhite text-4xl lg:text-6xl">
                    Elyesa
                  </span>
                </div>

                <div className="overflow-hidden ">
                  <span className="flex animate-slideUp4 text-titleWhite text-4xl lg:text-6xl">
                    Web
                  </span>
                </div>

                <div className="overflow-hidden">
                  <span className="flex animate-slideUp5 text-titleWhite text-4xl lg:text-6xl">
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
              Hi, I‘m SAHIN Elyesa, a frontend web developer with a passion for
              crafting exceptional user experiences and intuitive interfaces.
              With a mastery in modern web technologies, I thrive on building
              innovative solutions that drive engagement and conversion.
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="text-textGray text-xl xl:text-2xl animate-slideUps2">
              When I‘m not coding, you can find me exploring the latest design
              trends or experimenting with new technologies to stay ahead of the
              curve.
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
      <div className="flex flex-col gap-8 font-medium my-24 ">
        <div className="text-titleGray text-3xl md:text-4xl font-clash">
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
          {/* ************** FAQ **************$ */}
          <div className="flex flex-col  md:flex-row   mt-20">
            <div className="flex flex-col lg:w-5/12 gap-4">
              <h1 className="text-5xl text-titleWhite font-clash ">F.A.Q.</h1>
              <p className="text-textGray text-lg font-brico font-normal max-w-96 ">
                The first stage is a conversation with the client, in which he
                gets to know his needs, goals and vision. During this phase,
                together we analyze the characteristics of the brand, its target
                group, competition, values and the purpose of the project.
              </p>
              {/* CARD  */}
              <div className="bg-cardbgGray p-7 rounded-3xl">
                <h1 className="text-textWhite ">
                  Do you still have any questions?
                </h1>
                <p className="text-textGray pt-1 pb-4">
                  Contact me and I‘ll get back to you as soon as it‘s possible.
                </p>
                <div className="text-xs">
                  <ButtonForm />
                </div>
              </div>
            </div>
            {/* FAQ  */}
            <div className="w-full">
              <div className="flex flex-col w-full gap-0 md:pl-10 max-sm:pt-8">
                <AccordionFAQ
                  title="What is the cost of a project?"
                  content="The cost of designing a website's UI & UX, along with development, can vary significantly depending on several factors, such as the complexity of the project, the scope of the project, location and additional services.

  Generally speaking, the cost can range from several thousand to fives of thousands of euros."
                />
                <AccordionFAQ
                  title="Do you design e-commerce websites, and what features can be included?"
                  content="Yes, I design e-commerce website and I also take care of their features. There are many different tools that you can use within e-commerce website design, depending on your needs and brand specifications."
                />

                <AccordionFAQ
                  title="How long does it typically take to complete a website project?"
                  content="The time needed for design and developing, e.g. an e-commerce website, may take from 1 to 2 weeks and approximately the same amount of time for development. It is also worth taking into account additional time for tests, corrections and final adaptation of the project to the client's needs."
                />
                <AccordionFAQ
                  title="Are the websites you make mobile-responsive?"
                  content="Yes, all the websites I create are designed to be mobile-responsive to ensure a seamless user experience across different devices."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
