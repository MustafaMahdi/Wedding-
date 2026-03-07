import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import QuranVerse from "@/components/QuranVerse";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import GuestWishes from "@/components/GuestWishes";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navigation />
            <Hero />
            <AboutUs />
            <QuranVerse
                verse="وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
                reference="سورة الروم ٣٠:٢١"
            />
            <Countdown />
            <EventDetails />
            <Gallery />
            <GuestWishes />
            <Footer />
        </main>
    );
}
