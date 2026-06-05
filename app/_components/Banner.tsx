'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

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
                { y: -120, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[600px] flex flex-col justify-end pb-12 md:pb-16"
                ref={containerRef}
            >
                {/* Rule */}
                <div className="slide-up-and-fade rule mb-8 md:mb-10" />

                {/* Name + title */}
                <div className="slide-up-and-fade">
                    <h1 className="font-anton text-display-xl uppercase leading-[0.9] tracking-[-0.02em]">
                        <span className="text-primary">Tallha</span>
                        <br />
                        <span>Mushtaq</span>
                    </h1>
                </div>

                {/* Bottom row — description + CTA */}
                <div className="slide-up-and-fade rule mt-8 md:mt-10 mb-8 md:mb-10" />
                <div className="slide-up-and-fade flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                    <p className="text-foreground/60 text-base md:text-lg max-w-sm leading-relaxed">
                        Full-stack engineer and team lead with 5+ years shipping
                        production systems at scale — across healthcare, fintech,
                        food tech, and AI SaaS.
                    </p>
                    <div className="flex flex-wrap gap-4 shrink-0">
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
                        <Button
                            as="link"
                            href="/#contact"
                            variant="secondary"
                            className="banner-button"
                        >
                            Get in touch
                        </Button>
                    </div>
                </div>

                {/* Stats — bottom right corner */}
                <div className="slide-up-and-fade absolute bottom-12 right-6 md:right-0 hidden lg:flex flex-col gap-5 text-right">
                    <div>
                        <p className="font-anton text-4xl text-primary">5+</p>
                        <p className="section-label mt-1">Years of experience</p>
                    </div>
                    <div>
                        <p className="font-anton text-4xl text-primary">30+</p>
                        <p className="section-label mt-1">Projects shipped</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
