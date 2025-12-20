import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import ScanlineOverlay from '@/components/ScanlineOverlay';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScanlineOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
