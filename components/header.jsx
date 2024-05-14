"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";

function Header() {
  return (
    <section className="flex flex-col h-screen px-4 py-2 md:px5 md:py-3 lg:px-6 lg:py-4">
      <Nav />
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
          <div className="overflow-hidden animate-appears4 opacity-0">
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
          <span className="flex animate-fadeInText12 transform-none rotate-0 scale-100 opacity-100 text-textWhite">
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
