import { getBlogPosts } from '@/lib/blog';
import BlogCard from './_components/BlogCard';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog | Insights from a Senior MERN Developer',
    description: 'Explore articles on Next.js, React, Node.js, and System Architecture by Tallha Mushtaq.',
};

const BlogPage = async () => {
    const posts = await getBlogPosts();

    return (
        <section className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors mb-12 group font-roboto-flex"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <header className="mb-16">
                    <h1 className="text-6xl md:text-8xl font-anton uppercase mb-6 tracking-tighter">
                        The <span className="text-blue-500">Journal</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-roboto-flex">
                        Sharing my thoughts on software architecture, modern web technologies, 
                        and building scalable digital solutions.
                    </p>
                </header>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-2xl text-muted-foreground">Writing in progress... check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogPage;
