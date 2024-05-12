"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="flex flex-col justify-between h-screen px-4 py-2">
      <nav className="flex mt-5 justify-between items-center overflow-hidden p-4">
        <div className="text-titleWhite font-semibold text-5xl h-12 grid place-items-center lg:fixed  top-8 left-7 animate-appears1 animate-slideUp1 opacity-0 ">
          Spectre
        </div>
        <button
          onClick={toggleSidebar}
          className="text-textWhite border-solid border rounded-3xl px-6 py-3 flex items-center gap-2 cursor-pointer animate-appears1 opacity-0"
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
          } fixed inset-0 bg-backgroundColor flex flex-col justify-between py-8 px-7 lg:hidden transition-transform ease-in-out duration-200 z-10`}
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
      <h1 className="max-w-screen-2xl text-textGray flex flex-wrap gap-x-2 gap-y-2 text-4xl font-clash animate-appears4 opacity-0">
        <span className="inline-flex gap-2 ">
          <div className="overflow-hidden">
            <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
              I'm
            </span>
          </div>
          <div className="overflow-hidden ">
            <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
              Elyesa
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
              <Image
                className="rounded-full"
                src={"/avatar.png"}
                alt="avatar"
                height={38}
                width={38}
              />
            </span>
          </div>
        </span>
        <div className="overflow-hidden ">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            - a
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            React
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            Frontend
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            Developer
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            Based
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            in
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            France,
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            Coding
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            websites
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            &
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            webapps
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            that
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            will
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            increase
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            conversion
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            and
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100">
            help
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            reach
          </span>
        </div>
        <div className="overflow-hidden fadeIn animate-delay-500">
          <span className="flex animate-fadeInText transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            customers.
          </span>
        </div>
      </h1>
    </section>
  );
}

export default Header;
