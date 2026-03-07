"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById("gallery-section");
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const galleryItems = [
        { id: 1, src: "/venue/exterior.jpg", label: "Mosque Exterior" },
        { id: 2, src: "/venue/arches.jpg", label: "Stone Arches" },
        { id: 3, src: "/venue/garden.jpg", label: "Garden Area" },
    ];

    return (
        <section
            id="gallery-section"
            className="py-20 md:py-32 bg-white relative"
        >
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">
                        The Venue
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                        Our Gallery
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A glimpse of our beautiful wedding venue
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`transition-all duration-700 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
                                onClick={() => setSelectedImage(item.id)}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                {/* Heart Icon on Hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                                        <svg
                                            className="w-6 h-6 text-rose-500"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                                    <p className="text-white text-sm font-light tracking-wider text-center">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-rose-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div className="max-w-4xl w-full rounded-2xl overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                        <Image
                            src={
                                galleryItems.find(
                                    (item) => item.id === selectedImage
                                )?.src || ""
                            }
                            alt={
                                galleryItems.find(
                                    (item) => item.id === selectedImage
                                )?.label || ""
                            }
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
