import { getBlogPosts } from '@/lib/blog';
import BlogCard from './_components/BlogCard';
import { Metadata } from 'next';
import TransitionLink from '@/components/TransitionLink';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Technical Journal | Architecture, AI & Full-Stack Insights',
    description: 'In-depth articles on software architecture, AI integration, and full-stack development by Tallha Mushtaq.',
    alternates: {
        canonical: 'https://tallha.dev/blog',
    },
    openGraph: {
        title: 'Technical Journal | Tallha Mushtaq',
        description: 'In-depth articles on software architecture, AI integration, and full-stack development.',
        type: 'website',
        url: 'https://tallha.dev/blog',
        images: [{ url: '/logo/devtallha.png', width: 1200, height: 630, alt: 'Tallha Mushtaq Journal' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technical Journal | Tallha Mushtaq',
        description: 'In-depth articles on software architecture, AI integration, and full-stack development.',
        images: ['/logo/devtallha.png'],
    },
};

const BlogPage = async () => {
    const posts = await getBlogPosts();

    return (
        <main className="min-h-screen">
            <div className="container py-12">
                <TransitionLink
                    back
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-16 group font-roboto-flex text-sm"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Back to Home
                </TransitionLink>

                <header className="mb-16 border-b border-border pb-12">
                    <div className="rule mb-6" />
                    <h1 className="font-anton text-display-xl uppercase leading-[0.9]">
                        The <span className="text-primary">Journal</span>
                    </h1>
                    <p className="text-foreground/50 mt-6 max-w-xl font-roboto-flex text-base leading-relaxed">
                        Thoughts on software architecture, modern web technologies, and building at scale.
                    </p>
                </header>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                        {posts.map((post) => (
                            <div key={post.slug} className="bg-background">
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground py-20 text-center">Writing in progress — check back soon.</p>
                )}
            </div>
        </main>
    );
};

export default BlogPage;
