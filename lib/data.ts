import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'devtallha@gmail.com',
    fullName: 'Tallha Mushtaq',
    firstName: 'Tallha',
    lastName: 'Mushtaq',
    heading: 'Senior MERN Stack Developer',
    location: 'Pakistan',
    phoneNumber: '+923230337708',
    portfolioUrl: 'https://tallha.dev',
    githubUrl: 'https://github.com/devtallha',
    linkedinUrl: 'https://www.linkedin.com/in/tallha-mushtaq/',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tallha, I am reaching out to you because...',

    upworkProfile:
        'https://www.upwork.com/freelancers/~01e8066189eb6dd122?mp_source=share',
    cvUrl: '/resume/Tallha_Mushtaq_CV.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'portfolio', url: 'https://tallha.dev' },
    { name: 'github', url: 'https://github.com/devtallha' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tallha-mushtaq/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'REST APIs',
            icon: '/logo/api.webp',
        },
        {
            name: 'RabbitMQ',
            icon: '/logo/RabbitMQ.webp',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Redis',
            icon: '/logo/Redis.webp',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.webp',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AI Integration',
            icon: '/logo/ai.webp',
        },
        {
            name: 'Claude / Cursor',
            icon: '/logo/claude.webp',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Social media application',
        slug: 'social-media-application',
        liveUrl: '',
        year: 2024,
        description: `
        <p>Social media application for healthcare professionals featuring content feeds, messaging, and profile management.</p>
        <ul>
          <li>Designed and developed a secure, role-based social platform enabling ophthalmologists to collaborate, share cases, and discuss treatments while ensuring medical data privacy.</li>
          <li>Implemented scalable backend architecture and real-time features, supporting 15,000+ monthly active users with high engagement.</li>
          <li>Optimized performance and data handling to support media-rich medical content with reliable access control and moderation workflows.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Technical Team Lead & Senior MERN Stack Developer.</li>
          <li>Led end-to-end architecture and implementation of core application modules across frontend and backend.</li>
          <li>Defined data models, access control policies, and review workflows tailored for medical content.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'TheTutor.me',
        slug: 'the-tutor-me',
        liveUrl: 'https://thetutor.me/',
        year: 2024,
        description: `
        <p>Online learning platform offering private tutoring services with video sessions, scheduling, and payment processing.</p>
        <ul>
          <li>Built a user-friendly learning marketplace connecting tutors and students, covering onboarding, profiles, scheduling, and communication workflows.</li>
          <li>Engineered scalable matching and booking systems to ensure smooth tutor discovery and session management.</li>
          <li>Developed student-tutor matching and dashboard features, resulting in higher user retention and platform engagement.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>MERN Stack Developer.</li>
          <li>Designed and implemented core marketplace flows including onboarding, profile management, and booking.</li>
          <li>Worked across frontend and backend to ensure reliable session scheduling and notifications.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Dinehome',
        slug: 'dinehome',
        liveUrl: 'https://dinehome.no/',
        year: 2025,
        description: `
        <p>2nd largest food ordering application in Norway with real-time order tracking and multi-vendor management.</p>
        <ul>
          <li>Contributed to the development of a high-traffic, large-scale food ordering platform, serving thousands of daily users across Norway.</li>
          <li>Designed and optimized order processing, restaurant management, and payment workflows with high availability and fault tolerance.</li>
          <li>Improved system performance and reliability to handle peak-hour traffic, ensuring consistent user experience at national scale.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Technical Team Lead & Senior MERN Stack Developer.</li>
          <li>Led and contributed to critical paths including ordering, restaurant onboarding, and payment integrations.</li>
          <li>Drove performance and scalability improvements across backend services and database queries.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Laravel', 'MySQL', 'AWS'],
    },
    {
        title: 'Doocado',
        slug: 'doocado',
        liveUrl: 'https://doocado.com/',
        year: 2024,
        description: `
        <p>AI-based food ordering system via WhatsApp leveraging LLM integrations for smart menu suggestions.</p>
        <ul>
          <li>Developed an AI-driven conversational ordering system integrated with WhatsApp, enabling users to place food orders through natural language.</li>
          <li>Implemented multi-tenant architecture for restaurant onboarding and automated customer interactions.</li>
          <li>Scaled the platform for US-based operations, focusing on reliability, latency optimization, and seamless third-party integrations.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Senior MERN Stack Developer.</li>
          <li>Designed and implemented conversational flows and orchestration between AI, ordering, and fulfillment services.</li>
          <li>Integrated external providers (e.g. WhatsApp, payment gateways) into a cohesive, resilient system.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Nest.js', 'OpenAI', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Splinter',
        slug: 'splinter',
        liveUrl: '',
        year: 2024,
        description: `
        <p>Fintech Buy-Now-Pay-Later (BNPL) product with credit scoring and installment tracking.</p>
        <ul>
          <li>Developed a robust fintech solution for secure transaction processing and installment management.</li>
          <li>Implemented credit scoring algorithms and secure payment workflows to ensure financial reliability.</li>
          <li>Contributed to both frontend and backend modules to deliver a seamless user experience for credit-based shopping.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>MERN Stack Developer.</li>
          <li>Owned core transaction and installment tracking modules.</li>
          <li>Collaborated on security protocols for payment processing and data integrity.</li>
        </ul>
        `,
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
        title: 'iSalonee',
        slug: 'isalonee',
        liveUrl: 'https://isalonee.com/',
        year: 2023,
        description: `
        <p>Personalized salon & spa booking SaaS platform with appointment management and staff scheduling.</p>
        <ul>
          <li>Built a highly personalized appointment booking platform connecting users with top-rated salons and spas.</li>
          <li>Designed intuitive UI/UX flows for search, discovery, and scheduling, improving customer experience and conversion rates.</li>
          <li>Implemented backend systems for salon onboarding, service management, and real-time availability tracking.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>MERN Stack Developer.</li>
          <li>Owned key user-facing experiences across search, discovery, and booking.</li>
          <li>Collaborated closely with design and product to refine flows that maximized conversion and retention.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Nest.js', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'Trigan',
        slug: 'trigan',
        liveUrl: 'https://trigan.org/',
        year: 2024,
        description: `
        <p>Decision intelligence & strategy simulation engine.</p>
        <ul>
          <li>Engineered a decision intelligence platform that stress-tests critical business strategies before capital commitment.</li>
          <li>Designed scalable systems to model, simulate, and analyze complex strategic scenarios using real-world data.</li>
          <li>Collaborated on translating advanced analytical models into actionable insights through clean, intuitive interfaces.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Implemented core simulation and reporting workflows in collaboration with data and product teams.</li>
          <li>Contributed to architecture decisions around scalability, data modeling, and system boundaries.</li>
          <li>Built intuitive UI to surface complex analytical outputs to non-technical stakeholders.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Nest.js', 'Blockchain', 'OpenAI', 'PostgreSQL', 'AWS'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Technical Team Lead & Senior MERN Stack Developer',
        company: 'Hello World Technologies · Lahore, Pakistan',
        duration: 'Sep 2024 - Present',
        description: 'Leading cross-functional engineering teams to deliver high-impact digital solutions. I am responsible for architecting scalable backend systems using NestJS and Node.js, designing responsive frontends with Next.js and Tailwind CSS, and overseeing the integration of AI-driven features into SaaS products. I mentor junior developers, conduct code reviews, and drive technical strategy to ensure best practices in performance, security, and maintainability.',
    },
    {
        title: 'Project Team Lead & MERN Stack Developer',
        company: 'DruDots Technologies · Lahore, Pakistan',
        duration: 'Jul 2023 - Sep 2024',
        description: 'Managed the full-stack development of complex web applications from ideation to deployment. I led the migration of legacy systems to modern MERN architecture, implemented real-time communication features, and optimized database performance for high-traffic platforms. My role involved close collaboration with product managers and designers to translate business requirements into efficient technical implementations.',
    },
    {
        title: 'MERN Stack Developer',
        company: 'ProNode Technologies · Lahore, Pakistan',
        duration: 'Nov 2021 - Jul 2023',
        description: 'Developed and maintained various client-side and server-side components for web applications. I focused on building reusable UI components, integrating third-party APIs, and managing state across complex application flows. I gained significant experience in MongoDB schema design and RESTful API development, contributing to the successful launch of several e-commerce and social networking projects.',
    },
];
