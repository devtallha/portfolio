import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ClientComponents from '@/components/ClientComponents';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
    display: 'swap',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://tallha.dev'),
    title: {
        default: 'Tallha Mushtaq | Full-Stack Engineer & Team Lead',
        template: '%s | Tallha Mushtaq',
    },
    description:
        "Full-stack engineer and team lead with 5+ years delivering remote solutions for international clients in Norway, UAE, and Pakistan. Currently leading development for DineHome — Norway's 2nd largest food ordering platform.",
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
        'Remote MERN Stack Developer',
        'Senior Full Stack Developer Remote',
        'MERN Developer Norway',
        'MERN Developer UAE',
        'DineHome Developer',
        'Hire Remote Node.js Developer',
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
        title: 'Tallha Mushtaq | Full-Stack Engineer & Team Lead',
        description:
            'Full-stack engineer with 5+ years of remote delivery for international clients across Norway and UAE. Available for remote opportunities.',
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
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <ClientComponents />
                    <Analytics />
                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}
