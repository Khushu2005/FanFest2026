import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faq.scss';

const faqData = [
  {
    question: "Is there a minimum follower count to apply?",
    answer: "No, we welcome creators of all sizes! We review applications based on content quality, engagement, and alignment with our event values."
  },
  {
    question: "Is travel reimbursement provided?",
    answer: "We cover accommodation for all selected creators. Travel reimbursement is offered on a case-by-case basis for international creators. Details are shared in your acceptance letter."
  },
  {
    question: "Can I apply as a team or co-creators?",
    answer: "Yes! You can apply as a duo or small team. Each member should be listed in the application and all relevant social links included."
  },
  {
    question: "What is the Creator Code of Conduct?",
    answer: "FanFest 2026 requires all participating creators to maintain a respectful, inclusive environment for fans and fellow creators. The full CoC is available on our website."
  },
  {
    question: "Will I be paid to participate?",
    answer: "Selected creators receive a comprehensive perks package including accommodation, a dedicated stage slot, and promotional exposure. Paid partnerships are available separately through our brand matching program."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <span className="section-badge">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">GOT QUESTIONS?</h2>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                  <span className="icon">+</span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;