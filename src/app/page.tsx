import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import LoveStory from '@/components/LoveStory';
import EventDetails from '@/components/EventDetails';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Countdown />
      <LoveStory />
      <EventDetails />
      <Gallery />
      <RSVP />
      <Footer />
    </main>
  );
}

