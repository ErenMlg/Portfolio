'use client';

import projectsData from '../../data/projects.json';
import Link from 'next/link';
import ProjectCard, { Project } from '../../components/ProjectCard';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher';

interface ProjectsData {
  tr: {
    projects: Project[];
  };
  en: {
    projects: Project[];
  };
}

const typedProjectsData = projectsData as ProjectsData;

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const localizedProjects = typedProjectsData[language].projects;

  return (
    <div className="page-container">
      <div className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link href="/" className="back-button" aria-label={t.projects.backToHome}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="page-title">{t.projects.title}</h1>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="projects-grid">
          {localizedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index < 3} />
          ))}
        </div>
      </div>
    </div>
  );
}
