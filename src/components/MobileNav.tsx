"use client";

import { navLinks } from "@/constants/nav-links";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={handleIsOpen}
      >
        {!isOpen ? <Menu /> : <X />}
      </div>
      {isOpen ? (
        <figure className={`block md:hidden absolute top-20 right-2 rounded-md origin-top w-auto bg-slate-800 p-2 transition-all z-50`}>
          <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
            {navLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`#${item}`}
                  className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
                  onClick={handleIsOpen}
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </figure>
      ) : null}
    </>
  );
}

export default MobileNav;
