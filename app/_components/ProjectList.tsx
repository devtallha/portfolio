'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_TYPES } from '@/lib/data';
import { IProject } from '@/types';
import SectionTitle from '@/components/SectionTitle';
import TransitionLink from '@/components/TransitionLink';
import { MoveUpRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const CARD_GAP = 24;
const CARD_WIDTH = 380;

const SliderCard = ({ project }: { project: IProject }) => {
    const originalIndex = PROJECTS.findIndex(p => p.slug === project.slug);
    const description = project.description.replace(/<[^>]*>?/gm, '').trim();

    return (
        <div className="group flex flex-col h-full bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500">
            {/* Card header */}
            <div className="relative bg-background-light/60 px-7 pt-7 pb-5 border-b border-border">
                <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-medium uppercase tracking-widest">
                        {project.type}
                    </span>
                    <span className="section-label tabular-nums">
                        {(originalIndex + 1).toString().padStart(2, '0')} / {PROJECTS.length.toString().padStart(2, '0')}
                    </span>
                </div>
                <h3 className="font-anton text-3xl uppercase leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="section-label mt-2">{project.year}</p>
            </div>

            {/* Card body */}
            <div className="flex flex-col grow px-7 py-6">
                <p className="text-foreground/60 text-sm leading-relaxed font-roboto-flex line-clamp-3 mb-6">
                    {description.substring(0, 180)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map(tech => (
                        <span key={tech} className="px-2.5 py-1 rounded-full bg-muted text-xs uppercase tracking-tighter text-muted-foreground">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-5 border-t border-border flex items-center justify-between gap-3">
                    <TransitionLink
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 text-sm font-medium font-roboto-flex text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                        View details
                        <MoveUpRight size={14} />
                    </TransitionLink>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            <ExternalLink size={12} />
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const ALL = 'All';

const ProjectList = () => {
    const [activeFilter, setActiveFilter] = useState<string>(ALL);
    const sliderRef = useRef<HTMLDivElement>(null);

    const filtered = activeFilter === ALL
        ? PROJECTS
        : PROJECTS.filter(p => p.type === activeFilter);

    const scroll = useCallback((dir: 'left' | 'right') => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === 'right' ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP),
            behavior: 'smooth',
        });
    }, []);

    const handleFilter = (type: string) => {
        setActiveFilter(type);
        if (sliderRef.current) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="Projects" />

                {/* Filter buttons */}
                <motion.div
                    className="flex flex-wrap gap-2 mb-10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={() => handleFilter(ALL)}
                        className={cn(
                            'px-4 py-2 text-[11px] font-medium uppercase tracking-widest border transition-all duration-300',
                            activeFilter === ALL
                                ? 'border-primary bg-primary text-black'
                                : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground',
                        )}
                    >
                        All <span className="ml-1 opacity-60">({PROJECTS.length})</span>
                    </button>
                    {PROJECT_TYPES.map(type => {
                        const count = PROJECTS.filter(p => p.type === type).length;
                        return (
                            <button
                                key={type}
                                onClick={() => handleFilter(type)}
                                className={cn(
                                    'px-4 py-2 text-[11px] font-medium uppercase tracking-widest border transition-all duration-300',
                                    activeFilter === type
                                        ? 'border-primary bg-primary text-black'
                                        : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground',
                                )}
                            >
                                {type} <span className="ml-1 opacity-60">({count})</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Slider track */}
                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            {filtered.map((project, i) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.25, delay: i * 0.04 }}
                                    className="snap-start shrink-0 w-[85vw] sm:w-[360px] md:w-[380px]"
                                >
                                    <SliderCard project={project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Spacer so last card doesn't sit flush at edge */}
                        <div className="shrink-0 w-6" aria-hidden="true" />
                    </div>

                    {/* Bottom row: view all + nav arrows */}
                    <div className="flex items-center justify-between mt-8">
                        <TransitionLink
                            href="/projects"
                            className="group flex items-center gap-4 text-foreground hover:text-primary transition-all font-anton text-lg uppercase tracking-wider"
                        >
                            View all projects
                            <div className="size-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500">
                                <MoveUpRight size={16} />
                            </div>
                        </TransitionLink>

                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                aria-label="Scroll left"
                                className="size-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                aria-label="Scroll right"
                                className="size-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
