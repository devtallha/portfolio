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
        <section className="py-24 border-t border-white/5" id="blog-preview">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <SectionTitle title="LATEST INSIGHTS " />
                        <p className="text-muted-foreground mt-4 text-lg font-roboto-flex">
                            Sharing my thoughts on software architecture, modern web technologies, 
                            and building scalable digital solutions.
                        </p>
                    </div>
                    
                    {posts.length > 3 && (
                        <Link 
                            href="/blog" 
                            className="group flex items-center gap-4 text-foreground hover:text-blue-500 transition-all font-roboto-flex text-xl uppercase font-anton tracking-wider"
                        >
                            View all articles
                            <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-black transition-all duration-500">
                                <MoveUpRight size={20} />
                            </div>
                        </Link>
                    )}
                </div>

                {latestPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestPosts.map((post) => (
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

export default BlogPreview;

