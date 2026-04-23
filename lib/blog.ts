import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IBlogPost, IBlogFrontmatter } from '@/types/blog';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export async function getBlogPosts(): Promise<IBlogPost[]> {
    if (!fs.existsSync(blogDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(blogDirectory);
    
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(blogDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            const frontmatter = data as IBlogFrontmatter;

            // Calculate reading time roughly
            const wordsPerMinute = 200;
            const noOfWords = content.split(/\s/g).length;
            const minutes = noOfWords / wordsPerMinute;
            const readingTime = Math.ceil(minutes);

            return {
                slug,
                content,
                readingTime: `${readingTime} min read`,
                title: frontmatter.title,
                description: frontmatter.description,
                date: frontmatter.date,
                image: frontmatter.image,
                tags: frontmatter.tags ? frontmatter.tags.split(',').map(tag => tag.trim()) : [],
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string): Promise<IBlogPost | null> {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const frontmatter = data as IBlogFrontmatter;

    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readingTime = Math.ceil(minutes);

    return {
        slug,
        content,
        readingTime: `${readingTime} min read`,
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        image: frontmatter.image,
        tags: frontmatter.tags ? frontmatter.tags.split(',').map(tag => tag.trim()) : [],
    };
}
