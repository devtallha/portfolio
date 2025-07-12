import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'devtallha@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tallha, I am reaching out to you because...',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/~01e8066189eb6dd122?mp_source=share',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/devtallha' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tallha-mushtaq' },
    // { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
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
            name: 'Frammer Motion',
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
        title: 'Dinehome',
        slug: 'dinehome',
        liveUrl: 'https://dinehome.no/',
        year: 2025,
        description: `
      Dinehome is the 2nd largest food ordering system in Norway, providing a comprehensive platform for restaurant discovery and food delivery. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🍽️ Restaurant Discovery: Browse and search restaurants with detailed menus and reviews</li>
        <li>📱 Multi-Platform: Web platform and mobile apps for seamless ordering experience</li>
        <li>🛒 Order Management: Real-time order tracking and delivery status updates</li>
        <li>💳 Payment Integration: Secure payment processing for online orders</li>
        <li>📊 Analytics Dashboard: Restaurant performance metrics and order analytics</li>
        <li>⚡ High Performance: Optimized for handling thousands of concurrent users</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built scalable frontend using Next.js with server-side rendering for SEO</li>
        <li>Developed robust Laravel backend API handling complex business logic</li>
        <li>Created cross-platform mobile apps using React Native</li>
        <li>Implemented real-time order tracking and notifications</li>
        <li>Optimized database queries for high-traffic scenarios</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Contributed to the development of Norway's leading food ordering platform:
      <ul>
        <li>🌐 Frontend: Developed responsive web interface using Next.js and modern React patterns</li>
        <li>🔧 Backend: Built RESTful APIs and business logic using Laravel framework</li>
        <li>📱 Mobile: Created React Native apps for iOS and Android platforms</li>
        <li>🔄 Real-time Features: Implemented WebSocket connections for live order updates</li>
        <li>💾 Database: Optimized MySQL queries and database architecture for scalability</li>
        <li>🚀 Performance: Implemented caching strategies and CDN optimization</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Laravel',
            'React Native',
            'MySQL',
            'WebSocket',
            'RESTful APIs',
            'Payment Gateway',
            'Real-time Updates',
        ],
    },
    {
        title: 'isalonee',
        slug: 'isalonee',
        techStack: [
            'Next.js',
            'Laravel',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'debouncing',
            'Api Integration',
        ],
        liveUrl: 'https://isalonee.com/',
        year: 2023,
        description: `isalonee is a SaaS-based e-commerce system helping businesses to deal with both B2B and B2C operations. It provides a comprehensive platform for managing multi-vendor operations with advanced features for business-to-business and business-to-consumer transactions.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using Next.js, React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.<br/>
        - Collaborated with backend team using Laravel for robust API development.`,
    },
    {
        title: 'Social Media Application',
        slug: 'social-media-application',
        techStack: [
            'React.js',
            'Laravel',
            'Swift',
            'Kotlin',
            'WebRTC',
            'Real-time Messaging',
            'Video Conferencing',
        ],
        year: 2023,
        description:
            'A comprehensive social media platform combining features from Facebook, Instagram, and LinkedIn. The application provides a unified social networking experience with multiple modules including events, courses, posts, messaging, video chat, and video conferencing capabilities. Built as a multi-platform solution with web, iOS, and Android applications.',
        role: `As a full-stack developer, I:<br/>
        - Developed the web frontend using React.js with modern state management and responsive design.<br/>
        - Built robust backend APIs using Laravel framework for handling complex social media features.<br/>
        - Created native mobile applications using Swift for iOS and Kotlin for Android platforms.<br/>
        - Implemented real-time messaging and video conferencing features using WebRTC technology.<br/>
        - Designed and developed multiple modules including events, courses, posts, and messaging systems.<br/>
        - Integrated video chat and video conferencing capabilities for enhanced user interaction.`,
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Software Engineer',
        company: 'Hello World Technologies',
        duration: 'Sept 2024 - Present',
    },
    {
        title: 'Team Lead - Software Engineer',
        company: 'Drudots Technologies Pvt Ltd',
        duration: 'July 2023 - Sept 2024',
    },
    {
        title: 'Software Engineer',
        company: 'ProNode Technologies',
        duration: 'Nov 2021 - July 2023',
    }
];
