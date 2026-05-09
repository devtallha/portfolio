'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';

const milestones = [
    { year: '2021', title: 'First Lead Role' },
    { year: '2023', title: 'Team Lead' },
    { year: '2024', title: 'Technical Lead' },
    { year: '2025', title: 'Top Rated Plus Upwork' },
];

const keySkills = [
    'MERN Stack', 'Next.js 15', 'Scalable Architecture', 
    'AI Integration', 'Fintech', 'Healthcare Systems'
];

const AboutMe = () => {
    return (
        <section className="py-24 px-4 container mx-auto overflow-hidden" id="about-me">
            <SectionTitle title="About Me" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
                {/* Left Column - Text content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-3xl md:text-4xl font-anton mb-6 leading-tight">
                        I build the systems that keep your product <span className="text-primary">alive at 3 AM.</span>
                    </h3>
                    
                    <div className="space-y-6 text-foreground/80 text-lg leading-relaxed mb-10">
                        <p>
                            With 4+ years leading MERN stack teams, I&apos;ve shipped food platforms, 
                            AI SaaS products, healthcare apps, and fintech tools — all designed 
                            to scale without breaking. 
                        </p>
                        <p>
                            I specialize in the gap between &quot;it works&quot; and &quot;it works at scale.&quot; 
                            When you hire me, you&apos;re not getting a developer. 
                            You&apos;re getting an architect who owns the outcome.
                        </p>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {keySkills.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm font-medium text-foreground/70"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column - Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square md:aspect-[4/5] lg:aspect-square"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-white/10 overflow-hidden group shadow-2xl">
                        <Image 
                            src="/logo/devtallha.png"
                            alt="Tallha Mushtaq"
                            fill
                            className="object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                        />
                        {/* Decorative glass elements */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 backdrop-blur-md rounded-full border border-white/10" />
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
                    </div>
                </motion.div>
            </div>

            {/* Timeline Row */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
            >
                {milestones.map((milestone, index) => (
                    <div key={index} className="space-y-2 group">
                        <p className="text-primary font-anton text-2xl group-hover:scale-110 transition-transform origin-left inline-block">
                            {milestone.year}
                        </p>
                        <p className="text-foreground/60 font-medium uppercase text-xs tracking-[0.2em] leading-tight">
                            {milestone.title}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default AboutMe;
