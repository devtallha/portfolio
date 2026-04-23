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
        openGraph: {
            title: `${post.title} | Tallha Mushtaq`,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: ['Tallha Mushtaq'],
            images: [
                {
                    url: post.image || '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
            <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors mb-12 group font-roboto-flex"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Journal
            </Link>

            <header className="mb-16">
                <div className="flex items-center gap-6 mb-8 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-blue-500" />
                        {format(new Date(post.date), 'MMMM dd, yyyy')}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock size={14} className="text-blue-500" />
                        {post.readingTime}
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-anton uppercase tracking-tight leading-[1.1] mb-8">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-3">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-muted-foreground border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {post.image && (
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-16 border border-white/5">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-invert prose-blue max-w-none font-roboto-flex text-lg leading-relaxed">
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
