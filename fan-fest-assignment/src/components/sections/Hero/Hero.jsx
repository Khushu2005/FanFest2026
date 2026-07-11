import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Glow Element */}
      <div className="glow-bg"></div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-badge">
          🎬 <span className="badge-text">OPEN APPLICATIONS — LIMITED SPOTS</span>
        </div>

        <h1 className="hero-title">
          CREATE.<br />
          <span className="highlight">CONNECT.</span><br />
          DOMINATE.
        </h1>
        
        <p className="hero-desc">
          FanFest 2026 is calling on creators like you to be part of the biggest fan-powered event of the year. Share your world, grow your audience, and make history.
        </p>
        
        <div className="hero-actions">
          <button className="btn-primary">Apply as a Creator</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        {/* NAYA STATS SECTION YAHAN ADD KIYA HAI */}
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-value">AUG 14-16</span>
            <span className="stat-label">EVENT DATES</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2026</span>
            <span className="stat-label">EDITION</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">50K+</span>
            <span className="stat-label">EXPECTED FANS</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">200+</span>
            <span className="stat-label">CREATOR SPOTS</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;