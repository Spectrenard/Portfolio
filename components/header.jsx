"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [classes, setClasses] = useState(""); // ajout d'un état pour les classes

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTop === 0) {
      setClasses(
        "lg:w-full lg:text-[27vw] lg:top-[25%] transition-all duration-600 md:w-full md:text-[27vw] md:top-[25%]"
      );
    } else {
      setClasses("transition-all duration-400"); // suppression de la classe w-full lorsque scrollTop est différent de 0
    }
  }, [scrollTop]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="flex flex-col h-screen px-4 py-2 md:px5 md:py-3 lg:px-6 lg:py-4">
      <nav className="flex mt-5 justify-between items-centers py-4 ">
        <div
          className={`tracking-tighter fixed z-50 text-titleWhite font-bold h-12 flex place-items-center animate-appears opacity-0 md:mt-8 md:top-0  md:fixed lg:mt-8 lg:fixed lg:top-0 text-[4vw]${classes}`}
          style={{
            transition: "all 0.5s ease-in-out", // ajout d'une transition smooth
          }}
        >
          <div className="overflow-hidden animate-appearsTitle1 opacity-0 flex">
            <span className="flex animate-fadeInTitle1  transform-none rotate-0 scale-100 opacity-100">
              S
            </span>
          </div>
          <div className="overflow-hidden animate-appearsTitle2 opacity-0">
            <span className="flex animate-fadeInTitle2 transform-none rotate-0 scale-100 opacity-100">
              p
            </span>
          </div>
          <div className="overflow-hidden animate-appearsTitle3 opacity-0">
            <span className="flex animate-fadeInTitle3  transform-none rotate-0 scale-100 opacity-100">
              e
            </span>
          </div>
          <div className="overflow-hidden animate-appearsTitle4 opacity-0">
            <span className="flex animate-fadeInTitle4 transform-none rotate-0 scale-100 opacity-100">
              c
            </span>
          </div>
          <div className="overflow-hidden animate-appearsTitle5 opacity-0">
            <span className="flex animate-fadeInTitle5  transform-none rotate-0 scale-100 opacity-100">
              t
            </span>
          </div>
          <div className="overflow-hidden animate-appearsTitle6 opacity-0">
            <span className="flex animate-fadeInTitle6  transform-none rotate-0 scale-100 opacity-100">
              r
            </span>
          </div>
          <div className="overflow-hidden animate-appearsTitle7 opacity-0">
            <span className="flex animate-fadeInTitle7  transform-none rotate-0 scale-100 opacity-100">
              e
            </span>
          </div>
        </div>
        {/* ****************NAV LINKS************* */}
        <div className="flex items-center fixed right-8 top-8 max-md:hidden ">
          <ul className="flex gap-9 overflow-visible items-center">
            <li className=" text-md text-titleWhite">
              <Link href="/about-me">About me</Link>
            </li>
            <li className=" text-md text-titleWhite">
              <Link href="/my-works">Work</Link>
            </li>
            <li className=" text-md text-titleWhite">
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <div className="flex py-3 px-5 bg-radiusBgGray text-titleWhite rounded-full gap-2 underline relative">
                <span className="hidden text-black bg-gray-300 rounded-sm text-md absolute decoration-none">
                  Mail has been copied !
                </span>
                <Image
                  className="rounded-full md:h-38 w-full cover bg-no-repeat"
                  src={"/copy.svg"}
                  alt="copiedicon"
                  height={18}
                  width={18}
                />
                e.sahinnn61@gmail.com
              </div>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleSidebar}
          className="fixed right-5 z-50 text-textWhite border-solid border rounded-3xl px-6 py-3 flex items-center gap-2 cursor-pointer animate-appearsAzra opacity-0 md:hidden"
        >
          <Image
            src={"/menu-open.svg"}
            alt="menuopenimg"
            height={24}
            width={24}
          />
          Menu
        </button>

        {/* ******** Sidebar Mobile ******* */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } fixed inset-0 bg-backgroundColor flex flex-col justify-between py-8 px-7 transition-transform ease-in-out duration-200 z-10 lg:hidden `}
        >
          <button
            className="bg-none border-none flex justify-end cursor-pointer"
            onClick={toggleSidebar}
          >
            <Image
              src={"/menu-close.svg"}
              alt="menucloseimg"
              height={38}
              width={38}
            />
          </button>
          <ul className="flex flex-col overflow-visible">
            <li className="mb-9 text-6xl text-titleWhite">
              <Link href="/about-me">About me</Link>
            </li>
            <li className="mb-9 text-6xl text-titleWhite">
              <Link href="/my-works">Work</Link>
            </li>
            <li className="text-6xl text-titleWhite">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="gap-6 flex flex-col gap-10 h-full justify-end mb-7 ">
        <div className="text-textWhite flex items-center gap-3 w-fit py-3 px-7 bg-radiusBgGray rounded-3xl animate-appears3 animate-fadeInText opacity-0">
          <div className="relative w-3 h-3 ">
            <div className="absolute w-[200%] h-[200%] border-box -left-1/2 -top-1/2 border-solid rounded-full bg-green-500 animate-pulse-ring"></div>
            <div className="absolutew-full h-full border-box border-solid rounded-full bg-green-500 animate-pulse-dot"></div>
          </div>
          Available for work
        </div>
      </div>
      {/* ***************** Text part ***************** */}
      <h1 className="max-w-screen-2xl text-textGray flex flex-wrap gap-x-2 gap-y-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-clash ">
        <span className="inline-flex gap-2 items-center justify-center">
          <div className="overflow-hidden animate-appears3 opacity-0">
            <span className="flex animate-fadeInText  transform-none rotate-0 scale-100 opacity-100">
              I‘m
            </span>
          </div>
          <div className="overflow-hidden animate-appears5 opacity-0">
            <span className="flex animate-fadeInText1  transform-none transition rotate-0 scale-100 opacity-100">
              Elyesa
            </span>
          </div>
          <div className="overflow-hidden animate-appears6 opacity-0">
            <span className="flex animate-fadeInText2 transform-none transition  rotate-0 scale-100 opacity-100">
              <Image
                className="rounded-full md:h-38 w-full "
                src={"/avatar.png"}
                alt="avatar"
                height={38}
                width={38}
              />
            </span>
          </div>
        </span>
        <div className="overflow-hidden animate-appears7 opacity-0">
          <span className="flex animate-fadeInText3 transform-none rotate-0 scale-100 opacity-100">
            - a
          </span>
        </div>
        <div className="overflow-hidden animate-appears8 opacity-0">
          <span className="flex animate-fadeInText4 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            React
          </span>
        </div>
        <div className="overflow-hidden animate-appears9 opacity-0">
          <span className="flex animate-fadeInText5 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            Frontend
          </span>
        </div>
        <div className="overflow-hidden animate-appears10 opacity-0 ">
          <span className="flex animate-fadeInText6 transform-none rotate-0 scale-100 opacity-100">
            Developer
          </span>
        </div>
        <div className="overflow-hidden animate-appears11 opacity-0">
          <span className="flex animate-fadeInText7 transform-none rotate-0 scale-100 opacity-100">
            Based
          </span>
        </div>
        <div className="overflow-hidden animate-appears12 opacity-0">
          <span className="flex animate-fadeInText8 transform-none rotate-0 scale-100 opacity-100">
            in
          </span>
        </div>
        <div className="overflow-hidden animate-appears13 opacity-0">
          <span className="flex animate-fadeInText9 transform-none rotate-0 scale-100 opacity-100">
            France,
          </span>
        </div>
        <div className="overflow-hidden animate-appears14 opacity-0">
          <span className="flex animate-fadeInText10 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            Coding
          </span>
        </div>
        <div className="overflow-hidden animate-appears15 opacity-0">
          <span className="flex animate-fadeInText11 transform-none rotate-0 scale-100 opacity-100">
            websites
          </span>
        </div>
        <div className="overflow-hidden animate-appears16 opacity-0">
          <span className="flex animate-fadeInText12 transform-none rotate-0 scale-100 opacity-100">
            &
          </span>
        </div>
        <div className="overflow-hidden animate-appears17 opacity-0">
          <span className="flex animate-fadeInText13 transform-none rotate-0 scale-100 opacity-100">
            webapps
          </span>
        </div>
        <div className="overflow-hidden animate-appears18 opacity-0">
          <span className="flex animate-fadeInText14 transform-none rotate-0 scale-100 opacity-100">
            that
          </span>
        </div>
        <div className="overflow-hidden animate-appears19 opacity-0">
          <span className="flex animate-fadeInText15 transform-none rotate-0 scale-100 opacity-100">
            will
          </span>
        </div>
        <div className="overflow-hidden animate-appears20 opacity-0">
          <span className="flex animate-fadeInText16 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            increase
          </span>
        </div>
        <div className="overflow-hidden animate-appears21 opacity-0">
          <span className="flex animate-fadeInText17 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            conversion
          </span>
        </div>
        <div className="overflow-hidden animate-appears22 opacity-0">
          <span className="flex animate-fadeInText18 transform-none rotate-0 scale-100 opacity-100">
            and
          </span>
        </div>
        <div className="overflow-hidden animate-appears23 opacity-0">
          <span className="flex animate-fadeInText19 transform-none rotate-0 scale-100 opacity-100">
            help
          </span>
        </div>
        <div className="overflow-hidden animate-appears24 opacity-0">
          <span className="flex animate-fadeInText20 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            reach
          </span>
        </div>
        <div className="overflow-hidden animate-appears25 opacity-0">
          <span className="flex animate-fadeInText21 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            customers.
          </span>
        </div>
      </h1>
    </section>
  );
}

export default Header;
