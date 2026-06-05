'use client';
import dynamic from 'next/dynamic';

// Client components only — Server Components (BlogPreview, OpenSourcePreview) stay in page.tsx
const AboutMe = dynamic(() => import('./AboutMe'), { ssr: false, loading: () => null });
const Skills = dynamic(() => import('./Skills'), { ssr: false, loading: () => null });
const Experiences = dynamic(() => import('./Experiences'), { ssr: false, loading: () => null });
const ProjectList = dynamic(() => import('./ProjectList'), { ssr: false, loading: () => null });
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false, loading: () => null });
const Contact = dynamic(() => import('./Contact'), { ssr: false, loading: () => null });

export default function BelowFold() {
    return (
        <>
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
            <Testimonials />
            <Contact />
        </>
    );
}
