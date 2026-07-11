import { motion } from 'framer-motion';
import './Timeline.scss';

const timelineData = [
  {
    id: "1",
    date: "MAY 15 – JUN 30, 2026",
    title: "Applications Open",
    desc: "Submit your creator application form with your details and profile links."
  },
  {
    id: "2",
    date: "JULY 1 – JULY 15, 2026",
    title: "Review & Selection",
    desc: "Our team reviews all submissions. Shortlisted creators are contacted directly."
  },
  {
    id: "3",
    date: "JULY 20, 2026",
    title: "Confirmation & Onboarding",
    desc: "Selected creators receive official confirmation, event details, and onboarding kit."
  },
  {
    id: "4",
    date: "AUGUST 14–16, 2026",
    title: "FanFest 2026 — LIVE",
    desc: "Three days of content, connection, and unforgettable fan experiences."
  }
];

const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-container">
        
        {/* Section Header */}
        <div className="timeline-header">
          <span className="section-badge">KEY DATES</span>
          <h2 className="section-title">APPLICATION TIMELINE</h2>
        </div>

        {/* Timeline List */}
        <div className="timeline-list">
          {timelineData.map((item, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="node-wrapper">
                <div className="node">{item.id}</div>
                {/* Aakhiri item ke baad line nahi dikhani hai, isliye condition */}
                {index !== timelineData.length - 1 && <div className="line"></div>}
              </div>
              
              <div className="content">
                <span className="date">{item.date}</span>
                <h3 className="title">{item.title}</h3>
                <p className="desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;