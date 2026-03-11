'use client';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

function TimeBasedThemeSync() {
    const { setTheme } = useTheme();

    useEffect(() => {
        const getTimeBasedTheme = (): 'light' | 'dark' => {
            const hour = new Date().getHours();
            return hour >= 6 && hour < 18 ? 'light' : 'dark';
        };

        // Only auto-set theme if user hasn't manually chosen one
        const stored = localStorage.getItem('theme-manual');
        if (!stored) {
            setTheme(getTimeBasedTheme());
        }

        // Re-check every minute
        const interval = setInterval(() => {
            const manualOverride = localStorage.getItem('theme-manual');
            if (!manualOverride) {
                setTheme(getTimeBasedTheme());
            }
        }, 60_000);

        return () => clearInterval(interval);
    }, [setTheme]);

    return null;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider
            attribute="data-theme"
            defaultTheme="dark"
            enableSystem={false}
        >
            <TimeBasedThemeSync />
            {children}
        </NextThemesProvider>
    );
}
