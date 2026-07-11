import { motion } from 'framer-motion';
import './Features.scss';

// Cards ka data yahan define kar rahe hain taaki code clean rahe
const featuresData = [
  {
    icon: "🎤",
    title: "Live Panels & Talks",
    desc: "Host your own stage session, Q&A, or join a creator roundtable. Real conversations with your real fans."
  },
  {
    icon: "📸",
    title: "Meet & Greet Booths",
    desc: "Dedicated creator booths where fans can interact, take photos, and grab exclusive merchandise."
  },
  {
    icon: "🤝",
    title: "Brand Collaborations",
    desc: "Connect with top-tier sponsors looking for authentic creator partnerships during the event."
  },
  {
    icon: "🎮",
    title: "Live Content Challenges",
    desc: "Compete in cross-creator content battles, streamed live for the audience and judged by fans."
  },
  {
    icon: "🌐",
    title: "Global Streaming Reach",
    desc: "The entire event is live-streamed to millions worldwide — your content extends far beyond the venue."
  },
  {
    icon: "🎉",
    title: "Creator After-Party",
    desc: "An exclusive closing night celebration — network, celebrate, and create memories off-camera too."
  }
];

const Features = () => {
  return (
    <section className="features-section" id="about">
      <div className="features-container">
        
        {/* Section Header */}
        <div className="features-header">
          <span className="section-badge">WHAT IS FANFEST 2026</span>
          <h2 className="section-title">
            WHERE CREATORS <br /> MEET THEIR FANS
          </h2>
          <p className="section-desc">
            Three days of panels, activations, live streams, brand collaborations, and unforgettable fan moments — all under one roof.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <motion.div 
              className="feature-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="icon-box">
                {feature.icon}
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;