import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="border-t border-border py-10" id="footer">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="font-anton text-lg tracking-tight">
                    <span className="text-primary">Tallha</span> Mushtaq
                </p>

                <div className="flex items-center gap-8">
                    {SOCIAL_LINKS.map(link => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="section-label hover:text-primary transition-colors duration-300 capitalize"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="section-label hover:text-primary transition-colors duration-300"
                    >
                        Email
                    </a>
                </div>

                <p className="section-label">
                    © {new Date().getFullYear()} — All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
