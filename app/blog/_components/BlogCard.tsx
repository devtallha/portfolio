'use client';
import Link from 'next/link';
import { IBlogPost } from '@/types/blog';
import { MoveUpRight } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

const BlogCard = ({ post, priority = false }: { post: IBlogPost; priority?: boolean }) => {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full hover:bg-background-light transition-colors duration-300"
        >
            {/* Image */}
            <div className="aspect-video w-full bg-background-light relative overflow-hidden">
                {post.image ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority={priority}
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/10 font-anton text-6xl">
                        {post.title.substring(0, 1)}
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8 flex flex-col grow">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="section-label">{format(new Date(post.date), 'MMM dd, yyyy')}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/20" />
                    <span className="section-label">{post.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-anton text-2xl leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2 mb-8 font-roboto-flex leading-relaxed grow">
                    {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-border pt-5">
                    <div className="flex gap-2 flex-wrap">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="section-label px-2 py-1 border border-border">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="size-8 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
                        <MoveUpRight size={14} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
