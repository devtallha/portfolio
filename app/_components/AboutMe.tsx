'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        // Delay refresh to match CSS transition duration (700ms)
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 750);
        return () => clearTimeout(timer);
    }, [isExpanded]);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I specialize in architecting high-performance web applications
                    that combine technical excellence with impactful user
                    experiences.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <h2 className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Tallha Mushtaq.
                        </h2>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I specialize in architecting and leading high-performance full-stack web applications. My journey in software engineering is driven by a passion for solving complex problems through elegant code and scalable system design. I have successfully built and maintained premium AI-integrated SaaS products, interactive social media platforms, and robust fintech solutions, always prioritizing performance optimization and user-centric architecture.
                            </p>
                            
                            <div className={`grid transition-all duration-700 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="space-y-3">
                                        <p className="slide-up-and-fade">
                                            My technical expertise centers on the MERN stack (MongoDB, Express.js, React, Node.js) and NestJS, where I apply modern engineering practices such as Test-Driven Development (TDD), CI/CD pipelines, and microservices architecture. I am dedicated to delivering exceptional results by leveraging the latest advancements in AI to enhance development efficiency and product capabilities.
                                        </p>
                                        <p className="slide-up-and-fade">
                                            Beyond just writing code, I focus on the entire lifecycle of a product—from initial ideation and architecture design to deployment and continuous optimization. I believe that a great developer doesn&apos;t just build features but creates sustainable value through maintainable, secure, and highly performant digital ecosystems.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-6 text-blue-500 hover:text-blue-400 transition-colors font-medium flex items-center gap-2 slide-up-and-fade group"
                            >

                                <span className="border-b border-transparent group-hover:border-blue-400 transition-all uppercase text-sm tracking-wider">
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

