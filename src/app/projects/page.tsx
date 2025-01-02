'use client';

import projectsData from '../../data/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getImagePath } from '../../../utils/imageUtils';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  tags: string[];
}

interface ProjectsData {
  tr: {
    projects: Project[];
  };
  en: {
    projects: Project[];
  };
}

const typedProjectsData = projectsData as ProjectsData;
const DEFAULT_IMAGE = getImagePath('/projects/default.png');

export default function ProjectsPage() {
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});
  const { t, language } = useLanguage();

  const handleImageLoad = (projectId: string) => {
    setLoadingImages(prev => ({ ...prev, [projectId]: false }));
  };

  const localizedProjects = typedProjectsData[language].projects;

  return (
    <div className="page-container">
      <div className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link href="/" className="back-button">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="page-title">{t.projects.title}</h1>
          </div>
        </div>
        <LanguageSwitcher />
      </div>

      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="projects-grid">
            {localizedProjects.map((project: Project) => (
              <div 
                key={project.id} 
                className="project-card"
              >
                <div className="project-image-container relative">
                  {loadingImages[project.id] !== false && <LoadingSpinner />}
                  <Image
                    src={project.image ? getImagePath(project.image) : DEFAULT_IMAGE}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="project-image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                    onLoadingComplete={() => handleImageLoad(project.id)}
                  />
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-overlay">
                    <svg className="project-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </a>
                </div>
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag"
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
    </div>
  );
} 