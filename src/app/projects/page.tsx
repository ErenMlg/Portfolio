'use client';

import projectsData from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getImagePath } from '../../../utils/imageUtils';
import LoadingSpinner from '@/components/LoadingSpinner';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  tags: string[];
}

const DEFAULT_IMAGE = getImagePath('/projects/default.png');

export default function ProjectsPage() {
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (projectId: string) => {
    setLoadingImages(prev => ({ ...prev, [projectId]: false }));
  };

  return (
    <div className="page-container min-h-screen bg-gray-900">
      <div className="navbar bg-gray-800">
        <div className="container mx-auto">
          <div className="navbar-content flex items-center p-4">
            <Link href="/" className="back-button text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="page-title text-2xl font-bold text-white ml-4">Projelerim</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project: Project) => (
            <div 
              key={project.id} 
              className="project-card bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="project-image-container relative h-48">
                {loadingImages[project.id] !== false && <LoadingSpinner />}
                <Image
                  src={project.image ? getImagePath(project.image) : DEFAULT_IMAGE}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onLoadingComplete={() => handleImageLoad(project.id)}
                />
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                   className="project-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="project-content p-6">
                <h3 className="project-title text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="project-description text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="project-tags flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag px-3 py-1 bg-gray-700 text-green-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 