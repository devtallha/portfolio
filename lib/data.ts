import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'devtallha@gmail.com',
    fullName: 'Tallha Mushtaq',
    firstName: 'Tallha',
    lastName: 'Mushtaq',
    heading: 'Senior Software Engineer',
    location: 'Pakistan',
    phoneNumber: '+923157415315',
    portfolioUrl: 'https://tallha.dev',
    githubUrl: 'https://github.com/devtallha',
    linkedinUrl: 'https://www.linkedin.com/in/tallha-mushtaq/',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tallha, I am reaching out to you because...',

    upworkProfile:
        'https://www.upwork.com/freelancers/~01e8066189eb6dd122?mp_source=share',
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
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
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
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'MedicalRadar',
        slug: 'medical-radar',
        liveUrl: 'http://ophthalmologyradar.com/',
        year: 2024,
        description: `
        <p>Social media platform for ophthalmologists.</p>
        <ul>
          <li>Designed and developed a secure, role-based social platform enabling ophthalmologists to collaborate, share cases, and discuss treatments while ensuring medical data privacy.</li>
          <li>Implemented scalable backend APIs and real-time interactions, supporting high engagement and seamless content sharing among verified professionals.</li>
          <li>Optimized performance and data handling to support media-rich medical content with reliable access control and moderation workflows.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Led end-to-end architecture and implementation of core application modules across frontend and backend.</li>
          <li>Defined data models, access control policies, and review workflows tailored for medical content.</li>
          <li>Collaborated with domain experts to translate complex ophthalmology workflows into intuitive product experiences.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Laravel', 'MySQL', 'AWS'],
    },
    {
        title: 'TheTutor.me',
        slug: 'the-tutor-me',
        liveUrl: 'https://thetutor.me/',
        year: 2024,
        description: `
        <p>Platform connecting subject experts with learners.</p>
        <ul>
          <li>Built a user-friendly learning marketplace connecting tutors and students, covering onboarding, profiles, scheduling, and communication workflows.</li>
          <li>Engineered scalable matching and booking systems to ensure smooth tutor discovery and session management.</li>
          <li>Collaborated with product stakeholders to continuously improve UX, resulting in higher user retention and platform engagement.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Designed and implemented core marketplace flows including onboarding, profile management, and booking.</li>
          <li>Worked across frontend and backend to ensure reliable session scheduling and notifications.</li>
          <li>Partnered with design and product to iterate on user journeys based on qualitative and quantitative feedback.</li>
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
        <p>2nd largest food ordering application in Norway.</p>
        <ul>
          <li>Contributed to the development of a high-traffic, large-scale food ordering platform, serving thousands of daily users across Norway.</li>
          <li>Designed and optimized order processing, restaurant management, and payment workflows with high availability and fault tolerance.</li>
          <li>Improved system performance and reliability to handle peak-hour traffic, ensuring consistent user experience at national scale.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Led and contributed to critical paths including ordering, restaurant onboarding, and payment integrations.</li>
          <li>Drove performance and scalability improvements across backend services and database queries.</li>
          <li>Collaborated with cross-functional teams to deliver new features while maintaining high reliability SLAs.</li>
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
        <p>AI-based food ordering system via WhatsApp for US-based operations.</p>
        <ul>
          <li>Developed an AI-driven conversational ordering system integrated with WhatsApp, enabling users to place food orders through natural language.</li>
          <li>Implemented backend services to interpret user intent, manage menus, and automate order flows with minimal human intervention.</li>
          <li>Scaled the platform for US-based operations, focusing on reliability, latency optimization, and seamless third-party integrations.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Designed and implemented conversational flows and orchestration between AI, ordering, and fulfillment services.</li>
          <li>Integrated external providers (e.g. WhatsApp, payment gateways) into a cohesive, resilient system.</li>
          <li>Optimized system performance and observability to support production operations.</li>
        </ul>
        `,
        techStack: ['Next.js', 'Nest.js', 'OpenAI', 'PostgreSQL', 'AWS'],
    },
    {
        title: 'iSalonee',
        slug: 'isalonee',
        liveUrl: 'https://isalonee.com/',
        year: 2023,
        description: `
        <p>Personalized salon & spa booking platform.</p>
        <ul>
          <li>Built a highly personalized appointment booking platform connecting users with top-rated salons and spas.</li>
          <li>Designed intuitive UI/UX flows for search, discovery, and scheduling, improving customer experience and conversion rates.</li>
          <li>Implemented backend systems for salon onboarding, service management, and real-time availability tracking.</li>
        </ul>
        `,
        role: `
        <ul>
          <li>Owned key user-facing experiences across search, discovery, and booking.</li>
          <li>Collaborated closely with design and product to refine flows that maximized conversion and retention.</li>
          <li>Worked with backend teams to ensure reliable availability and scheduling logic.</li>
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
        title: 'Senior Software Engineer',
        company: 'BlueHouz · Switzerland (Remote)',
        duration: 'Aug 2025 - Present',
    },
    {
        title: 'Team Lead & Senior Software Engineer',
        company: 'DineHome · Norway (Remote)',
        duration: 'Sep 2024 - Aug 2025',
    },
    {
        title: 'Team Lead Software Engineer',
        company: 'Drudots Technologies · Lahore, Pakistan',
        duration: 'Jul 2023 - Sep 2024',
    },
    {
        title: 'Associate Software Engineer',
        company: 'Pangiah · Dubai (Remote)',
        duration: 'Nov 2021 - Jul 2023',
    },
];
