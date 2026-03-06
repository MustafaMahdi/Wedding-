"use client";

import { useEffect, useState } from "react";

interface QuranVerseProps {
    verse: string;
    reference: string;
}

export default function QuranVerse({ verse, reference }: QuranVerseProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById(
            `quran-verse-${reference.replace(/\s+/g, "-")}`
        );
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [reference]);

    return (
        <section
            id={`quran-verse-${reference.replace(/\s+/g, "-")}`}
            className="py-16 md:py-20 bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

            <div className="max-w-4xl mx-auto px-4">
                <div
                    className={`text-center transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    {/* Top Ornamental Line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="h-px flex-1 max-w-24 md:max-w-32 bg-gradient-to-r from-transparent to-rose-400" />
                        <svg
                            className="w-6 h-6 text-rose-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                        </svg>
                        <span className="h-px flex-1 max-w-24 md:max-w-32 bg-gradient-to-l from-transparent to-rose-400" />
                    </div>

                    {/* Bismillah */}
                    <p
                        dir="rtl"
                        className="font-serif text-rose-400 text-sm md:text-base mb-6 tracking-wide"
                    >
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                    </p>

                    {/* Verse */}
                    <p
                        dir="rtl"
                        className="font-serif text-xl md:text-2xl text-gray-800 leading-loose md:leading-loose mb-6"
                    >
                        {verse}
                    </p>

                    {/* Reference */}
                    <p
                        dir="rtl"
                        className="font-serif text-sm md:text-base text-rose-500"
                    >
                        — {reference} —
                    </p>

                    {/* Bottom Ornamental Line */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className="h-px flex-1 max-w-24 md:max-w-32 bg-gradient-to-r from-transparent to-rose-400" />
                        <svg
                            className="w-5 h-5 text-rose-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="h-px flex-1 max-w-24 md:max-w-32 bg-gradient-to-l from-transparent to-rose-400" />
                    </div>
                </div>
            </div>
        </section>
    );
}
