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
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-dotted pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="absolute top-0 left-2 sm:left-2 md:left-4 lg:left-52 w-2 h-full bg-yellowNeon neon"></div>
      <div className="flex flex-col items-center w-full p-4 sm:p-6 md:p-10 lg:p-20 xl:p-52 mt-10 ml-6 sm:ml-8 md:ml-8 lg:ml-10 xl:ml-12">
        <div className="w-full space-y-6 sm:space-y-8 md:space-y-10">
          {projects.map((project) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <div
                key={project.id}
                ref={ref}
                className={`bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-500 ease-in-out ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } hover:scale-105`}
                onClick={() => handleClick(project)}
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <img src={project.image} alt={project.title} className="w-full h-32 sm:h-48 object-cover rounded-lg" />
              </div>
            );
          })}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 sm:p-8 rounded-lg max-w-3xl w-full h-3/4 overflow-auto relative">
            <button className="absolute top-4 right-4 text-black" onClick={handleClose}>
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.details}</p>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 sm:h-64 object-cover rounded-lg" />
          </div>
        </div>
      )}
      <style jsx global>{`
        .neon {
          box-shadow: 0 0 5px rgba(255, 255, 0, 0.4),
                      0 0 10px rgba(255, 255, 0, 0.4),
                      0 0 15px rgba(255, 255, 0, 0.4),
                      0 0 20px rgba(255, 255, 0, 0.4),
                      0 0 25px rgba(255, 255, 0, 0.4);
        }
      `}</style>
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
