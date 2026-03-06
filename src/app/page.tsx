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
            <QuranVerse
                verse="سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ"
                reference="سورة يس ٣٦:٣٦"
            />
            <EventDetails />
            <Gallery />
            <QuranVerse
                verse="رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا"
                reference="سورة الفرقان ٢٥:٧٤"
            />
            <GuestWishes />
            <Footer />
        </main>
    );
}
