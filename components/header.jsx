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
      <nav className="flex mt-5 justify-between ">
        <div className="text-titleWhite font-semibold text-5xl h-12 grid place-items-center lg:fixed  top-8 left-7 ">
          Elyesa
        </div>
        <button
          onClick={toggleSidebar}
          className="text-textWhite border-solid border rounded-3xl px-6 py-3 flex items-center gap-2 cursor-pointer "
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
      <div className="gap-6 flex flex-col gap-10 h-full justify-end">
        <div className="text-textWhite flex items-center gap-3 w-fit py-3 px-7 bg-radiusBgGray rounded-3xl">
          <div className="relative w-3 h-3 ">
            <div className="absolute w-[200%] h-[200%] border-box -left-1/2 -top-1/2 border-solid rounded-full bg-green-500 animate-pulse-ring"></div>
            <div className="absolutew-full h-full border-box border-solid rounded-full bg-green-500 animate-pulse-dot"></div>
          </div>
          Available for work
        </div>
      </div>
      {/* ***************** Text part ***************** */}
      <div className="max-w-screen-2xl text-"></div>
    </section>
  );
}

export default Header;
