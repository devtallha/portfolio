'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categoryLabels: Record<string, string> = {
    frontend: '01',
    backend: '02',
    database: '03',
    tools: '04',
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.skill-row', {
                opacity: 0,
                y: 30,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    end: 'bottom 75%',
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            gsap.to(containerRef.current, {
                y: -120,
                opacity: 0,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-section">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-0">
                    {Object.entries(MY_STACK).map(([key, items]) => (
                        <div
                            key={key}
                            className="skill-row border-t border-border py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 last:border-b"
                        >
                            {/* Category label */}
                            <div className="md:col-span-3 flex items-start gap-3">
                                <span className="section-label tabular-nums pt-1">
                                    {categoryLabels[key] ?? '—'}
                                </span>
                                <h3 className="font-anton text-2xl uppercase text-muted-foreground/60 tracking-wider">
                                    {key}
                                </h3>
                            </div>

                            {/* Tech items */}
                            <div className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-5">
                                {items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group flex items-center gap-3"
                                    >
                                        {item.icon && (
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={24}
                                                height={24}
                                                className="w-5 h-5 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        )}
                                        <span className="font-roboto-flex text-lg text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
