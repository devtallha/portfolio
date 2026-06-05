import type { Metadata } from 'next';
import Link from 'next/link';
import { Anton } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    robots: { index: false, follow: false },
};

const anton = Anton({ weight: '400', subsets: ['latin'] });

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className={`${anton.className} text-[120px] sm:text-[180px] leading-none text-primary`}>
                404
            </h1>
            <p className="text-2xl font-anton mt-4 mb-2">Page not found</p>
            <p className="text-muted-foreground mb-10 max-w-sm">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-8 py-3 border border-border hover:border-primary hover:text-primary transition-all duration-300 font-anton uppercase tracking-widest text-sm"
            >
                Back to home
            </Link>
        </div>
    );
}
