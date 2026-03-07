import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "You're Invited! Mustafa & Sara's Wedding - April 6, 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #fdf2f8 0%, #fff7ed 50%, #fdf2f8 100%)",
                    fontFamily: "serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: "absolute",
                        top: -80,
                        right: -80,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: "rgba(251, 113, 133, 0.15)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -80,
                        left: -80,
                        width: 300,
                        height: 300,
                        borderRadius: "50%",
                        background: "rgba(245, 158, 11, 0.15)",
                    }}
                />

                {/* Top ornament line */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        marginBottom: 20,
                    }}
                >
                    <div
                        style={{
                            width: 80,
                            height: 1,
                            background: "linear-gradient(to right, transparent, #fb7185)",
                        }}
                    />
                    <div style={{ color: "#fb7185", fontSize: 28 }}>&#x2764;</div>
                    <div
                        style={{
                            width: 80,
                            height: 1,
                            background: "linear-gradient(to left, transparent, #fb7185)",
                        }}
                    />
                </div>

                {/* You're Invited */}
                <div
                    style={{
                        fontSize: 28,
                        color: "#fb7185",
                        letterSpacing: 6,
                        textTransform: "uppercase",
                        marginBottom: 16,
                    }}
                >
                    You&apos;re Invited
                </div>

                {/* Names */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #e11d48, #f59e0b)",
                        backgroundClip: "text",
                        color: "transparent",
                        marginBottom: 8,
                        display: "flex",
                    }}
                >
                    Mustafa & Sara
                </div>

                {/* Date */}
                <div
                    style={{
                        fontSize: 32,
                        color: "#374151",
                        marginTop: 16,
                        fontWeight: 300,
                    }}
                >
                    April 6, 2026
                </div>

                {/* Location */}
                <div
                    style={{
                        fontSize: 20,
                        color: "#9ca3af",
                        marginTop: 12,
                    }}
                >
                    6th of October City, Giza
                </div>

                {/* Bottom ornament line */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        marginTop: 24,
                    }}
                >
                    <div
                        style={{
                            width: 80,
                            height: 1,
                            background: "linear-gradient(to right, transparent, #fbbf24)",
                        }}
                    />
                    <div style={{ color: "#fbbf24", fontSize: 28 }}>&#x2764;</div>
                    <div
                        style={{
                            width: 80,
                            height: 1,
                            background: "linear-gradient(to left, transparent, #fbbf24)",
                        }}
                    />
                </div>
            </div>
        ),
        { ...size }
    );
}
