"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Short description of Project 1',
    image: '/path/to/image1.jpg',
    details: 'Detailed information about Project 1'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Short description of Project 2',
    image: '/path/to/image2.jpg',
    details: 'Detailed information about Project 2'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Short description of Project 3',
    image: '/path/to/image3.jpg',
    details: 'Detailed information about Project 3'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Short description of Project 4',
    image: '/path/to/image4.jpg',
    details: 'Detailed information about Project 4'
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Short description of Project 5',
    image: '/path/to/image5.jpg',
    details: 'Detailed information about Project 5'
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex relative overflow-hidden bg-dotted pt-6 pb-6 sm:pt-8 sm:pb-8">
      <header className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-xl">Scolarity</h1>
      </header>
      <div>
        
      </div>

      <style>{`
        .bg-dotted {
          background: white url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23D3D3D3" fill-opacity="0.5"%3E%3Ccircle cx="50" cy="50" r="3"/%3E%3C/g%3E%3C/svg%3E') repeat;
          background-size: 25px 25px; /* Ajuster la taille comme nécessaire */
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
