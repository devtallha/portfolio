export interface IBlogPost {
    title: string;
    description: string;
    date: string;
    slug: string;
    image?: string;
    tags: string[];
    content: string;
    readingTime: string;
}

export interface IBlogFrontmatter {
    title: string;
    description: string;
    date: string;
    image?: string;
    tags?: string; // Comma separated tags
}
