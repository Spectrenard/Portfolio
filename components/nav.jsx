"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="flex flex-col justify-between h-screen px-4 py-2">
      <nav className="flex mt-5 justify-between ">
        <div className="text-titleWhite font-semibold text-5xl h-12 grid place-items-center lg:fixed  top-8 left-7 ">
          <div className="text-titleWhite font-semibold text-5xl h-12 grid place-items-center lg:fixed  top-8 left-7 ">
            <Link href="/">Spectre</Link>
          </div>
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
    </section>
  );
}

export default Nav;
