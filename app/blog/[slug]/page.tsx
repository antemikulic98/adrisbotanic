import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, posts } from '../data';
import BlogPostClient from './BlogPostClient';

// Svi članci se pre-renderiraju u buildu (SSG) — brže i bolje za SEO
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://adrisbotanic.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Adris Botanic`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      images: [{ url: post.image.src, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://adrisbotanic.com${post.image.src}`,
    url: `https://adrisbotanic.com/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'Adris Botanic',
      url: 'https://adrisbotanic.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Adris Botanic',
      url: 'https://adrisbotanic.com',
    },
    mainEntityOfPage: `https://adrisbotanic.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient slug={slug} />
    </>
  );
}
