'use client';
import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false, loading: () => null });
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false, loading: () => null });
const Preloader = dynamic(() => import('./Preloader'), { ssr: false, loading: () => null });
const ScrollProgressIndicator = dynamic(() => import('./ScrollProgressIndicator'), { ssr: false, loading: () => null });
const StickyEmail = dynamic(() => import('../app/_components/StickyEmail'), { ssr: false, loading: () => null });
const LenisProvider = dynamic(() => import('./LenisProvider'), { ssr: false, loading: () => null });

const ClientComponents = () => (
    <>
        <LenisProvider />
        <Preloader />
        <CustomCursor />
        <ScrollProgressIndicator />
        <ParticleBackground />
        <StickyEmail />
    </>
);

export default ClientComponents;
