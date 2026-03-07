"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutUs() {
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

        const element = document.getElementById("about-section");
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <section
            id="about-section"
            className="py-20 md:py-32 bg-gradient-to-b from-amber-50 via-white to-rose-50 relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute top-10 right-20 w-48 h-48 bg-rose-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 left-20 w-48 h-48 bg-amber-200 rounded-full blur-3xl opacity-30" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">
                        The Happy Couple
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800">
                        About Us
                    </h2>
                </div>

                {/* Circular Cartoon Placeholder */}
                <div
                    className={`flex flex-col items-center transition-all duration-1000 delay-200 ${
                        isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90"
                    }`}
                >
                    <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white relative">
                        <Image
                            src="/couple-sketch.jpg"
                            alt="Mustafa & Sara sketch"
                            fill
                            className="object-cover"
                            sizes="256px"
                        />
                    </div>

                    {/* Names Subtitle */}
                    <div
                        className={`mt-8 text-center transition-all duration-1000 delay-400 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"
                        }`}
                    >
                        <h3 className="font-serif text-2xl md:text-3xl text-gray-800">
                            Mustafa{" "}
                            <span className="text-rose-400 font-light">
                                &amp;
                            </span>{" "}
                            Sara
                        </h3>
                        <div className="flex items-center justify-center gap-3 mt-3">
                            <span className="h-px w-10 bg-gradient-to-r from-transparent to-rose-300" />
                            <svg
                                className="w-4 h-4 text-rose-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span className="h-px w-10 bg-gradient-to-l from-transparent to-rose-300" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
