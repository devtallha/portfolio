import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';
import { getBlogPosts } from '@/lib/blog';

const baseUrl = 'https://tallha.dev';

// Last time each static section was meaningfully updated
const SITE_LAST_UPDATED = new Date('2025-06-01');
const PROJECTS_LAST_UPDATED = new Date('2025-06-01');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogPosts = await getBlogPosts();

    // Use the most recent blog post date as the blog listing's lastModified
    const latestBlogDate = blogPosts.length > 0
        ? new Date(blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0].date)
        : SITE_LAST_UPDATED;

    return [
        {
            url: baseUrl,
            lastModified: SITE_LAST_UPDATED,
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: PROJECTS_LAST_UPDATED,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: latestBlogDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/opensource`,
            lastModified: SITE_LAST_UPDATED,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        ...PROJECTS.map((project): MetadataRoute.Sitemap[0] => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(`${project.year}-06-01`),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        ...blogPosts.map((post): MetadataRoute.Sitemap[0] => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        })),
    ];
}
