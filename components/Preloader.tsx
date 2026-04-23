'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.03,
                duration: 0.15,
            });

            tl.to('.title-text span', {
                y: 0,
                stagger: 0.02,
                duration: 0.1,
            }, '-=0.2');

            tl.to('.preloader-item', {
                delay: 0.2,
                y: '100%',
                duration: 0.4,
                stagger: 0.05,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.2')
                .to('.title-text span', { autoAlpha: 0 }, '<0.2')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<0.5',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="name-text flex text-[20vw] lg:text-[200px] font-anton leading-none overflow-hidden mb-4">
                    <span className="inline-block translate-y-full">T</span>
                    <span className="inline-block translate-y-full">A</span>
                    <span className="inline-block translate-y-full">L</span>
                    <span className="inline-block translate-y-full">L</span>
                    <span className="inline-block translate-y-full">H</span>
                    <span className="inline-block translate-y-full">A</span>
                </p>

                <p className="title-text flex text-[3vw] lg:text-[32px] font-light text-gray-300 leading-none overflow-hidden justify-center">
                    <span className="inline-block translate-y-full">M</span>
                    <span className="inline-block translate-y-full">E</span>
                    <span className="inline-block translate-y-full">R</span>
                    <span className="inline-block translate-y-full">N</span>
                    <span className="inline-block translate-y-full mx-2"></span>
                    <span className="inline-block translate-y-full">S</span>
                    <span className="inline-block translate-y-full">T</span>
                    <span className="inline-block translate-y-full">A</span>
                    <span className="inline-block translate-y-full">C</span>
                    <span className="inline-block translate-y-full">K</span>
                    <span className="inline-block translate-y-full mx-2"></span>
                    <span className="inline-block translate-y-full">D</span>
                    <span className="inline-block translate-y-full">E</span>
                    <span className="inline-block translate-y-full">V</span>
                    <span className="inline-block translate-y-full">E</span>
                    <span className="inline-block translate-y-full">L</span>
                    <span className="inline-block translate-y-full">O</span>
                    <span className="inline-block translate-y-full">P</span>
                    <span className="inline-block translate-y-full">E</span>
                    <span className="inline-block translate-y-full">R</span>
                </p>
            </div>
        </div>
    );
};

export default Preloader;
