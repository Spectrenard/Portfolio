import Image from "next/image";
import { useState } from "react";

export default function Email() {
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
    <div>
      <span
        className="underline text-textWhite flex ml-2 relative items-center"
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
        <span className="absolute z-50  max-md:left-32 top-! md:right-4 bg-titleWhite text-xs p-3 ml-2 text-black rounded-xl">
          Mail has been copied !
        </span>
      )}
    </div>
  );
}
