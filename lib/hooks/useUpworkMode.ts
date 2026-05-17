'use client';
import { useEffect, useState } from 'react';

export function useUpworkMode() {
    const [isUpwork, setIsUpwork] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('source') === 'upwork') {
                sessionStorage.setItem('upwork_mode', 'true');
            }
            if (sessionStorage.getItem('upwork_mode') === 'true') {
                setIsUpwork(true);
            }
        }
    }, []);

    return isUpwork;
}
