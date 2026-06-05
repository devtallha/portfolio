import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { components } from '../_components/MDXComponents';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Metadata } from 'next';
import rehypePrettyCode from 'rehype-pretty-code';
import Image from 'next/image';

export const dynamic = 'force-static';

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `https://tallha.dev/blog/${slug}`,
        },
        openGraph: {
            title: `${post.title} | Tallha Mushtaq`,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: ['Tallha Mushtaq'],
            images: [
                {
                    url: post.image || '/logo/devtallha.png',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | Tallha Mushtaq`,
            description: post.description,
            images: [post.image || '/logo/devtallha.png'],
        },
    };
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        image: post.image ? `https://tallha.dev${post.image}` : 'https://tallha.dev/logo/devtallha.png',
        datePublished: post.date,
        dateModified: post.date,
        url: `https://tallha.dev/blog/${slug}`,
        author: {
            '@type': 'Person',
            name: 'Tallha Mushtaq',
            url: 'https://tallha.dev',
        },
        publisher: {
            '@type': 'Person',
            name: 'Tallha Mushtaq',
            url: 'https://tallha.dev',
        },
        keywords: post.tags.join(', '),
    };

    return (
        <article className="min-h-screen py-12 container max-w-3xl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-16 group font-roboto-flex text-sm"
            >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Journal
            </Link>

            <header className="mb-12">
                <div className="rule mb-8" />

                <div className="flex items-center gap-4 mb-6">
                    <span className="section-label">{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/20" />
                    <span className="section-label">{post.readingTime}</span>
                </div>

                <h1 className="font-anton text-display-lg uppercase leading-[0.95] mb-8">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="section-label px-2 py-1 border border-border">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {post.image && (
                <div className="relative aspect-video w-full overflow-hidden mb-12 border border-border">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="prose dark:prose-invert prose-amber max-w-none font-roboto-flex text-lg leading-relaxed">
                <MDXRemote 
                    source={post.content} 
                    components={components}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [
                                [
                                    rehypePrettyCode,
                                    {
                                        theme: 'one-dark-pro',
                                        keepBackground: true,
                                    },
                                ],
                            ],
                        },
                    }}
                />
            </div>
        </article>
    );
};

export default PostPage;
