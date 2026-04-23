import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';
import { getBlogPosts } from '@/lib/blog';

const baseUrl = 'https://tallha.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogPosts = await getBlogPosts();
    
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
        ...blogPosts.map(
            (post): MetadataRoute.Sitemap[0] => ({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: new Date(post.date),
                changeFrequency: 'weekly',
                priority: 0.9,
            }),
        ),
    ];
}
