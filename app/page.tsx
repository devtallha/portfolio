import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import BlogPreview from './_components/BlogPreview';
import { getBlogPosts } from '@/lib/blog';

export default async function Home() {
    const posts = await getBlogPosts();

    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
            <BlogPreview posts={posts} />
        </div>
    );
}
