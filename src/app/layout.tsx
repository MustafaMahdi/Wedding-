import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
    variable: "--font-serif",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const montserrat = Montserrat({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://mustafa-and-sara.vercel.app"),
    title: "You're Invited! Mustafa & Sara's Wedding",
    description:
        "Join us to celebrate our special day — April 6, 2026 | 6th of October City, Giza",
    keywords: ["wedding", "invitation", "Mustafa", "Sara", "Mahdy", "Mohsen"],
    openGraph: {
        title: "You're Invited! Mustafa & Sara's Wedding",
        description:
            "Join us to celebrate our special day — April 6, 2026 | 6th of October City, Giza",
        type: "website",
        siteName: "Mustafa & Sara Wedding",
    },
    twitter: {
        card: "summary_large_image",
        title: "You're Invited! Mustafa & Sara's Wedding",
        description:
            "Join us to celebrate our special day — April 6, 2026",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${cormorant.variable} ${montserrat.variable} antialiased font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
