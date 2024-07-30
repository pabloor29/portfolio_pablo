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
    <div className="">
      <header className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl">Scolarity</h1>
      </header>
    </div>
  );
};

export default ProjectsPage;
