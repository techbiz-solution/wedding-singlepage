import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import EventDetails from '@/components/EventDetails';
import TravelAccommodation from '@/components/TravelAccommodation';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <EventDetails />
      <TravelAccommodation />
      <Gallery />
      <RSVP />
      <Footer />
      </main>
  );
}
