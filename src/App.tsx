import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NodeCanvas from './components/NodeCanvas';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Now from './components/Now';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-accent/20 selection:text-white">
      <CursorSpotlight />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <NodeCanvas />
      <Timeline />
      <Pricing />
      <Testimonials />
      <Now />
      <Contact />
      <Footer />
    </div>
  );
}
