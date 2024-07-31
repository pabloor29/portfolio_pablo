"use client";

import Link from "next/link";
import { useState } from "react";
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex relative overflow-hidden bg-dotted pt-16 pb-6">
      <header className="min-h-screen w-full flex justify-center items-center">
        <div className="relative h-full w-ful">
          <div className="md:absolute md:h-1/2 md:transform lg:translate-x-20 md:translate-x-20 flex flex-col md:justify-center md:ml-0 md:my-0 my-16 ml-6">
            <h1 className="text-2xl sm:text-4xl font-bold">Pablo ORTEGA</h1>
            <p className="text-lg sm:text-xl">Découvrez moi à travers mon portfolio</p>
          </div>
          <div className="h-full md:mx-0 md:pt-0 mx-10 pt-10 flex flex-col md:flex-row items-center md:space-y-10">
            <div className="relative w-full transform translate-y-5 md:-translate-y-10 lg:translate-y-10 md:translate-x-20">
              <img src='/img/electronics.jpg' alt="Electronics" className="relative z-20 shadow-lg w-2/3 md:w-full" />
            </div>
            <div className="relative w-full flex justify-end transform md:-translate-y-3 lg:translate-y-20">
              <img src='/img/hike.jpg' alt="Hike" className="relative z-10 shadow-lg w-2/3 md:w-full" />
            </div>
            <div className="relative w-full transform  -translate-y-5 md:-translate-x-20 md:translate-y-20 h-full">
              <img src='/img/running.jpg' alt="Running" className="relative z-0 shadow-lg w-2/3 md:w-full" />
            </div>
          </div>
        </div>
      </header>

      <style>{`
        .bg-dotted {
          background: white url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23D3D3D3" fill-opacity="0.5"%3E%3Ccircle cx="50" cy="50" r="3"/%3E%3C/g%3E%3C/svg%3E') repeat;
          background-size: 25px 25px; /* Ajuster la taille comme nécessaire */
        }
      `}</style>
    </div>
  );
};

export default Home;
