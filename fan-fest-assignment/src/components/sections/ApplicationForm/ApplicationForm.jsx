import { motion } from 'framer-motion';
import './ApplicationForm.scss';

const ApplicationForm = () => {
  return (
    <section className="application-section" id="apply">
      <div className="application-container">
        
        <motion.div 
          className="form-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Form Header */}
          <div className="form-header">
            <h2 className="form-title">APPLY AS A CREATOR</h2>
            <p className="form-subtitle">Fill in the form below and we'll review your application within 5–7 business days.</p>
          </div>

          <form className="creator-form" onSubmit={(e) => e.preventDefault()}>
            
            {/* --- PERSONAL INFORMATION --- */}
            <div className="form-section">
              <h3 className="section-heading">PERSONAL INFORMATION</h3>
              
              <div className="form-row">
                <div className="input-group">
                  <label>FIRST NAME <span>*</span></label>
                  <input type="text" placeholder="e.g. Alex" required />
                </div>
                <div className="input-group">
                  <label>LAST NAME <span>*</span></label>
                  <input type="text" placeholder="e.g. Rivera" required />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>EMAIL ADDRESS <span>*</span></label>
                  <input type="email" placeholder="hello@yoursite.com" required />
                </div>
                <div className="input-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" placeholder="+91 9876543210" />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>COUNTRY <span>*</span></label>
                  <select required defaultValue="">
                    <option value="" disabled>Select your country</option>
                    <option value="india">India</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>CITY</label>
                  <input type="text" placeholder="e.g. Mumbai" />
                </div>
              </div>
            </div>

            <hr className="form-divider" />

            {/* --- CREATOR PROFILE --- */}
            <div className="form-section">
              <h3 className="section-heading">CREATOR PROFILE</h3>
              
              <div className="form-row">
                <div className="input-group">
                  <label>PRIMARY CREATOR HANDLE / NAME <span>*</span></label>
                  <input type="text" placeholder="@yourname" required />
                </div>
                <div className="input-group">
                  <label>CONTENT NICHE <span>*</span></label>
                  <select required defaultValue="">
                    <option value="" disabled>Select your niche</option>
                    <option value="tech">Technology</option>
                    <option value="gaming">Gaming</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="education">Education</option>
                    <option value="entertainment">Entertainment</option>
                  </select>
                </div>
              </div>

              <div className="input-group full-width">
                <label>PRIMARY PLATFORM(S) <span>*</span></label>
                <div className="checkbox-grid">
                  {["YOUTUBE", "INSTAGRAM", "TIKTOK", "TWITCH", "PODCAST", "X (TWITTER)", "OTHER"].map((platform) => (
                    <label className="checkbox-label red-text" key={platform}>
                      <input type="checkbox" name="platform" value={platform} />
                      {platform}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>TOTAL FOLLOWERS / SUBSCRIBERS <span>*</span></label>
                  <select required defaultValue="">
                    <option value="" disabled>Select range</option>
                    <option value="1k-10k">1K - 10K</option>
                    <option value="10k-100k">10K - 100K</option>
                    <option value="100k-1m">100K - 1M</option>
                    <option value="1m+">1M+</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>AVERAGE VIEWS PER POST</label>
                  <select defaultValue="">
                    <option value="" disabled>Select range</option>
                    <option value="under-1k">Under 1K</option>
                    <option value="1k-10k">1K - 10K</option>
                    <option value="10k-100k">10K - 100K</option>
                    <option value="100k+">100K+</option>
                  </select>
                </div>
              </div>

              <div className="input-group full-width">
                <label>PRIMARY CHANNEL / PROFILE LINK <span>*</span></label>
                <input type="url" placeholder="https://youtube.com/@yourchannel" required />
              </div>

              <div className="input-group full-width">
                <label>OTHER SOCIAL MEDIA LINKS</label>
                <input type="text" placeholder="Paste links separated by commas" />
              </div>
            </div>

            <hr className="form-divider" />

            {/* --- PARTICIPATION PREFERENCES --- */}
            <div className="form-section">
              <h3 className="section-heading">PARTICIPATION PREFERENCES</h3>
              
              <div className="input-group full-width">
                <label>INTERESTED IN (SELECT ALL THAT APPLY)</label>
                <div className="checkbox-list">
                  {[
                    "HOSTING A PANEL OR TALK", 
                    "MEET & GREET BOOTH", 
                    "CREATOR COLLABORATIONS", 
                    "BRAND SPONSORSHIP OPPORTUNITIES", 
                    "LIVE CONTENT CHALLENGES"
                  ].map((interest) => (
                    <label className="checkbox-label red-text" key={interest}>
                      <input type="checkbox" name="interest" value={interest} />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              <div className="input-group full-width">
                <label>TELL US ABOUT YOURSELF & WHY YOU WANT TO JOIN <span>*</span></label>
                <textarea rows="4" placeholder="Share a brief intro, what kind of content you create, and why FanFest 2026 excites you..." required></textarea>
              </div>

              <div className="input-group full-width">
                <label>PREVIOUS EVENT EXPERIENCE</label>
                <textarea rows="3" placeholder="Have you attended or participated in fan conventions or creator events before? Tell us about it."></textarea>
              </div>

              <div className="input-group full-width">
                <label>HOW DID YOU HEAR ABOUT FANFEST 2026?</label>
                <select defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend / Colleague</option>
                  <option value="email">Email Newsletter</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <hr className="form-divider" />

            {/* --- AGREEMENTS & SUBMIT --- */}
            <div className="form-section agreements">
              <label className="checkbox-label red-text">
                <input type="checkbox" required />
                I AGREE TO FANFEST 2026'S TERMS & CONDITIONS AND CREATOR CODE OF CONDUCT. <span>*</span>
              </label>
              
              <label className="checkbox-label red-text">
                <input type="checkbox" />
                I CONSENT TO PHOTOS AND VIDEOS OF ME BEING USED IN FANFEST MARKETING MATERIALS.
              </label>
              
              <label className="checkbox-label red-text">
                <input type="checkbox" />
                KEEP ME UPDATED WITH FANFEST NEWS AND FUTURE OPPORTUNITIES.
              </label>
            </div>

            <div className="form-submit-wrapper">
              <button type="submit" className="submit-btn">Submit My Application &rarr;</button>
              <p className="submit-note">Applications close June 30, 2026. We'll respond within 5–7 business days. Limited spots available.</p>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationForm;