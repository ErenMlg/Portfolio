'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { getImagePath } from '../../utils/imageUtils';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const [imageLoading, setImageLoading] = useState(true);

  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-gray-900">
      <section className="hero-section py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="profile-section mb-8 w-full max-w-md">
              <div className="profile-card rounded-2xl overflow-hidden bg-gray-800 shadow-xl">
                <div className="profile-image relative w-full h-[280px] sm:h-[320px] md:h-[360px]">
                  {imageLoading && <LoadingSpinner />}
                  <Image
                    src={getImagePath('/profile.jpg')}
                    alt="Eren Mollaoğlu"
                    fill
                    className="object-cover object-center"
                    onLoadingComplete={() => setImageLoading(false)}
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                    priority
                  />
                </div>
                <div className="social-links flex justify-center gap-6 py-4">
                  <a href="https://github.com/ErenMlg" target="_blank" rel="noopener noreferrer" className="social-link text-white hover:text-green-400 text-2xl">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://twitter.com/MollaogluEren" target="_blank" rel="noopener noreferrer" className="social-link text-white hover:text-green-400 text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/mollaoglueren" target="_blank" rel="noopener noreferrer" className="social-link text-white hover:text-green-400 text-2xl">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
=======
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
              <div className="profile-image relative w-full h-[280px] sm:h-[320px] md:h-[360px]">
                {imageLoading && <LoadingSpinner />}
                <Image
                  src={getImagePath('/profile.jpg')}
                  alt="Eren Mollaoğlu"
                  fill
                  className="object-cover object-center"
                  onLoadingComplete={() => setImageLoading(false)}
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                  priority
                />
>>>>>>> parent of ffd9cc8 (Update page.tsx)
              </div>
            </div>

            <div className="intro-text text-white mt-8">
              <h2 className="text-green-400 text-xl mb-2">Merhaba, Ben</h2>
              <h1 className="text-4xl font-bold mb-2">Eren Mollaoğlu</h1>
              <h3 className="text-2xl text-gray-300 mb-4">Jr. Android Developer</h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Mobil uygulama geliştirme konusunda tutkulu, yenilikçi çözümler üreten ve sürekli öğrenmeye odaklı bir yazılım mühendisi.
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
          </div>
        </div>
      </section>

      <section className="skills-section py-16 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Uzmanlık Alanlarım
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="skill-card bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-green-400 text-4xl mb-4">
                <i className="fab fa-android"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Android Geliştirme</h3>
              <p className="text-gray-400">Kotlin, Jetpack Compose, XML, Multiplatform</p>
            </div>
            <div className="skill-card bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-green-400 text-4xl mb-4">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cross Platform</h3>
              <p className="text-gray-400">Flutter, Dart</p>
            </div>
            <div className="skill-card bg-gray-900 p-6 rounded-xl text-center">
              <div className="text-green-400 text-4xl mb-4">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Yapay Zeka</h3>
              <p className="text-gray-400">TensorFlow, Keras, HuggingFace, Python</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
