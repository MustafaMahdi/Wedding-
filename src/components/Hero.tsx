"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-white to-amber-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Hearts */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                        }}
                    >
                        <svg
                            className="w-4 h-4 md:w-6 md:h-6 text-rose-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                ))}

                {/* Decorative Circles */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Top Ornament */}
                <div
                    className={`transition-all duration-1000 delay-100 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-10"
                    }`}
                >
                    <p className="text-rose-400 text-sm md:text-base tracking-[0.3em] uppercase font-light mb-2">
                        We&apos;re Getting Married
                    </p>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-rose-300" />
                        <svg
                            className="w-6 h-6 text-rose-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-rose-300" />
                    </div>
                </div>

                {/* Couple Photo Placeholder */}
                <div
                    className={`flex justify-center mb-6 transition-all duration-1000 delay-200 ${
                        isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90"
                    }`}
                >
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white/60 relative">
                        <Image
                            src="/couple-sketch.jpg"
                            alt="Mustafa & Sara"
                            fill
                            className="object-cover"
                            sizes="128px"
                            priority
                        />
                    </div>
                </div>

                {/* Names */}
                <div
                    className={`transition-all duration-1000 delay-300 ${
                        isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90"
                    }`}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-800 mb-4">
                        <span className="block animate-shimmer bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 bg-[length:200%_auto] bg-clip-text text-transparent">
                            Mustafa
                        </span>
                        <span className="block text-2xl md:text-3xl text-rose-400 my-4 font-light">
                            &amp;
                        </span>
                        <span className="block animate-shimmer bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 bg-[length:200%_auto] bg-clip-text text-transparent">
                            Sara
                        </span>
                    </h1>
                </div>

                {/* Date */}
                <div
                    className={`transition-all duration-1000 delay-500 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="mt-8 mb-6">
                        <p className="text-gray-600 text-lg md:text-xl font-light tracking-wide">
                            Save The Date
                        </p>
                        <p className="text-2xl md:text-3xl text-gray-800 font-serif mt-2">
                            April 6, 2026
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className="flex flex-col items-center animate-bounce">
                        <p className="text-rose-400 text-xs tracking-widest uppercase mb-2">
                            Scroll
                        </p>
                        <svg
                            className="w-5 h-5 text-rose-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
