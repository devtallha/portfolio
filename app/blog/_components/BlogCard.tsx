'use client';
import Link from 'next/link';
import { IBlogPost } from '@/types/blog';
import { MoveUpRight, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import Image from 'next/image';

const BlogCard = ({ post }: { post: IBlogPost }) => {
    return (
        <Link 
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full bg-background-light/50 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
        >
            {/* Image Placeholder or Actual Image */}
            <div className="aspect-video w-full bg-white/5 relative overflow-hidden">
                {post.image ? (
                    <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 font-anton text-4xl">
                        {post.title.substring(0, 1)}
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-4 mb-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-blue-500" />
                        {format(new Date(post.date), 'MMM dd, yyyy')}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-blue-500" />
                        {post.readingTime}
                    </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-500 transition-colors duration-300 font-roboto-flex leading-tight">
                    {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-8 font-roboto-flex leading-relaxed">
                    {post.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-tighter text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="size-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-black transition-all duration-500">
                        <MoveUpRight size={16} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
