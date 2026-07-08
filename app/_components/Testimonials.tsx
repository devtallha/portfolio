'use client';

import React, { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const CARD_GAP = 24;
const CARD_WIDTH = 400;

const testimonials = [
    {
        name: 'Keaton',
        role: 'Founder, Sullaway Solutions',
        text: "I had a vision, and Tallha executed flawlessly. His creativity, professionalism, and ability to turn ideas into polished, modern designs exceeded my expectations. He was proactive with suggestions, easy to collaborate with, and always met deadlines. I couldn't be happier with the final result.",
    },
    {
        name: 'Aditya',
        role: 'Founder, School Management System, India',
        text: "Tallha did an exceptional job on my school staff task management app — his skills were top-notch and he delivered everything to the highest standard. Communication was seamless, and he was always proactive with great recommendations throughout the process. He met every deadline and ensured I was fully satisfied with each milestone.",
    },
    {
        name: 'Founder',
        role: 'Reels.in',
        text: "Tallha brought strong technical skills, creative problem-solving, and a deep understanding of modern development practices. He was always available for discussions, quick to implement feedback, and consistently went the extra mile. Working with him felt more like a partnership than just hiring a freelancer.",
    },
    {
        name: 'Marc',
        role: 'Founder, BlueHouz',
        text: 'Highly recommend Tallha. He is an amazing developer.',
    },
];

const Testimonials = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = useCallback((dir: 'left' | 'right') => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollBy({
            left: dir === 'right' ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP),
            behavior: 'smooth',
        });
    }, []);

    return (
        <section id="testimonials" className="py-section border-t border-border">
            <div className="container">
                <SectionTitle title="What Clients Say" />

                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.name + i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="snap-start shrink-0 w-[85vw] sm:w-[380px] md:w-[400px] bg-background border border-border rounded-xl p-8 md:p-10 group hover:border-primary/50 transition-colors duration-300"
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

                        {/* Spacer so last card doesn't sit flush at edge */}
                        <div className="shrink-0 w-6" aria-hidden="true" />
                    </div>

                    <div className="flex justify-end gap-2 mt-8">
                        <button
                            onClick={() => scroll('left')}
                            aria-label="Previous testimonial"
                            className="size-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            aria-label="Next testimonial"
                            className="size-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
