"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-10">
      <div className="container w-1/2 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Pablo ORTEGA</h2>
          <p className="text-gray-400">Portfolio</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-400 hover:text-white">About me</a>
              </Link>
            </li>
            <li>
              <Link href="/Projects" legacyBehavior>
                <a className="text-gray-400 hover:text-white">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/Scolarity" legacyBehavior>
                <a className="text-gray-400 hover:text-white">Scolarity</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; 2024 Pablo ORTEGA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
