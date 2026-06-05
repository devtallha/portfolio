import Banner from './_components/Banner';
import BelowFold from './_components/BelowFold';
import OpenSourcePreview from './_components/OpenSourcePreview';
import BlogPreview from './_components/BlogPreview';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Senior MERN Architect & AI-SaaS Specialist',
    description: 'Portfolio of Tallha Mushtaq, a Senior MERN Stack Architect specializing in scalable SaaS solutions, AI integrations, and technical leadership. Shipped products for 15,000+ users.',
};

export default async function Home() {
    return (
        <div>
            <Banner />
            <BelowFold />
            <OpenSourcePreview />
            <BlogPreview />
        </div>
    );
}
