"use client";

import { useEffect, useState } from "react";

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

export default function LoveStory() {
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

        const element = document.getElementById("story-section");
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const timeline: TimelineEvent[] = [
        {
            year: "2020",
            title: "First Meeting",
            description:
                "Our paths crossed for the first time, and little did we know that this moment would change our lives forever.",
        },
        {
            year: "2021",
            title: "First Date",
            description:
                "Nervous hearts and butterflies. Our first date was magical, filled with endless conversations and shared laughter.",
        },
        {
            year: "2022",
            title: "Falling in Love",
            description:
                "Every day together made us fall deeper in love. We knew we had found something truly special.",
        },
        {
            year: "2024",
            title: "The Proposal",
            description:
                "Under a sky full of stars, Mustafa asked Sara the most important question. She said YES!",
        },
        {
            year: "2026",
            title: "Forever Begins",
            description:
                "Our wedding day marks the beginning of our forever. Thank you for being part of our journey.",
        },
    ];

    return (
        <section
            id="story-section"
            className="py-20 md:py-32 bg-gradient-to-b from-white via-rose-50 to-amber-50 relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-30" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">
                        Our Journey
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                        Our Love Story
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A tale of two hearts that found each other and decided
                        to beat as one
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-rose-300 via-amber-300 to-rose-300" />

                    {timeline.map((event, index) => (
                        <div
                            key={event.year}
                            className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div
                                className={`flex items-center gap-8 ${
                                    index % 2 === 0
                                        ? "flex-row"
                                        : "flex-row-reverse"
                                }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1">
                                    <div
                                        className={`bg-white rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                                            index % 2 === 0
                                                ? "text-right"
                                                : "text-left"
                                        }`}
                                    >
                                        <span className="inline-block px-4 py-1 bg-gradient-to-r from-rose-400 to-amber-400 text-white text-sm rounded-full mb-3">
                                            {event.year}
                                        </span>
                                        <h3 className="font-serif text-xl md:text-2xl text-gray-800 mb-2">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Circle */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center shadow-lg">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Empty Space */}
                                <div className="flex-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
