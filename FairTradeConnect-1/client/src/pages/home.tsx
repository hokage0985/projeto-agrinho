import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Gallery from '@/components/gallery';
import Impact from '@/components/impact';
import Connection from '@/components/connection';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Impact />
      <Connection />
      <Footer />
    </div>
  );
}
