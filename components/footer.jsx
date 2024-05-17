"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Socials from "./ui/socials";
import ButtonForm from "./ui/ButtonForm";
import Email from "./ui/Email";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-0 animate-slideUp4">
      <div className="p-9 flex flex-col gap-48 rounded-3xl bg-gradient-to-r to-[#34383C] from-[#242629] via-[#242629]">
        <div className="flex lg:justify-between ">
          <div className="flex flex-col w-full gap-7 ">
            <div className="font-clash  text-titleGray text-3xl md:text-6xl font-medium max-w-[500px]">
              <span className="text-titleWhite pr-4 md:text-6xl font-medium">
                Let‘s talk
              </span>
              about your project
            </div>
            <div className="flex gap-7 max-md:flex-col md:items-center">
              <ButtonForm />
              <h2 className=" text-textGray flex relative">
                or copy an email: <Email />
              </h2>
            </div>
          </div>
          {/* ****SPOTIFY***** */}
          {/* <div className="flex flex-col gap-3 max-w-[350px] w-full">
            <div className="flex items-center gap-3">
              <div className="flex text-footerDateTitle ">Listening</div>
              <div className="py-2 px-4 rounded-full text-textWhite bg-radiusBgGray">
                4 hours ago{" "}
              </div>
            </div>
           
            <a href=""></a>
            <div className="flex items-center gap-3">
   
              <img
                src=""
                alt=""
                className="rounded-2xl w-20 h-20 object-cover"
              />
              <div className="flex flex-col gap-2">
         
                <div className="text-titleWhite"></div>
      
                <div className=""></div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex justify-between pt-10 border-t-[0.5px] border-titleGray">
          <div className="flex justify-between w-6/12 max-lg:flex-col gap-9">
            <div className="">
              <h1 className="text-footerDateTitle mb-4">Version</h1>
              <p className="text-textWhite text-lg"> 2024 © E.S</p>
            </div>
            <div className="">
              <h1 className="text-footerDateTitle mb-4">Local time</h1>
              <p className="text-textWhite">{currentTime} France</p>
            </div>
          </div>

          <div className="">
            <h1 className="text-footerDateTitle mb-4">Socials</h1>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
