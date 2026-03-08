"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import Link from "next/link";

interface Wish {
    id: string;
    name: string;
    message: string;
    timestamp: Timestamp;
}

export default function WishesPage() {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(
            collection(db, "wishes"),
            orderBy("timestamp", "desc")
        );
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const data: Wish[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Wish[];
                setWishes(data);
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching wishes:", error);
                setLoading(false);
            }
        );
        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-rose-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20" />

            <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-600 transition-colors mb-12 text-sm tracking-wide"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Invitation
                </Link>

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">
                        Wall of Love
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                        Guest Wishes
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Blessings and wishes from our loved ones
                    </p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center py-20">
                        <svg className="animate-spin w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                    </div>
                )}

                {/* Empty State */}
                {!loading && wishes.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No wishes yet. Be the first to send one!</p>
                        <Link
                            href="/#wishes-section"
                            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Send a Wish
                        </Link>
                    </div>
                )}

                {/* Wishes Grid */}
                {!loading && wishes.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishes.map((wish) => (
                            <div
                                key={wish.id}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center shrink-0">
                                        <span className="text-white text-sm font-semibold">
                                            {wish.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{wish.name}</h3>
                                        {wish.timestamp && (
                                            <p className="text-gray-400 text-xs">
                                                {wish.timestamp.toDate().toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{wish.message}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
