'use client';
import SectionTitle from '@/components/SectionTitle';
import { IBlogPost } from '@/types/blog';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { MoveUpRight, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BlogPreview = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 border-t border-white/5" id="blog-preview">
            <div className="container" ref={containerRef}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <SectionTitle title="LATEST INSIGHTS " />
                        <p className="text-muted-foreground mt-4 text-lg font-roboto-flex">
                            Sharing my thoughts on software architecture, modern web technologies, 
                            and building scalable digital solutions.
                        </p>
                    </div>
                    
                    <Link 
                        href="/blog" 
                        className="group flex items-center gap-4 text-foreground hover:text-blue-500 transition-all font-roboto-flex text-xl uppercase font-anton tracking-wider"
                    >
                        View all articles
                        <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-black transition-all duration-500">
                            <MoveUpRight size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
