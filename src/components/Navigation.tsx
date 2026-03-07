"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#event-section" },
    { name: "Location", href: "#map-section" },
    { name: "Gallery", href: "#gallery-section" },
    { name: "Wishes", href: "#wishes-section" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("#")}
                        className={`font-serif text-xl md:text-2xl transition-colors ${
                            isScrolled ? "text-gray-800" : "text-gray-800"
                        }`}
                    >
                        M <span className="text-rose-400">&amp;</span> S
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`text-sm tracking-wide transition-colors hover:text-rose-500 ${
                                    isScrolled
                                        ? "text-gray-600"
                                        : "text-gray-700"
                                }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 transition-colors ${
                            isScrolled ? "text-gray-800" : "text-gray-800"
                        }`}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="font-serif text-2xl text-gray-800 hover:text-rose-500 transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
