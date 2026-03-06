"use client";

import { useEffect, useState } from "react";

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

    // Placeholder gallery with gradient backgrounds (replace with actual photos)
    const galleryItems = [
        { id: 1, gradient: "from-rose-200 to-rose-300", label: "Mosque Exterior" },
        { id: 2, gradient: "from-amber-200 to-rose-200", label: "Prayer Hall" },
        { id: 3, gradient: "from-rose-300 to-amber-200", label: "Entrance" },
        { id: 4, gradient: "from-amber-200 to-amber-300", label: "Garden Area" },
        { id: 5, gradient: "from-rose-200 to-amber-300", label: "Interior Details" },
        { id: 6, gradient: "from-amber-300 to-rose-200", label: "Night View" },
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
                        Memories
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                        Our Gallery
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A glimpse of our beautiful wedding venue
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
                                {/* Placeholder Gradient (Replace with actual image) */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`}
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

                                {/* Photo Placeholder Text */}
                                <div className="absolute bottom-4 left-4 right-4 text-center">
                                    <p className="text-white/80 text-sm font-light tracking-wider">
                                        {item.label}
                                    </p>
                                    <p className="text-white/60 text-xs">
                                        Click to view
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
                    <div className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden">
                        <div
                            className={`w-full h-full bg-gradient-to-br ${
                                galleryItems.find(
                                    (item) => item.id === selectedImage
                                )?.gradient
                            } flex items-center justify-center`}
                        >
                            <p className="text-white text-xl font-light">
                                Photo {selectedImage}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
