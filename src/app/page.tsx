'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getImagePath } from '../../utils/imageUtils';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const [imageLoading, setImageLoading] = useState(true);
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="intro-text">
            <h2 className="greeting">{t.greeting}</h2>
            <h1 className="name">
              {t.name}
            </h1>
            <h3 className="title">
              {t.title}
            </h3>
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
            <div className="profile-background"></div>
            <div className="profile-card">
              <div className="profile-image relative w-full h-[280px] sm:h-[320px] md:h-[360px]">
                {imageLoading && <LoadingSpinner />}
                <Image
                  src={getImagePath('/profile.jpg')}
                  alt={t.name}
                  fill
                  className="object-cover object-center"
                  onLoadingComplete={() => setImageLoading(false)}
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                  priority
                />
              </div>
              <div className="social-links">
                <a href="https://github.com/ErenMlg" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/MollaogluEren" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/mollaoglueren" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">
            {t.sections.skills.title}
          </h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-android"></i>
              </div>
              <h3>{t.sections.skills.android.title}</h3>
              <p>{t.sections.skills.android.description}</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>{t.sections.skills.crossPlatform.title}</h3>
              <p>{t.sections.skills.crossPlatform.description}</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>{t.sections.skills.ai.title}</h3>
              <p>{t.sections.skills.ai.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
