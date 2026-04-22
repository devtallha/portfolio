import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

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
        openGraph: {
            title: `${project.title} | Tallha Mushtaq`,
            description: plainDescription,
            type: 'article',
            url: `https://tallha.dev/projects/${project.slug}`,
            images: [
                {
                    url: '/og-image.png', // Ideally each project has an image
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
            images: ['/og-image.png'],
        },
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
