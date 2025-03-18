"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      setIsOpen(false);

      // Hitung offset berdasarkan section ID
      const offset = sectionId === "skills" || sectionId === "contact" ? 100 : 0;
      const sectionTop = section.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: sectionTop + scrollTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="backdrop-blur-sm p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container xl:px-5 mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold xl:text-4xl bg-gradient-to-r from-[#D946EF] via-white to-[#D946EF]
         text-transparent bg-clip-text drop-shadow-xl"
        >
          tegareyy
        </Link>

        <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`md:flex gap-4 text-white font-medium absolute md:static md:w-auto  xl:text-lg xl:px-5 xl:flex xl:gap-x-8
        ${
          isOpen
            ? "bg-[#080504]/80 backdrop-blur-lg w-[80%] border top-16 text-center p-4 rounded-xl shadow-lg left-1/2 -translate-x-1/2"
            : "-top-[500px]"
        }`}
        >
          <li>
            <a
              href="#home"
              className="block p-4 hover:text-fuchsia-300 active:font-bold active:text-[#D946EF]"
              onClick={(e) => scrollToSection(e, "home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block p-4 hover:text-fuchsia-300 active:font-bold active:text-[#D946EF]"
              onClick={(e) => scrollToSection(e, "about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block p-4 hover:text-fuchsia-300 active:font-bold active:text-[#D946EF]"
              onClick={(e) => scrollToSection(e, "skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="block p-4 hover:text-fuchsia-300 active:font-bold active:text-[#D946EF]"
              onClick={(e) => scrollToSection(e, "portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block p-4 hover:text-fuchsia-300 active:font-bold active:text-[#D946EF]"
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
