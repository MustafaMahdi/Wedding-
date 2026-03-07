"use client";

import { useEffect, useState } from "react";

export default function EventDetails() {
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

        const element = document.getElementById("event-section");
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <section
            id="event-section"
            className="py-20 md:py-32 bg-white relative"
        >
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

            <div className="max-w-4xl mx-auto px-4">
                {/* Section Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">
                        Save The Date
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                        Wedding Event
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
                        <span className="text-rose-400">&hearts;</span>
                        <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300" />
                    </div>
                </div>

                {/* Wedding Event Card */}
                <div
                    className={`max-w-xl mx-auto transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                >
                    <div className="group relative">
                        {/* Card Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

                        {/* Card */}
                        <div className="relative bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 md:p-10 border border-rose-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="font-serif text-3xl text-gray-800 mb-1">
                                    Wedding Ceremony
                                </h3>
                                <p className="text-xl text-rose-400 font-medium mb-4" dir="rtl">
                                    حفل الزفاف
                                </p>
                                <p className="text-3xl font-light text-rose-500 mb-4">
                                    April 6, 2026 | 3:00 - 5:00 PM
                                </p>
                                <div className="space-y-1 mb-4">
                                    <p className="text-gray-800 font-medium text-lg" dir="rtl">
                                        مسجد فاضل
                                    </p>
                                    <p className="text-gray-500 text-sm" dir="rtl">
                                        حي المتميز، غرب سوميد، مدينة 6 أكتوبر، الجيزة
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Corners */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose-200 rounded-tr-lg opacity-50" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose-200 rounded-bl-lg opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Embedded Google Map */}
                <div
                    id="map-section"
                    className={`mt-10 transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                >
                    <iframe
                        src="https://maps.google.com/maps?q=%D9%85%D8%B3%D8%AC%D8%AF+%D9%81%D8%A7%D8%B6%D9%84+%D8%AD%D9%8A+%D8%A7%D9%84%D9%85%D8%AA%D9%85%D9%8A%D8%B2+%D8%BA%D8%B1%D8%A8+%D8%B3%D9%88%D9%85%D9%8A%D8%AF+6+%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-2xl"
                    />
                </div>

                {/* Dress Code Note */}
                <div
                    className={`mt-10 max-w-xl mx-auto transition-all duration-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                >
                    <div className="relative bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-6 md:p-8 border border-amber-200/60 shadow-sm">
                        <div className="flex items-start gap-4">
                            {/* Info Icon */}
                            <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-rose-300 flex items-center justify-center text-white shadow">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                                    />
                                </svg>
                            </div>
                            {/* Message */}
                            <div>
                                <h4 className="font-serif text-lg text-gray-800 mb-2">
                                    Dress Code
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    In respect of the venue guidelines, we kindly ask our guests to
                                    observe a modest dress code. Revealing attire is not permitted
                                    within the mosque. Thank you for your understanding and
                                    consideration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View on Google Maps Button */}
                <div
                    className={`text-center mt-10 transition-all duration-1000 delay-700 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <a
                        href="https://maps.google.com/maps?q=%D9%85%D8%B3%D8%AC%D8%AF+%D9%81%D8%A7%D8%B6%D9%84+%D8%AD%D9%8A+%D8%A7%D9%84%D9%85%D8%AA%D9%85%D9%8A%D8%B2+%D8%BA%D8%B1%D8%A8+%D8%B3%D9%88%D9%85%D9%8A%D8%AF+6+%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
}
