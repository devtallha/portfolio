import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { getBlogPosts } from '@/lib/blog';
import BlogCard from '../blog/_components/BlogCard';

const BlogPreview = async () => {
    const posts = await getBlogPosts();
    const latestPosts = posts.slice(0, 3);

    return (
        <section className="py-section border-t border-border" id="blog-preview">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-0">
                    <SectionTitle title="Latest Insights" className="mb-0" />

                    {posts.length > 3 && (
                        <Link
                            href="/blog"
                            className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 font-anton text-lg uppercase tracking-wider mb-12 md:mb-16 shrink-0"
                        >
                            View all
                            <div className="size-9 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
                                <MoveUpRight size={14} />
                            </div>
                        </Link>
                    )}
                </div>

                {latestPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                        {latestPosts.map((post, i) => (
                            <div key={post.slug} className="bg-background">
                                <BlogCard post={post} priority={i === 0} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground py-20 text-center">Writing in progress — check back soon.</p>
                )}
            </div>
        </section>
    );
};

export default BlogPreview;
