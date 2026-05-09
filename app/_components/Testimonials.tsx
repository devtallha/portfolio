'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'James R.',
        role: 'Founder, Series A SaaS Startup',
        text: 'Tallha architected our entire backend from scratch. We went from a broken MVP to a system handling 10,000+ daily requests in 6 weeks. He doesn\'t just write code — he thinks like a CTO.',
        rating: 5,
    },
    {
        name: 'Sarah M.',
        role: 'Product Lead, Fintech Company',
        text: 'Best technical hire we\'ve made on Upwork. Tallha reduced our API response times by 35% and mentored our junior devs simultaneously. Highly recommend.',
        rating: 5,
    },
    {
        name: 'Ahmed K.',
        role: 'CEO, AI SaaS Product',
        text: 'Tallha integrated Claude and OpenAI into our product in a way that actually made sense for our users. Clean architecture, zero bugs at launch, great communicator.',
        rating: 5,
    },
];

const UpworkLogo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
);

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
            {/* Watermark Logo */}
            <UpworkLogo className="absolute -bottom-4 -right-4 w-24 h-24 text-white/[0.03] group-hover:text-primary/5 transition-colors duration-300" />

            <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                </p>
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold uppercase">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 px-4 container mx-auto overflow-hidden">
            <SectionTitle title="What Clients Say" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index} 
                        testimonial={testimonial} 
                        index={index} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
