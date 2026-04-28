import { OPEN_SOURCE_REPOS } from './data';

export interface GithubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    topics: string[];
}

export async function getOpenSourceProjects(): Promise<GithubRepo[]> {
    try {
        if (!OPEN_SOURCE_REPOS || OPEN_SOURCE_REPOS.length === 0) {
            return [];
        }

        const projectData = await Promise.all(
            OPEN_SOURCE_REPOS.map(async (url) => {
                try {
                    // Extract owner and repo from github URL
                    // Handles https://github.com/owner/repo and trailing slashes
                    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
                    if (!match) return null;

                    const owner = match[1];
                    const repo = match[2].replace(/\/$/, ''); // Remove trailing slash if any

                    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
                        next: { revalidate: 3600 }, // Cache for 1 hour
                    });

                    if (!res.ok) {
                        console.error(`Failed to fetch repo ${owner}/${repo}:`, res.statusText);
                        return null;
                    }

                    return (await res.json()) as GithubRepo;
                } catch (err) {
                    console.error(`Error fetching repo from ${url}:`, err);
                    return null;
                }
            })
        );

        return projectData.filter((repo): repo is GithubRepo => !!repo);
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        return [];
    }
}


