import Link from 'next/link';
import { Post, formatPostDate } from '../data/blog';

export default function PostCard({ post, language }: { post: Post; language: 'tr' | 'en' }) {
  const content = post[language];

  return (
    <Link href={`/blog/${post.slug}`} className="post-card">
      <time dateTime={post.date} className="post-date">
        {formatPostDate(post.date, language)}
      </time>
      <h3 className="post-title">{content.title}</h3>
      <p className="post-excerpt">{content.excerpt}</p>
      <div className="project-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
    </Link>
  );
}
