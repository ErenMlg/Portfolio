import { notFound } from 'next/navigation';
import { getPost, posts } from '../../../data/blog';
import BlogPost from './BlogPost';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.tr.title} - Eren Mollaoğlu`,
    description: post.tr.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
