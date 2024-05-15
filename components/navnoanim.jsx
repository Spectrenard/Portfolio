"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function NavNoAnim() {
  const [classes, setClasses] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="flex mt-5 justify-between items-centers ">
      <Link href="/">
        <div
          className={`tracking-tighter fixed md:z-40 text-titleWhite font-bold h-12 flex place-items-center animate-appears opacity-0 text-[7vw] md:mt-8 md:top-0 md:fixed md:text-[4vw] lg:mt-8 lg:fixed lg:top-0 ${classes}`}
          style={{
            transition: "all 0.3s ease-in-out", // ajout d'une transition smooth
          }}
        >
          <div className="overflow-hidden ">
            <span className="flex animate-slideSlow1 ">S</span>
          </div>
          <div className="overflow-hidden">
            <span className="flex animate-slideSlow2 ">p</span>
          </div>
          <div className="overflow-hidden ">
            <span
              className="flex animate-slideSlow3  
          "
            >
              e
            </span>
          </div>
          <div className="overflow-hidden ">
            <span className="flex animate-slideSlow4 transform-none rotate-0 scale-100 opacity-100">
              c
            </span>
          </div>
          <div className="overflow-hidden ">
            <span className="flex animate-slideSlow5  transform-none rotate-0 scale-100 opacity-100">
              t
            </span>
          </div>
          <div className="overflow-hidden ">
            <span className="flex animate-slideSlow6  transform-none rotate-0 scale-100 opacity-100">
              r
            </span>
          </div>
          <div className="overflow-hidden">
            <span className="flex animate-slideSlow7 transform-none rotate-0 scale-100 opacity-100">
              e
            </span>
          </div>
        </div>
      </Link>
      {/* ****************NAV LINKS************* */}
      <div className="flex z-50 items-center fixed right-8 top-8 max-md:hidden ">
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
        className="fixed right-5 md:z-50 text-textWhite border-solid border rounded-3xl px-6 py-3 flex items-center gap-2 cursor-pointer animate-appearsAzra opacity-0 md:hidden"
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
  );
}
export default NavNoAnim;
