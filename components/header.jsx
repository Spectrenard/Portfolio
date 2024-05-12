import React, { useState } from "react"; // Importez useState depuis React
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="flex mt-9 justify-between px-4 py-1">
      <div className="text-titleWhite font-semibold text-5xl h-12 grid place-items-center lg:fixed z-[99] top-8 left-7 ">
        Elyesa
      </div>
      <button
        onClick={toggleSidebar}
        className="text-textWhite border-solid border rounded-3xl px-6 py-3 flex items-center gap-2"
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
          sidebarOpen ? "block" : "hidden"
        } fixed inset-0 bg-backgroundColor flex flex-col justify-between py-8 px-7 translate-x-full lg:hidden`}
      >
        <button
          className="bg-none border-none flex justify-end"
          onClick={toggleSidebar}
        >
          <Image
            src={"/menu-close.svg"}
            alt="menucloseimg"
            height={24}
            width={24}
          />
        </button>
        <ul className="flex flex-col">
          <li className="mb-4">
            <Link href="/about-me">About me</Link>
          </li>
          <li className="mb-4">
            <Link href="/my-works">My works</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.useClient = true; // Marquez le composant comme un composant client

export default Header;
