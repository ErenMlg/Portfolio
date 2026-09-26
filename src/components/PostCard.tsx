import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '../../utils/imageUtils';
import { Post, formatPostDate } from '../data/blog';

export default function PostCard({ post, language, priority = false }: { post: Post; language: 'tr' | 'en'; priority?: boolean }) {
  const content = post[language];

  return (
    <Link href={`/blog/${post.slug}`} className="project-card group">
      <div className="project-image-container">
        <Image
          src={getImagePath(post.image || '/projects/default.svg')}
          alt={content.title}
          fill
          className="project-image object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
          priority={priority}
        />
      </div>
      <div className="project-content">
        <time dateTime={post.date} className="post-date mb-2">
          {formatPostDate(post.date, language)}
        </time>
        <h3 className="post-title mb-2">{content.title}</h3>
        <p className="project-description">{content.excerpt}</p>
        <div className="project-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
