import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Product from '../components/Product';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Vision from '../components/Vision';
import BackgroundGradientDemo from '../components/CardProduct';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSection />
        <Services />
        <Product />
        
        <Team autoplay={true} />
        <Vision />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage; 