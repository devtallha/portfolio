'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Briefcase, Mail, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';
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
            const response = await fetch('https://formspree.io/f/xgodngpb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 container mx-auto">
            <SectionTitle title="Get In Touch" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-anton leading-tight mb-6">
                        Let&apos;s Build Something <span className="text-primary">That Scales.</span>
                    </h2>

                    <p className="text-foreground/70 text-lg mb-10 max-w-lg leading-relaxed">
                        I take on 2-3 new projects per month. If you have a
                        serious product to build or scale, let&apos;s talk.
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Free 30-min consultation</p>
                                <a href="https://calendly.com/devtallha" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors">Book on Calendly</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Available on Upwork</p>
                                <a href={GENERAL_INFO.upworkProfile} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-secondary transition-colors">Top Rated Plus Profile</a>
                            </div>
                        </div>

                        {!isUpwork && (
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Direct email</p>
                                    <a href={`mailto:${GENERAL_INFO.email}`} className="font-semibold hover:text-primary transition-colors">{GENERAL_INFO.email}</a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                            Currently accepting new projects
                        </span>
                    </div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="p-8 md:p-10 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70 ml-1">Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70 ml-1">Email</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/70 ml-1">Project Budget</label>
                                <div className="relative">
                                    <select
                                        name="budget"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all appearance-none cursor-pointer"
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                    >
                                        <option value="<$1k" className="bg-[#1a1a1a] text-foreground">{'<$1k'}</option>
                                        <option value="$1k-$5k" className="bg-[#1a1a1a] text-foreground">$1k-$5k</option>
                                        <option value="$5k-$20k" className="bg-[#1a1a1a] text-foreground">$5k-$20k</option>
                                        <option value="$20k+" className="bg-[#1a1a1a] text-foreground">$20k+</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none w-4 h-4" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/70 ml-1">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    placeholder="Tell me about your project goals..."
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/30"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                disabled={status === 'loading'}
                                type="submit"
                                className="w-full py-4 rounded-xl bg-primary text-background font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <div className="w-6 h-6 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Success/Error Toast */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute -bottom-20 left-0 right-0 flex justify-center z-50"
                            >
                                <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
                                    <CheckCircle2 size={20} />
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </div>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute -bottom-20 left-0 right-0 flex justify-center z-50"
                            >
                                <div className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-semibold">
                                    <AlertCircle size={20} />
                                    Something went wrong. Please try again.
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
