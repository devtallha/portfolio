'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.utils.toArray<HTMLElement>('.experience-item').forEach((item, i) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    delay: i * 0.08,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        once: true,
                    },
                });
            });
            ScrollTrigger.refresh();
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Experience" />

                <div>
                    {MY_EXPERIENCE.map((item, i) => (
                        <div
                            key={item.title}
                            className="experience-item border-t border-border py-10 md:py-12 last:border-b grid grid-cols-1 md:grid-cols-12 gap-6"
                        >
                            {/* Left — index + company + duration */}
                            <div className="md:col-span-4 space-y-2">
                                <span className="section-label tabular-nums">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-foreground/60 font-roboto-flex text-sm leading-snug mt-2">
                                    {item.company}
                                </p>
                                <p className="text-primary font-roboto-flex text-sm font-medium">
                                    {item.duration}
                                </p>
                            </div>

                            {/* Right — title + description */}
                            <div className="md:col-span-8">
                                <h3 className="font-anton text-2xl md:text-3xl leading-tight mb-5">
                                    {item.title}
                                </h3>
                                <div className="space-y-3 text-foreground/60 text-base leading-relaxed font-roboto-flex">
                                    {item.description.split('\n\n').map((para, j) => (
                                        <p key={j}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
