"use client";

import { useState, useEffect, /* useRef, */ FormEvent } from "react";
import { db /* , storage */ } from "@/lib/firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    orderBy,
    query,
    Timestamp,
} from "firebase/firestore";
// TODO: Uncomment when Firebase Storage (Blaze plan) is enabled
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface Wish {
    id: string;
    name: string;
    message: string;
    // photoURL?: string;
    createdAt: Timestamp;
}

export default function GuestWishes() {
    const [isVisible, setIsVisible] = useState(false);
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    // const [photo, setPhoto] = useState<File | null>(null);
    // const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const fileInputRef = useRef<HTMLInputElement>(null);

    // Intersection observer for fade-in animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById("wishes-section");
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    // Real-time listener for wishes
    useEffect(() => {
        const q = query(
            collection(db, "wishes"),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const wishesData: Wish[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Wish[];
            setWishes(wishesData);
        }, (error) => {
            console.error("Error fetching wishes:", error);
        });

        return () => unsubscribe();
    }, []);

    // TODO: Uncomment when Firebase Storage is enabled
    // const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0];
    //     if (file) {
    //         setPhoto(file);
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setPhotoPreview(reader.result as string);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const removePhoto = () => {
    //     setPhoto(null);
    //     setPhotoPreview(null);
    //     if (fileInputRef.current) {
    //         fileInputRef.current.value = "";
    //     }
    // };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // TODO: Uncomment when Firebase Storage is enabled
            // let photoURL: string | undefined;
            // if (photo) {
            //     const timestamp = Date.now();
            //     const storagePath = `wishes/${timestamp}_${photo.name}`;
            //     const storageRef = ref(storage, storagePath);
            //     await uploadBytes(storageRef, photo);
            //     photoURL = await getDownloadURL(storageRef);
            // }

            console.log("Submitting wish...", { name, message });
            await addDoc(collection(db, "wishes"), {
                name,
                message,
                // ...(photoURL && { photoURL }),
                createdAt: Timestamp.now(),
            });
            console.log("Wish submitted successfully!");

            setName("");
            setMessage("");
            // setPhoto(null);
            // setPhotoPreview(null);
            // if (fileInputRef.current) {
            //     fileInputRef.current.value = "";
            // }
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error("Error submitting wish:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="wishes-section"
            className="py-20 md:py-32 bg-gradient-to-b from-white via-amber-50 to-rose-50 relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <p className="text-rose-400 text-sm tracking-[0.3em] uppercase mb-4">
                        Wall of Love
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
                        Guest Wishes
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Share your blessings and wishes with us
                    </p>
                </div>

                {/* Form */}
                <div
                    className={`max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-rose-100"
                    >
                        <div className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Your Wish *
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none transition-all resize-none"
                                    placeholder="Write your blessings and wishes for the couple..."
                                />
                            </div>

                            {/* TODO: Uncomment Photo Upload when Firebase Storage is enabled */}
                            {/* <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Add a Photo (optional)
                                </label>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-rose-50 file:text-rose-600 hover:file:bg-rose-100 transition-all cursor-pointer"
                                />
                                {photoPreview && (
                                    <div className="mt-4 relative inline-block">
                                        <img
                                            src={photoPreview}
                                            alt="Preview"
                                            className="w-32 h-32 object-cover rounded-xl border border-rose-200"
                                        />
                                        <button
                                            type="button"
                                            onClick={removePhoto}
                                            className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-rose-600 transition-colors"
                                        >
                                            X
                                        </button>
                                    </div>
                                )}
                            </div> */}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            />
                                        </svg>
                                        Sending your wish...
                                    </span>
                                ) : (
                                    "Send Your Wish"
                                )}
                            </button>

                            {/* Success Message */}
                            {isSubmitted && (
                                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                                    <div className="flex items-center justify-center gap-2 text-green-600">
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
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="font-medium">
                                            Thank you! Your wish has been shared.
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                {/* Wishes Display Grid */}
                <div
                    className={`transition-all duration-1000 delay-500 ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    {wishes.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-rose-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 text-lg">
                                No wishes yet — be the first!
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {wishes.map((wish, index) => (
                                <div
                                    key={wish.id}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {/* TODO: Uncomment when photo upload is enabled */}
                                    {/* {wish.photoURL && (
                                        <div className="mb-4 rounded-xl overflow-hidden">
                                            <img
                                                src={wish.photoURL}
                                                alt={`Photo from ${wish.name}`}
                                                className="w-full h-48 object-cover"
                                            />
                                        </div>
                                    )} */}

                                    {/* Name */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-sm font-medium">
                                                {wish.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-gray-800">
                                            {wish.name}
                                        </h3>
                                    </div>

                                    {/* Message */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {wish.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
