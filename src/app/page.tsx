import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import DesignerSection from '../app/components/DesignerSection';
import ExploreDesigns from '../app/components/ExploreDesigns';
import CallToAction from '../app/components/CallToAction';
import Branding from '../app/components/Branding';
import Footer from '../app/components/Footer';

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <HeroSection />
      <DesignerSection />
      <ExploreDesigns />
      <CallToAction />
      <Branding />
      <Footer />
    </div>
  );
}
