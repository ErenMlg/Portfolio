'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getImagePath } from '../../utils/imageUtils';
import LoadingSpinner from '@/components/LoadingSpinner';
import ProjectCard, { Project } from '@/components/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import projectsData from '@/data/projects.json';

export default function Home() {
  const [imageLoading, setImageLoading] = useState(true);
  const { t, language } = useLanguage();
  const currentRole = t.sections.experience.items[0];
  const featuredProjects = (projectsData[language].projects as Project[]).filter((p) => p.featured);

  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="intro-text">
            <span className="greeting">
              {currentRole.role} · {currentRole.company}
            </span>
            <h1 className="name">
              {t.name}
            </h1>
            <h2 className="title">
              {t.title}
            </h2>
            <p className="description">
              {t.description}
            </p>
            <div className="cta-buttons">
              <Link href="/projects" className="cta-button primary">
                {t.buttons.projects}
              </Link>
              <Link href="/contact" className="cta-button secondary">
                {t.buttons.contact}
              </Link>
            </div>
          </div>
          <div className="profile-section">
            <div className="profile-card">
              <div className="profile-image relative w-full aspect-square">
                {imageLoading && <LoadingSpinner />}
                <Image
                  src={getImagePath('/profile.jpg')}
                  alt={t.name}
                  fill
                  className="object-cover object-center"
                  onLoadingComplete={() => setImageLoading(false)}
                  sizes="300px"
                  priority
                />
              </div>
              <div className="social-links">
                <a href="https://github.com/ErenMlg" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/MollaogluEren" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/mollaoglueren" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t.sections.featured.title}</h2>
            <Link href="/projects" className="section-link">
              {t.sections.featured.viewAll} →
            </Link>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {t.sections.experience.title}
            </h2>
          </div>
          <ol className="experience-list">
            {t.sections.experience.items.map((item) => (
              <li key={item.period} className="experience-item">
                <span className="experience-period">{item.period}</span>
                <div>
                  <h3>{item.role} · {item.company}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
