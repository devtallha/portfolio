import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://tallha.dev'),
    title: {
        default: 'Tallha Mushtaq | Senior Architect & AI-SaaS Specialist | MERN Stack Developer',
        template: '%s | Tallha Mushtaq',
    },
    description:
        'Senior MERN Stack Architect and Top Rated Plus Upwork freelancer specializing in AI-integrated SaaS products, scalable architecture, and technical leadership. 4+ years, 15,000+ users served.',
    keywords: [
        'Senior MERN Stack Developer',
        'AI SaaS Developer',
        'Node.js Architect',
        'NestJS Expert',
        'Next.js Developer',
        'Upwork Top Rated Plus',
        'Full Stack Developer Pakistan',
        'LLM Integration Developer',
        'React Developer for hire',
        'Software Architecture',
    ],
    authors: [{ name: 'Tallha Mushtaq', url: 'https://tallha.dev' }],
    creator: 'Tallha Mushtaq',
    publisher: 'Tallha Mushtaq',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://tallha.dev',
        siteName: 'Tallha Mushtaq | Senior MERN Architect',
        title: 'Tallha Mushtaq | Senior Architect & AI-SaaS Specialist',
        description:
            'Senior MERN Stack Architect specializing in AI-integrated SaaS, scalable architecture, and technical leadership. 4+ years leading MERN teams.',
        images: [
            {
                url: '/logo/devtallha.png',
                width: 1200,
                height: 630,
                alt: 'Tallha Mushtaq Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tallha Mushtaq | Senior Architect & AI-SaaS Specialist',
        description:
            'Senior MERN Stack Architect specializing in AI-integrated SaaS, scalable architecture, and technical leadership.',
        images: ['/logo/devtallha.png'],
        creator: '@devtallha',
    },
    alternates: {
        canonical: 'https://tallha.dev',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/logo/devtallha.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': 'https://tallha.dev/#person',
                name: 'Tallha Mushtaq',
                url: 'https://tallha.dev',
                image: 'https://tallha.dev/logo/devtallha.png',
                jobTitle: 'Senior MERN Stack Architect',
                description: 'Senior MERN Stack Architect and Top Rated Plus Upwork freelancer specializing in AI-integrated SaaS products and scalable systems.',
                sameAs: [
                    'https://github.com/devtallha',
                    'https://www.linkedin.com/in/tallha-mushtaq/',
                    'https://www.upwork.com/freelancers/~01e8066189eb6dd122'
                ],
                knowsAbout: ['MERN Stack', 'Next.js', 'Node.js', 'AI Integration', 'Software Architecture', 'SaaS Development'],
                address: {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Lahore',
                    'addressCountry': 'Pakistan'
                }
            },
            {
                '@type': 'WebSite',
                '@id': 'https://tallha.dev/#website',
                url: 'https://tallha.dev',
                name: 'Tallha Mushtaq | Senior Architect Portfolio',
                publisher: { '@id': 'https://tallha.dev/#person' },
                description: 'Portfolio of Tallha Mushtaq, showcasing expertise in building scalable AI-driven SaaS applications.'
            }
        ]
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
                suppressHydrationWarning
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                    <Analytics />
                    <SpeedInsights />
                </ReactLenis>
            </body>
        </html>
    );
}
