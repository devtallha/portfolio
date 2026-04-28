import { PROJECTS } from '@/lib/data';
import ProjectCard from './_components/ProjectCard';
import { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Projects | Senior MERN Stack Developer Portfolio',
    description: 'Explore a curated list of my professional projects, ranging from large-scale food ordering systems to AI-driven social platforms.',
};

const ProjectsPage = () => {
    return (
        <section className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <TransitionLink 
                    href="/" 
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group font-roboto-flex"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </TransitionLink>

                <header className="mb-16">
                    <h1 className="text-6xl md:text-8xl font-anton uppercase mb-6 tracking-tighter">
                        My <span className="text-primary">Projects</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-roboto-flex">
                        A collection of high-impact digital solutions, engineered with 
                        scalability, performance, and user experience in mind.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
