'use client';

import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/app/components/ui/Container';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ArrowRight,
  Phone,
  Leaf,
} from 'lucide-react';
import { getPostBySlug, posts, categories } from '../data';
import ReactMarkdown from 'react-markdown';
import { useTranslations } from '@/app/i18n';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations();
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categoryLabels: Record<string, string> = {
    all: t.blogPage.allTips,
    njega: t.blogPage.plantCare,
    sadnja: t.blogPage.plantingTransplanting,
    sezona: t.blogPage.seasonalTips,
  };

  const category = categories.find((c) => c.id === post.category);
  const categoryLabel = categoryLabels[post.category] || category?.label;
  const Icon = post.icon;

  // Get related posts (same category, excluding current)
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <main>
      {/* Hero Section */}
      <section className='relative py-20 md:py-28 overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-cover'
            sizes='100vw'
            quality={70}
            priority
          />
        </div>
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/65' />

        <Container className='relative z-10'>
          {/* Back Link */}
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8'
          >
            <ArrowLeft className='w-4 h-4' />
            <span>{t.blogPage.backToTips}</span>
          </Link>

          <div className='max-w-4xl'>
            {/* Category Badge */}
            <div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold mb-6'
              style={{ backgroundColor: '#274223' }}
            >
              <Icon className='w-4 h-4' />
              <span>{categoryLabel}</span>
            </div>

            {/* Title */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6'>
              {post.title}
            </h1>

            {/* Meta */}
            <div className='flex flex-wrap items-center gap-6 text-white/80'>
              <div className='flex items-center gap-2'>
                <Calendar className='w-5 h-5' />
                <span>{post.date}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Clock className='w-5 h-5' />
                <span>{post.readTime} {t.blogPage.reading}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className='py-12 md:py-16'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Main Content */}
            <article className='lg:col-span-8'>
              <div className='prose prose-lg max-w-none prose-headings:text-neutral-900 prose-headings:font-bold prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-[#274223] prose-a:font-semibold prose-strong:text-neutral-900 prose-ul:text-neutral-700 prose-ol:text-neutral-700 prose-li:marker:text-[#274223]'>
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className='text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4 pb-2 border-b-2' style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}>
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className='text-xl md:text-2xl font-bold text-neutral-900 mt-8 mb-3'>
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className='text-neutral-700 leading-relaxed mb-4'>
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className='list-disc pl-6 space-y-2 mb-6 text-neutral-700'>
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className='list-decimal pl-6 space-y-2 mb-6 text-neutral-700'>
                        {children}
                      </ol>
                    ),
                    strong: ({ children }) => (
                      <strong className='font-bold text-neutral-900'>
                        {children}
                      </strong>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className='border-l-4 pl-4 italic text-neutral-600 my-6' style={{ borderColor: '#274223' }}>
                        {children}
                      </blockquote>
                    ),
                    table: ({ children }) => (
                      <div className='overflow-x-auto my-6'>
                        <table className='min-w-full border-collapse border-2 rounded-xl' style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}>
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className='px-4 py-3 text-left font-bold text-white' style={{ backgroundColor: '#274223' }}>
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className='px-4 py-3 border-t text-neutral-700' style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}>
                        {children}
                      </td>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Share / Tags */}
              <div className='mt-12 pt-8 border-t-2' style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}>
                <div className='flex flex-wrap items-center gap-3'>
                  <span className='text-neutral-600 font-medium'>{t.blogPage.category}</span>
                  <span
                    className='px-4 py-2 rounded-full text-sm font-semibold text-white'
                    style={{ backgroundColor: '#274223' }}
                  >
                    {categoryLabel}
                  </span>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className='lg:col-span-4'>
              <div className='sticky top-24 space-y-8'>
                {/* Contact Card */}
                <div
                  className='rounded-2xl p-6 text-white'
                  style={{ backgroundColor: '#274223' }}
                >
                  <div className='w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4'>
                    <Leaf className='w-6 h-6' />
                  </div>
                  <h3 className='text-xl font-bold mb-2'>{t.blogPage.needHelpSidebar}</h3>
                  <p className='text-white/80 mb-4'>
                    {t.blogPage.needHelpSidebarDesc}
                  </p>
                  <a
                    href='tel:+385919211069'
                    className='flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white font-bold transition-all hover:bg-neutral-100'
                    style={{ color: '#274223' }}
                  >
                    <Phone className='w-5 h-5' />
                    <span>+385 91 921 1069</span>
                  </a>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div
                    className='rounded-2xl border-2 p-6'
                    style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
                  >
                    <h3 className='text-lg font-bold text-neutral-900 mb-4'>
                      {t.blogPage.relatedArticles}
                    </h3>
                    <div className='space-y-4'>
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.slug}`}
                          className='group block'
                        >
                          <div className='flex gap-4'>
                            <div className='relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0'>
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                className='object-cover group-hover:scale-105 transition-transform'
                              />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <h4 className='font-semibold text-neutral-900 group-hover:text-[#274223] transition-colors line-clamp-2'>
                                {relatedPost.title}
                              </h4>
                              <p className='text-sm text-neutral-500 mt-1'>
                                {relatedPost.readTime} {t.blogPage.reading}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Posts Link */}
                <Link
                  href='/blog'
                  className='flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 font-semibold transition-all hover:shadow-lg'
                  style={{ borderColor: '#274223', color: '#274223' }}
                >
                  <span>{t.blogPage.allTipsButton}</span>
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

    </main>
  );
}
