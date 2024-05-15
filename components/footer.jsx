"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "e.sahinnn61@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="p-0">
      <div className="bg-cardbgGray p-9 flex flex-col gap-48 rounded-3xl">
        <div className="flex justify-between ">
          <div className="flex flex-col w-full gap-7 ">
            <div className="font-clash color-titleGray text-titleGray text-6xl font-medium">
              <span className="text-titleWhite pr-4 text-6xl font-medium">
                Lets talk
              </span>
              about your project
            </div>
            <div className="flex gap-7 items-center">
              <button className="flex gap-3 px-5 py-3 text-black rounded-full bg-textWhite items-center">
                <Link href="/contact">Fill the form</Link>
                <Image
                  className=""
                  src={"/images/send-plane.svg"}
                  height={23}
                  width={23}
                />
              </button>
              <h2 className="relative text-textGray flex ">
                or copy an email:{" "}
                <span
                  className="underline text-textWhite flex ml-2 "
                  onClick={copyEmailToClipboard}
                  style={{ cursor: "pointer" }}
                >
                  e.sahinnn61@gmail.com
                  <Image
                    className="ml-2"
                    src={"/copy.svg"}
                    height={20}
                    width={20}
                    alt="Copy Email"
                  />
                </span>
                {copied && (
                  <span className="absolute top-8 right-4 bg-titleWhite p-3 ml-2 text-black rounded-xl">
                    Mail has been copied !
                  </span>
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
