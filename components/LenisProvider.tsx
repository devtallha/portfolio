'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LenisProvider = () => {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.1, duration: 1.4 });
        const tickerFn = (time: number) => lenis.raf(time * 1000);

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(tickerFn);
        };
    }, []);

    return null;
};

export default LenisProvider;
