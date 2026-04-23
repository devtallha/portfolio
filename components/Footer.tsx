import { GENERAL_INFO } from '@/lib/data';

const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex justify-center gap-6 mb-10">
                    <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(GENERAL_INFO.portfolioUrl)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-500 transition-colors uppercase text-xs tracking-widest font-medium"
                    >
                        Share on LinkedIn
                    </a>
                    <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(GENERAL_INFO.portfolioUrl)}&text=Check out ${GENERAL_INFO.fullName}'s portfolio!`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-400 transition-colors uppercase text-xs tracking-widest font-medium"
                    >
                        Share on Twitter
                    </a>
                    <a 
                        href={`https://wa.me/?text=${encodeURIComponent('Check out ' + GENERAL_INFO.fullName + '\'s portfolio: ' + GENERAL_INFO.portfolioUrl)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-green-500 transition-colors uppercase text-xs tracking-widest font-medium"
                    >
                        Share on WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
