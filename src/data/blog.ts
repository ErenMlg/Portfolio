import postsData from './posts.json';

export interface PostContent {
  title: string;
  excerpt: string;
  body: string[];
  highlights?: string[];
}

export interface Post {
  slug: string;
  date: string;
  image: string;
  linkedin: string;
  tags: string[];
  links: { label: string; url: string }[];
  tr: PostContent;
  en: PostContent;
}

export const posts: Post[] = [...(postsData.posts as Post[])].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

// Dates are stored as plain YYYY-MM-DD; format in UTC so no timezone shifts the day.
export const formatPostDate = (date: string, language: 'tr' | 'en') =>
  new Intl.DateTimeFormat(language === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
