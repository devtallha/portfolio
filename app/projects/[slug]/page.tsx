import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) return {};

    const plainDescription = project.description.replace(/<[^>]*>?/gm, '').trim();

    return {
        title: project.title,
        description: plainDescription,
        alternates: {
            canonical: `https://tallha.dev/projects/${project.slug}`,
        },
        openGraph: {
            title: `${project.title} | Tallha Mushtaq`,
            description: plainDescription,
            type: 'article',
            url: `https://tallha.dev/projects/${project.slug}`,
            images: [
                {
                    url: '/logo/devtallha.png',
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: plainDescription,
            images: ['/logo/devtallha.png'],
        },
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    const plainDescription = project.description.replace(/<[^>]*>?/gm, '').trim();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        description: plainDescription,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        url: project.liveUrl || `https://tallha.dev/projects/${project.slug}`,
        dateCreated: `${project.year}-01-01`,
        author: {
            '@type': 'Person',
            name: 'Tallha Mushtaq',
            url: 'https://tallha.dev',
        },
        keywords: project.techStack.join(', '),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProjectDetails project={project} />
        </>
    );
};

export default Page;
