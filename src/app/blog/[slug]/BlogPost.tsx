'use client';

import Link from 'next/link';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import { useLanguage } from '../../../context/LanguageContext';
import { Post, formatPostDate } from '../../../data/blog';

export default function BlogPost({ post }: { post: Post }) {
  const { t, language } = useLanguage();
  const content = post[language];

  return (
    <div className="page-container">
      <div className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link href="/blog" className="back-button" aria-label={t.blog.backToBlog}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <span className="page-title">{t.blog.title}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <article className="container py-16">
        <div className="article">
          <time dateTime={post.date} className="post-date">
            {formatPostDate(post.date, language)}
          </time>
          <h1 className="article-title">{content.title}</h1>
          <div className="project-tags mb-10">
            {post.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>

          {content.body.map((paragraph) => (
            <p key={paragraph} className="article-paragraph">{paragraph}</p>
          ))}

          {content.highlights && (
            <>
              <h2 className="article-heading">{t.blog.highlights}</h2>
              <ul className="article-list">
                {content.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {post.links.length > 0 && (
            <>
              <h2 className="article-heading">{t.blog.links}</h2>
              <ul className="article-links">
                {post.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>
                  </li>
                ))}
              </ul>
            </>
          )}

          <a href={post.linkedin} target="_blank" rel="noopener noreferrer" className="article-original">
            {t.blog.original} ↗
          </a>
        </div>
      </article>
    </div>
  );
}
