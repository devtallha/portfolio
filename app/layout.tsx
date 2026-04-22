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
        default: 'Tallha Mushtaq | Senior MERN Stack Developer Portfolio',
        template: '%s | Tallha Mushtaq',
    },
    description:
        'Portfolio of Tallha Mushtaq - Senior MERN Stack Developer specializing in AI-integrated SaaS, Full Stack Development (MERN), and Scalable Architecture. Check out my projects and expertise.',
    keywords: [
        'Senior MERN Stack Developer',
        'Full Stack Developer',
        'React Developer',
        'Next.js Expert',
        'Node.js Developer',
        'Tallha Mushtaq',
        'Portfolio',
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
        siteName: 'Tallha Mushtaq Portfolio',
        title: 'Tallha Mushtaq | Senior MERN Stack Developer',
        description:
            'Professional portfolio of Tallha Mushtaq, showcasing high-impact digital solutions and full-stack expertise.',
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
        title: 'Tallha Mushtaq | Senior MERN Stack Developer',
        description:
            'Professional portfolio of Tallha Mushtaq, showcasing high-impact digital solutions and full-stack expertise.',
        images: ['/logo/devtallha.png'],
        creator: '@devtallha',
    },
    alternates: {
        canonical: 'https://tallha.dev',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Tallha Mushtaq',
        url: 'https://tallha.dev',
        jobTitle: 'Senior MERN Stack Developer',
        sameAs: [
            'https://github.com/devtallha',
            'https://www.linkedin.com/in/tallha-mushtaq/',
        ],
        description:
            'Senior MERN Stack Developer specializing in creating impactful digital solutions with React, Next.js, and Node.js.',
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
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
