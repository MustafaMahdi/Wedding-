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
    title: "Mustafa & Sara | Wedding Invitation",
    description:
        "Join us in celebrating the wedding of Mustafa Mahdy and Sara Mohsen. Save the date: April 6, 2026",
    keywords: ["wedding", "invitation", "Mustafa", "Sara", "Mahdy", "Mohsen"],
    openGraph: {
        title: "Mustafa & Sara | Wedding Invitation",
        description:
            "Join us in celebrating the wedding of Mustafa Mahdy and Sara Mohsen",
        type: "website",
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
