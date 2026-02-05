import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

const baseUrl = 'https://tallha.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        ...PROJECTS.map(
            (project): MetadataRoute.Sitemap[0] => ({
                url: `${baseUrl}/projects/${project.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            }),
        ),
    ];
}
