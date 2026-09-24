'use client';

import Link from 'next/link';
import PostCard from '../../components/PostCard';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { posts } from '../../data/blog';

export default function BlogPage() {
  const { t, language } = useLanguage();

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
            <h1 className="page-title">{t.blog.title}</h1>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="projects-grid">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
