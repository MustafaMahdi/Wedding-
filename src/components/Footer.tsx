export default function Footer() {
    return (
        <footer className="py-12 bg-gradient-to-b from-white to-rose-50 relative">
            {/* Top Decorative Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Names */}
                <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
                    Mustafa <span className="text-rose-400">&amp;</span> Sara
                </h3>

                {/* Date */}
                <p className="text-gray-600 mb-6">April 6, 2026</p>

                {/* Decorative Divider */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
                    <svg
                        className="w-5 h-5 text-rose-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
                </div>

                {/* Hashtag */}
                <p className="text-rose-500 font-medium mb-4">
                    #MustafaAndSara2026
                </p>

                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    Made with{" "}
                    <svg
                        className="w-4 h-4 inline-block text-rose-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>{" "}
                    for our special day
                </p>
            </div>
        </footer>
    );
}
