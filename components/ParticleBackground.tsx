'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        const count = window.innerWidth < 768 ? 30 : 80;
        const activeParticles = particlesRef.current.slice(0, count);

        activeParticles.forEach((particle) => {
            if (!particle) return;
            gsap.set(particle, {
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5,
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });

            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 15 + 15,
                opacity: 0,
                repeat: -1,
                ease: 'none',
                delay: Math.random() * -20,
            });
        });
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {[...Array(80)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) particlesRef.current[i] = el;
                    }}
                    className="absolute rounded-full bg-foreground opacity-0"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
