import React from "react";
import Logo from "./Logo";
import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 z-30 backdrop-blur-md">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        {/* descktop navigation */}
        <nav className="hidden md:flex gap-8 capitalize">
          {navLinks.map((item, index) => {
            return (
              <Link key={index} href={`#${item}`}>
                {item}
              </Link>
            );
          })}
        </nav>
        {/* mobile navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
