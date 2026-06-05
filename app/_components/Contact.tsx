'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { GENERAL_INFO } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';
import { useUpworkMode } from '@/lib/hooks/useUpworkMode';

const Contact = () => {
    const isUpwork = useUpworkMode();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '<$1k',
        message: '',
    });

    if (isUpwork) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', budget: '<$1k', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputClass = 'w-full px-0 py-3 bg-transparent border-0 border-b border-border focus:border-primary outline-none transition-colors duration-300 text-foreground placeholder:text-muted-foreground/40 font-roboto-flex';

    return (
        <section id="contact" className="py-section border-t border-border">
            <div className="container">
                <SectionTitle title="Get In Touch" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-anton text-display-md uppercase leading-tight mb-8">
                            Let&apos;s build something<br />
                            <span className="text-primary">that scales.</span>
                        </h2>

                        <p className="text-foreground/55 text-base leading-relaxed mb-12 max-w-sm font-roboto-flex">
                            I take on 2–3 new projects per month. If you have a serious product to build or scale, let&apos;s talk.
                        </p>

                        <div className="space-y-8">
                            <div className="border-t border-border pt-6">
                                <p className="section-label mb-2">Consultation</p>
                                <a
                                    href="https://calendly.com/devtallha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-roboto-flex text-foreground/70 hover:text-primary transition-colors duration-300"
                                >
                                    Book a free 30-min call →
                                </a>
                            </div>
                            <div className="border-t border-border pt-6">
                                <p className="section-label mb-2">Upwork</p>
                                <a
                                    href={GENERAL_INFO.upworkProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-roboto-flex text-foreground/70 hover:text-primary transition-colors duration-300"
                                >
                                    Top Rated Plus Profile →
                                </a>
                            </div>
                            <div className="border-t border-border pt-6">
                                <p className="section-label mb-2">Email</p>
                                <a
                                    href={`mailto:${GENERAL_INFO.email}`}
                                    className="font-roboto-flex text-foreground/70 hover:text-primary transition-colors duration-300"
                                >
                                    {GENERAL_INFO.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <span className="section-label text-primary/80">Available for new projects</span>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="contact-name" className="section-label block mb-3">Name</label>
                                    <input
                                        id="contact-name"
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className={inputClass}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="section-label block mb-3">Email</label>
                                    <input
                                        id="contact-email"
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className={inputClass}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-budget" className="section-label block mb-3">Project Budget</label>
                                <select
                                    id="contact-budget"
                                    name="budget"
                                    className={`${inputClass} cursor-pointer`}
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="<$1k">{'<$1k'}</option>
                                    <option value="$1k-$5k">$1k–$5k</option>
                                    <option value="$5k-$20k">$5k–$20k</option>
                                    <option value="$20k+">$20k+</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="section-label block mb-3">Message</label>
                                <textarea
                                    id="contact-message"
                                    required
                                    name="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className={`${inputClass} resize-none`}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                disabled={status === 'loading'}
                                type="submit"
                                className="w-full py-4 border border-primary text-primary font-anton uppercase tracking-wider text-sm hover:bg-primary hover:text-black transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 flex items-center gap-3 text-sm text-green-400 font-roboto-flex"
                                >
                                    <CheckCircle2 size={16} />
                                    Message sent — I&apos;ll get back to you soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 flex items-center gap-3 text-sm text-red-400 font-roboto-flex"
                                >
                                    <AlertCircle size={16} />
                                    Something went wrong. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
