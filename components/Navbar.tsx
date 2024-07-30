"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Pablo ORTEGA</Link>
        </div>
        <button
          className="text-white block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul className="hidden lg:flex space-x-6">
          <li className="hover:text-gray-400">
            <Link href="/">About me</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/Scolarity">Scolarity</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>

      {/* Full screen menu for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="space-y-8 text-2xl text-center">
            <li className="hover:text-gray-400">
              <Link href="/" onClick={() => setIsOpen(false)}>About me</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/Scolarity" onClick={() => setIsOpen(false)}>Scolarity</Link>
            </li>
            <li className="hover:text-gray-400">
              <Link href="/Projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
