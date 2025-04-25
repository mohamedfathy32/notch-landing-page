import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Work from '../components/Work';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Vision from '../components/Vision';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSection />
        <Services />
        {/* <Work /> */}
        <Team autoplay={true} />
        <Vision />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage; 