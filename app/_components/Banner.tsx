'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowDown } from 'lucide-react';
import React from 'react';
import { useUpworkMode } from '@/lib/hooks/useUpworkMode';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const isUpwork = useUpworkMode();

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary uppercase">Tallha Mushtaq</span>
                        <br /> <span className="ml-4">MERN STACK DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Senior MERN Stack Developer & Team Lead.<br />
                        Currently building DineHome — Norway&apos;s 2nd largest food ordering platform.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4 slide-up-and-fade">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={GENERAL_INFO.upworkProfile}
                            variant="primary"
                            className="banner-button"
                        >
                            Hire Me
                        </Button>
                        {!isUpwork && (
                            <Button
                                as="link"
                                href={GENERAL_INFO.cvUrl}
                                download="Tallha_Mushtaq.pdf"
                                variant="secondary"
                                className="banner-button"
                            >
                                Download CV <ArrowDown size={20} />
                            </Button>
                        )}
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex flex-wrap md:flex-col justify-center gap-4 md:gap-6 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h2 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4.8+
                        </h2>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h2 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            30+
                        </h2>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h2 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3
                        </h2>
                        <p className="text-muted-foreground">
                            Countries Served
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h2 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            15,000+
                        </h2>
                        <p className="text-muted-foreground">
                            Monthly Users
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
