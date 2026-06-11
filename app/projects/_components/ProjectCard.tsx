'use client';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { MoveUpRight, Calendar, Code2 } from 'lucide-react';
import React from 'react';

const ProjectCard = ({ project, index }: { project: IProject; index: number }) => {
    return (
        <TransitionLink 
            href={`/projects/${project.slug}`}
            className="group flex flex-col h-full bg-background-light/50 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
        >
            <div className="aspect-video w-full bg-background-light relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/10 font-anton text-8xl">
                    {(index + 1).toString().padStart(2, '0')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-medium uppercase tracking-widest">
                        {project.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        <Calendar size={12} className="text-primary" />
                        {project.year}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                        <Code2 size={12} className="text-primary" />
                        {project.techStack.length} Technologies
                    </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300 font-roboto-flex leading-tight uppercase font-anton">
                    {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-8 font-roboto-flex leading-relaxed">
                    {project.description.replace(/<[^>]*>?/gm, '').trim().substring(0, 160)}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="px-2.5 py-1 rounded-full bg-muted text-xs uppercase tracking-tighter text-muted-foreground">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="size-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500">
                        <MoveUpRight size={16} />
                    </div>
                </div>
            </div>
        </TransitionLink>
    );
};

export default ProjectCard;
