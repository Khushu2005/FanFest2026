import Hero from '../../components/sections/Hero/Hero';
import Features from '../../components/sections/Features/Features';
import Perks from '../../components/sections/Perks/Perks';
import Eligibility from '../../components/sections/Eligibility/Eligibility';
import Timeline from '../../components/sections/Timeline/Timeline'
import ApplicationForm from '../../components/sections/ApplicationForm/ApplicationForm';
import Faq from '../../components/sections/Faq/Faq';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Perks />
      <Eligibility />
      <Timeline />
      <ApplicationForm />
      <Faq /> 
      <Footer />
    </div>
  );
};

export default Home;