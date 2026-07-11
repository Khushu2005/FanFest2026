import { motion } from 'framer-motion';
import './Perks.scss';

const perksData = [
  {
    num: "01",
    title: "All-Access Badge",
    desc: "Backstage, VIP zones, creator lounge, and all event areas throughout the three days."
  },
  {
    num: "02",
    title: "Complimentary Accommodation",
    desc: "Hotel stay covered for the full duration of the event for verified creators."
  },
  {
    num: "03",
    title: "Dedicated Creator Stage",
    desc: "Your own scheduled time slot on the creator main stage or breakout rooms."
  },
  {
    num: "04",
    title: "Professional Content Crew",
    desc: "On-site videographers and photographers available to document your FanFest moments."
  },
  {
    num: "05",
    title: "Promotion Package",
    desc: "Featured on all official FanFest 2026 social media, website, and email marketing to 500K+ subscribers."
  },
  {
    num: "06",
    title: "Exclusive Merch Kit",
    desc: "Limited-edition FanFest 2026 creator merchandise kit sent to you before the event."
  }
];

const Perks = () => {
  return (
    <section className="perks-section" id="perks">
      <div className="perks-container">
        
        {/* Section Header */}
        <div className="perks-header">
          <span className="section-badge">CREATOR PERKS</span>
          <h2 className="section-title">WHAT YOU GET</h2>
          <p className="section-desc">
            Every creator who joins FanFest 2026 gets a full support package designed to help you shine.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="perks-grid">
          {perksData.map((perk, index) => (
            <motion.div 
              className="perk-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="perk-number">{perk.num}</div>
              <div className="perk-info">
                <h3 className="card-title">{perk.title}</h3>
                <p className="card-desc">{perk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Perks;