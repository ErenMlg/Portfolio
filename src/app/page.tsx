'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '../../utils/imageUtils';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="intro-text">
            <h2 className="greeting">Merhaba, Ben</h2>
            <h1 className="name">
              Eren Mollaoğlu
            </h1>
            <h3 className="title">
              Jr. Android Developer
            </h3>
            <p className="description">
              Mobil uygulama geliştirme konusunda tutkulu, yenilikçi çözümler üreten ve sürekli öğrenmeye odaklı bir yazılım geliştiricisi.
            </p>
            <div className="cta-buttons">
              <Link href="/projects" className="cta-button primary">
                Projelerimi Gör
              </Link>
              <Link href="/contact" className="cta-button secondary">
                İletişime Geç
              </Link>
            </div>
          </div>
          <div className="profile-section">
            <div className="profile-background"></div>
            <div className="profile-card">
              <div className="profile-image relative">
                {imageLoading && <LoadingSpinner />}
                <Image
                  src={getImagePath('/profile.jpg')}
                  alt="Eren Mollaoğlu"
                  fill
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                  onLoadingComplete={() => setImageLoading(false)}
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

      {/* Expertise Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">
            Uzmanlık Alanlarım
          </h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fab fa-android"></i>
              </div>
              <h3>Android Geliştirme</h3>
              <p>Kotlin, Jetpack Compose, XML, Multiplatform</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Cross Platform</h3>
              <p>Flutter, Dart</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Yapay Zeka</h3>
              <p>TensorFlow, Keras, HuggingFace, Python</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
