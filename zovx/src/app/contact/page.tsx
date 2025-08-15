"use client";

import "../neon-background.css";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="neon-container">
      <div className="neon-brand">
        ZOVX Agency
      </div>

      <div className="neon-subtitle">
        Custom AI Solutions for Your Business
      </div>
      
      <div className="hero-section">
        <h1 className="hero-title">
          Ready to Transform Your Business with Custom AI?
        </h1>
        <p className="hero-description">
          We've helped thousands with our prompts. Now let us build custom AI solutions tailored specifically for your business needs.
        </p>
      </div>

      <div className="services-section">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>Custom AI Tools</h3>
            <p>Tailored AI applications built specifically for your workflow and industry requirements.</p>
            <ul>
              <li>Custom ChatGPT integrations</li>
              <li>AI-powered automation</li>
              <li>Industry-specific solutions</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>AI Strategy & Consulting</h3>
            <p>Strategic guidance to implement AI across your organization for maximum impact.</p>
            <ul>
              <li>AI readiness assessment</li>
              <li>Implementation roadmap</li>
              <li>Team training & support</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>AI Automation</h3>
            <p>Streamline your processes with intelligent automation that saves time and reduces errors.</p>
            <ul>
              <li>Workflow automation</li>
              <li>Data processing & analysis</li>
              <li>Content generation systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="contact-form">
          <h2>Let's Build Something Amazing Together</h2>
          <p>Tell us about your project and we'll get back to you within 24 hours.</p>
          
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
            
            <div className="form-group">
              <label htmlFor="role">Your Role</label>
              <select id="role" name="role">
                <option value="">Select your role</option>
                <option value="founder">Startup Founder</option>
                <option value="ecommerce">E-commerce Owner</option>
                <option value="content-creator">Content Creator</option>
                <option value="marketing">Marketing Manager</option>
                <option value="developer">Developer</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="project">Project Description *</label>
              <textarea 
                id="project" 
                name="project" 
                rows={4} 
                placeholder="Tell us about your AI project goals, current challenges, and what you'd like to achieve..."
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="budget">Project Budget</label>
              <select id="budget" name="budget">
                <option value="">Select budget range</option>
                <option value="5k-15k">$5K - $15K</option>
                <option value="15k-50k">$15K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k+">$100K+</option>
              </select>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Project Details
            </button>
          </form>
        </div>
      </div>

      <div className="back-to-prompts">
        <Link href="/" className="back-link">
          ← Back to AI Prompts
        </Link>
      </div>
    </div>
  );
}
