"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./navanim";

function Header() {
  return (
    <section className="flex flex-col h-screen px-4 py-2 md:p-6 lg:p-8">
      <Nav />
      <div className="gap-6 flex flex-col  h-full justify-end mb-7 overflow-hidden">
        <div className="text-textWhite animate-slideUps20 flex items-center gap-3 w-fit py-3 px-7 bg-radiusBgGray rounded-3xl opacity-0 ">
          <div className="relative w-3 h-3 ">
            <div className="absolute w-[200%] h-[200%] border-box -left-1/2 -top-1/2 border-solid rounded-full bg-green-500 animate-pulse-ring"></div>
            <div className="absolutew-full h-full border-box border-solid rounded-full bg-green-500 animate-pulse-dot"></div>
          </div>
          Available for work
        </div>
      </div>
      {/* ***************** Text part ***************** */}
      <h1 className="max-w-screen-2xl text-textGray flex flex-wrap gap-x-5 gap-y-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-clash animate-appears1 opacity-0">
        <span className="inline-flex gap-2 items-center justify-center">
          <div className="overflow-hidden ">
            <span className="flex animate-slideUps1  transform-none rotate-0 scale-100 opacity-100">
              I‘m
            </span>
          </div>
          <div className="overflow-hidden ">
            <span className="flex animate-slideUps2  transform-none transition rotate-0 scale-100 opacity-100">
              Elyesa
            </span>
          </div>
          <div className="overflow-hidden ">
            <span className="flex animate-slideUps3 transform-none transition  rotate-0 scale-100 opacity-100">
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
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps4 transform-none rotate-0 scale-100 opacity-100">
            - a
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps5 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            React
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps6 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            Frontend
          </span>
        </div>
        <div className="overflow-hidden  ">
          <span className="flex animate-slideUps7 transform-none rotate-0 scale-100 opacity-100">
            Developer
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps8 transform-none rotate-0 scale-100 opacity-100">
            Based
          </span>
        </div>
        <div className="overflow-hidden">
          <span className="flex animate-slideUps9 transform-none rotate-0 scale-100 opacity-100">
            in
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps10 transform-none rotate-0 scale-100 opacity-100">
            France,
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps11 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            Coding
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps11 transform-none rotate-0 scale-100 opacity-100">
            websites
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps13 transform-none rotate-0 scale-100 opacity-100 text-textWhite">
            &
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps14 transform-none rotate-0 scale-100 opacity-100">
            webapps
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps15 transform-none rotate-0 scale-100 opacity-100">
            that
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps16 transform-none rotate-0 scale-100 opacity-100">
            will
          </span>
        </div>
        <div className="overflow-hidden">
          <span className="flex animate-slideUps17 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            increase
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps18 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            conversion
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps19 transform-none rotate-0 scale-100 opacity-100">
            and
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps20 transform-none rotate-0 scale-100 opacity-100">
            help
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps21 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            reach
          </span>
        </div>
        <div className="overflow-hidden ">
          <span className="flex animate-slideUps22 transform-none rotate-0 scale-100 opacity-100 text-titleWhite">
            customers.
          </span>
        </div>
      </h1>
    </section>
  );
}

export default Header;
