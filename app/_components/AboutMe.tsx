'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';

const highlights = [
    { value: '5+', label: 'Years Building' },
    { value: '30+', label: 'Projects Shipped' },
    { value: 'Top Rated+', label: 'Upwork Status' },
];

const AboutMe = () => {
    return (
        <section className="py-section container overflow-hidden" id="about-me">
            <SectionTitle title="About Me" />

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
                {/* Left — Story */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-8"
                >
                    <h3 className="text-4xl md:text-5xl font-anton leading-[1.1]">
                        I build the software.<br />
                        <span className="text-primary">I also build the team.</span>
                    </h3>

                    <div className="space-y-5 text-foreground/70 text-[1.05rem] leading-relaxed">
                        <p>
                            I&apos;m a full-stack engineer from Pakistan with 5+ years of experience building products that live in production and handle real traffic. My work spans food tech, healthcare, fintech, and AI — I&apos;ve taken systems from first commit to national scale.
                        </p>
                        <p>
                            At my current role, I lead a team of five engineers at Norway&apos;s 2nd largest food ordering platform — making architecture calls, driving code quality, and keeping delivery on track under pressure.
                        </p>
                        <p>
                            I specialize in the part most developers avoid: the gap between a working prototype and a system that holds up under load. Clean abstractions, thoughtful data models, infrastructure that doesn&apos;t need babysitting.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                            >
                                <p className="text-2xl md:text-3xl font-anton text-primary">{item.value}</p>
                                <p className="text-xs text-foreground/50 uppercase tracking-widest mt-1">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right — Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative aspect-[3/4] max-h-[420px] sm:max-h-[520px] lg:max-h-none lg:sticky lg:top-24"
                >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-2xl group">
                        <Image
                            src="/logo/devtallha.png"
                            alt="Tallha Mushtaq"
                            fill
                            className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-foreground/5 blur-2xl rounded-full pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
