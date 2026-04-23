import React from 'react';
import Link from 'next/link';

export const components = {
    h1: (props: any) => (
        <h1 
            className="text-3xl md:text-5xl font-anton uppercase tracking-tight mt-12 mb-6" 
            {...props} 
        />
    ),
    h2: (props: any) => (
        <h2 
            className="text-2xl md:text-3xl font-anton uppercase tracking-tight mt-10 mb-5 text-blue-500/90" 
            {...props} 
        />
    ),
    h3: (props: any) => (
        <h3 
            className="text-xl md:text-2xl font-bold font-roboto-flex mt-8 mb-4" 
            {...props} 
        />
    ),
    p: (props: any) => (
        <p 
            className="text-lg text-muted-foreground leading-relaxed mb-6 font-roboto-flex" 
            {...props} 
        />
    ),
    ul: (props: any) => (
        <ul className="list-none space-y-3 mb-8" {...props} />
    ),
    li: (props: any) => (
        <li className="flex gap-3 text-muted-foreground font-roboto-flex">
            <span className="text-blue-500 mt-1.5">•</span>
            <span>{props.children}</span>
        </li>
    ),
    a: ({ href, children, ...props }: any) => {
        if (href?.startsWith('/')) {
            return (
                <Link 
                    href={href} 
                    className="text-blue-500 hover:underline font-medium transition-all" 
                    {...props}
                >
                    {children}
                </Link>
            );
        }
        return (
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline font-medium transition-all" 
                {...props}
            >
                {children}
            </a>
        );
    },
    blockquote: (props: any) => (
        <blockquote 
            className="border-l-4 border-blue-500 bg-blue-500/5 px-8 py-6 my-10 italic rounded-r-2xl font-roboto-flex text-xl text-foreground/90" 
            {...props} 
        />
    ),
    code: (props: any) => (
        <code 
            className="bg-white/5 rounded px-1.5 py-0.5 font-mono text-sm" 
            {...props} 
        />
    ),
    pre: (props: any) => (
        <pre 
            className="bg-[#282c34] p-6 rounded-2xl overflow-x-auto my-8 border border-white/5 font-mono text-sm leading-relaxed" 
            {...props} 
        />
    ),
};
