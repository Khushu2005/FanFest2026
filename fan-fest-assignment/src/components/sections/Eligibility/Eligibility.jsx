import { motion } from 'framer-motion';
import './Eligibility.scss';

const categories = [
  { icon: "📹", label: "YouTubers" },
  { icon: "🎵", label: "TikTokers" },
  { icon: "📸", label: "Instagrammers" },
  { icon: "🎙️", label: "Podcasters" },
  { icon: "🎮", label: "Streamers" },
  { icon: "✍️", label: "Bloggers" },
  { icon: "🎨", label: "Digital Artists" },
  { icon: "💪", label: "Fitness Creators" },
  { icon: "🍳", label: "Food Creators" },
  { icon: "👗", label: "Fashion Creators" }
];

const Eligibility = () => {
  return (
    <section className="eligibility-section" id="eligibility">
      <div className="eligibility-container">
        
        {/* Section Header */}
        <div className="eligibility-header">
          <span className="section-badge">ELIGIBILITY</span>
          <h2 className="section-title">WHO CAN APPLY?</h2>
          <p className="section-desc">
            We welcome creators across every niche, platform, and audience size. If you create — this is for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="eligibility-grid">
          {categories.map((item, index) => (
            <motion.div 
              className="category-card" 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="category-icon">{item.icon}</div>
              <h3 className="category-label">{item.label}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Eligibility;