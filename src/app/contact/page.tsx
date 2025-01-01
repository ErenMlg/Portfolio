'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:eren.mollaoglu@outlook.com?subject=İletişim Formu: ${formData.name}&body=${formData.message}%0D%0A%0D%0AGönderen: ${formData.email}`;
  };

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
            <h1 className="page-title">İletişime Geç</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8">
          {/* İletişim Bilgileri */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-fit">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[var(--android-dark)] mb-8">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <a 
                  href="https://github.com/ErenMlg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[var(--text-primary)] hover:text-[var(--android-green)] transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-[var(--android-green)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">github.com/ErenMlg</span>
                </a>
                <a 
                  href="https://twitter.com/MollaogluEren" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[var(--text-primary)] hover:text-[var(--android-green)] transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-[var(--android-green)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">@MollaogluEren</span>
                </a>
                <a 
                  href="mailto:mollaoglueren@gmail.com"
                  className="flex items-center gap-4 text-[var(--text-primary)] hover:text-[var(--android-green)] transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-[var(--android-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">eren.mollaoglu@outlook.com</span>
                </a>
                <div className="flex items-center gap-4 text-[var(--text-primary)]">
                  <svg className="w-6 h-6 text-[var(--android-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Türkiye</span>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Mesajınız"
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">
                  Gönder
                  <svg className="submit-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 