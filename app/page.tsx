import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import OpenSourcePreview from './_components/OpenSourcePreview';
import BlogPreview from './_components/BlogPreview';
import Testimonials from './_components/Testimonials';
import Contact from './_components/Contact';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Senior MERN Architect & AI-SaaS Specialist',
    description: 'Portfolio of Tallha Mushtaq, a Senior MERN Stack Architect specializing in scalable SaaS solutions, AI integrations, and technical leadership. Shipped products for 15,000+ users.',
};

export default async function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
            <Testimonials />
            <OpenSourcePreview />
            <BlogPreview />
            <Contact />
        </div>
    );
}
