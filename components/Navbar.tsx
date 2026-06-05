'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useUpworkMode } from '@/lib/hooks/useUpworkMode';
import ThemeToggle from './ThemeToggle';

const MENU_LINKS = [
    { name: 'Home', url: '/' },
    { name: 'About Me', url: '/#about-me' },
    { name: 'Experience', url: '/#my-experience' },
    { name: 'Projects', url: '/#selected-projects' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/#contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const isUpwork = useUpworkMode();

    const socialLinks = isUpwork
        ? SOCIAL_LINKS.filter(link => link.name.toLowerCase() !== 'linkedin')
        : SOCIAL_LINKS;

    const menuLinks = isUpwork
        ? MENU_LINKS.filter(link => link.name.toLowerCase() !== 'contact')
        : MENU_LINKS;

    return (
        <>
            {/* Hamburger trigger + theme toggle */}
            <div className="fixed top-0 right-0 z-[4] p-5 md:p-8 flex items-center gap-3">
                <ThemeToggle />
                <button
                    className="group flex flex-col gap-[5px] items-end"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    <span className={cn(
                        'block h-px bg-foreground transition-all duration-300 origin-right',
                        isMenuOpen ? 'w-6 rotate-45 translate-y-[3px]' : 'w-6 group-hover:w-8',
                    )} />
                    <span className={cn(
                        'block h-px bg-foreground transition-all duration-300 origin-right',
                        isMenuOpen ? 'w-6 -rotate-45 -translate-y-[3px]' : 'w-4 group-hover:w-8',
                    )} />
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={cn(
                    'fixed inset-0 z-[2] bg-black/60 backdrop-blur-sm transition-all duration-300',
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
                )}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <nav
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[480px] max-w-[calc(100vw-2rem)] z-[3]',
                    'bg-background border-l border-border',
                    'flex flex-col justify-between py-12 px-10',
                    'transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]',
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full',
                )}
            >
                {/* Top label */}
                <div className="flex items-center justify-between">
                    <span className="section-label">Navigation</span>
                    <span className="section-label">{new Date().getFullYear()}</span>
                </div>

                {/* Menu links */}
                <ul className="space-y-1">
                    {menuLinks.map((link, i) => (
                        <li key={link.name} className="border-b border-border">
                            <button
                                onClick={() => {
                                    router.push(link.url);
                                    setIsMenuOpen(false);
                                }}
                                className="group w-full flex items-center justify-between py-4 text-left"
                            >
                                <div className="flex items-baseline gap-4">
                                    <span className="section-label tabular-nums">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-anton text-3xl tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {link.name}
                                    </span>
                                </div>
                                <MoveUpRight
                                    size={16}
                                    className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"
                                />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Bottom — socials + email */}
                <div className="space-y-6">
                    <div>
                        <p className="section-label mb-3">Socials</p>
                        <div className="flex gap-6">
                            {socialLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-medium capitalize text-foreground/60 hover:text-primary transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    {!isUpwork && (
                        <div>
                            <p className="section-label mb-1">Email</p>
                            <a
                                href={`mailto:${GENERAL_INFO.email}`}
                                className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                            >
                                {GENERAL_INFO.email}
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
