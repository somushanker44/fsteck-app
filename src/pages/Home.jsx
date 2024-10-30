import { HeroSlider } from '../components/HeroSlider';
import CompanyIntro from '../components/CompanyIntro';
import OurServices from '../components/OurServices';
import TransformationSection from '../components/TransformationSection';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="home">
      <HeroSlider />
      <CompanyIntro />
      <OurServices />
      <TransformationSection />
    </div>
  );
};

export default Home;
