import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { getOpenSourceProjects } from '@/lib/github';
import OpenSourceCard from './OpenSourceCard';
import TransitionLink from '@/components/TransitionLink';

const OpenSourcePreview = async () => {
    const projects = await getOpenSourceProjects();
    const topProjects = projects.slice(0, 3);

    return (
        <section className="py-24 border-t border-white/5" id="opensource-preview">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <SectionTitle title="OPEN SOURCE " />
                        <p className="text-muted-foreground mt-4 text-lg font-roboto-flex">
                            A collection of my public repositories, contributions, and 
                            experiments shared with the developer community.
                        </p>
                    </div>
                    
                    {projects.length > 3 && (
                        <TransitionLink 
                            href="/opensource" 
                            className="group flex items-center gap-4 text-foreground hover:text-primary transition-all font-roboto-flex text-xl uppercase font-anton tracking-wider"
                        >
                            View all open source
                            <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500">
                                <MoveUpRight size={20} />
                            </div>
                        </TransitionLink>
                    )}
                </div>

                {topProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topProjects.map((repo) => (
                            <OpenSourceCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-2xl text-muted-foreground">Fetching repositories...</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OpenSourcePreview;
