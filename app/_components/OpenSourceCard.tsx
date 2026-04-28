import Link from 'next/link';
import { GithubRepo } from '@/lib/github';
import { MoveUpRight, Star, GitFork, BookOpen } from 'lucide-react';
import { format } from 'date-fns';

const OpenSourceCard = ({ repo }: { repo: GithubRepo }) => {
    return (
        <a 
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col h-full bg-background-light/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
        >
            <div className="p-8 flex flex-col grow">
                <div className="flex items-center gap-4 mb-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                        <Star size={12} className="text-primary" />
                        {repo.stargazers_count} Stars
                    </span>
                    {repo.language && (
                        <span className="flex items-center gap-1.5">
                            <BookOpen size={12} className="text-primary" />
                            {repo.language}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300 font-roboto-flex leading-tight">
                    {repo.name}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-8 font-roboto-flex leading-relaxed">
                    {repo.description || 'No description provided.'}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-2 flex-wrap max-w-[80%]">
                        {repo.topics.slice(0, 3).map(topic => (
                            <span key={topic} className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-tighter text-muted-foreground">
                                {topic}
                            </span>
                        ))}
                    </div>
                    <div className="size-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500">
                        <MoveUpRight size={16} />
                    </div>
                </div>
            </div>
        </a>
    );
};

export default OpenSourceCard;
