import Hero from '../../components/sections/Hero/Hero';
import Features from '../../components/sections/Features/Features';
import Perks from '../../components/sections/Perks/Perks';
import Eligibility from '../../components/sections/Eligibility/Eligibility';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Perks />
      <Eligibility />
    </div>
  );
};

export default Home;