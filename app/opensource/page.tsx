import { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';
import { ArrowLeft } from 'lucide-react';
import { getOpenSourceProjects } from '@/lib/github';
import OpenSourceCard from '../_components/OpenSourceCard';

// export const dynamic = 'force-static'; // If we use force-static with fetch revalidate it might complain if fetch isn't statically analyzable or cached properly, but usually it works if fetch has revalidate. Let's just leave default behavior.

export const metadata: Metadata = {
    title: 'Open Source | Senior MERN Stack Developer Portfolio',
    description: 'Explore my public repositories, open-source contributions, and experimental projects on GitHub.',
};

const OpenSourcePage = async () => {
    const projects = await getOpenSourceProjects();

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
                        Open <span className="text-primary">Source</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-roboto-flex">
                        A collection of my public repositories, contributions, and 
                        experiments shared with the developer community.
                    </p>
                </header>

                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((repo) => (
                            <OpenSourceCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-2xl text-muted-foreground">No repositories found or still fetching.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default OpenSourcePage;
