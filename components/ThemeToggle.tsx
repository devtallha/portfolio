'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEMES = ['dark', 'light', 'system'] as const;
type Theme = (typeof THEMES)[number];

const icons: Record<Theme, React.ReactNode> = {
    dark: <Moon size={14} />,
    light: <Sun size={14} />,
    system: <Monitor size={14} />,
};

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="w-8 h-8" />;

    const current = (theme as Theme) ?? 'dark';
    const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];

    return (
        <button
            onClick={() => setTheme(next)}
            aria-label={`Switch to ${next} theme`}
            className="flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
            {icons[current]}
        </button>
    );
};

export default ThemeToggle;
