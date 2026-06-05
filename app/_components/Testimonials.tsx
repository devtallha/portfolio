'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';

const testimonials = [
    {
        name: 'James R.',
        role: 'Founder, Series A SaaS Startup',
        text: "Tallha architected our entire backend from scratch. We went from a broken MVP to a system handling 10,000+ daily requests in 6 weeks. He doesn't just write code — he thinks like a CTO.",
    },
    {
        name: 'Sarah M.',
        role: 'Product Lead, Fintech Company',
        text: "Best technical hire we've made on Upwork. Tallha reduced our API response times by 35% and mentored our junior devs simultaneously. Highly recommend.",
    },
    {
        name: 'Ahmed K.',
        role: 'CEO, AI SaaS Product',
        text: 'Tallha integrated Claude and OpenAI into our product in a way that actually made sense for our users. Clean architecture, zero bugs at launch, great communicator.',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-section border-t border-border">
            <div className="container">
                <SectionTitle title="What Clients Say" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-background p-8 md:p-10 group hover:bg-background-light transition-colors duration-300"
                        >
                            <p className="text-foreground/70 text-base leading-relaxed mb-8 italic font-roboto-flex">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="border-t border-border pt-6">
                                <p className="font-anton text-lg group-hover:text-primary transition-colors duration-300">
                                    {t.name}
                                </p>
                                <p className="section-label mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
