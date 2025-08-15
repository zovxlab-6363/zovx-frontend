"use client";

import "./neon-background.css";
import Link from "next/link";

export default function Home() {
  // Role-specific categories for MVP testing
  const categories = [
    
    {
      id: 'ecommerce-brands',
      title: 'ChatGPT for E-commerce Brands',
      description: 'AI-powered prompts to boost sales, optimize listings, and engage customers',
      icon: '🛒',
      color: '#ff6492',
      promptCount: 30,
      tools: ['ChatGPT', 'Midjourney', 'Canva AI'],
      highlights: ['Product Descriptions', 'Email Marketing', 'Social Media Content']
    },
    {
      id: 'content-creators',
      title: 'Claude for Content Creators',
      description: 'Creative AI prompts for content that converts and captivates audiences',
      icon: '✨',
      color: '#ffdd1c',
      promptCount: 35,
      tools: ['Claude', 'Midjourney', 'Runway'],
      highlights: ['Video Scripts', 'Blog Posts', 'Social Captions']
    }
  ];
  return (
    <div className="neon-container">
      <div className="neon-brand">
        ZOVX
      </div>

      <div className="neon-subtitle">
        Your Complete AI Transformation Hub
      </div>
      
      <div className="hero-section">
        <h1 className="hero-title">
          From AI Prompts to Custom Solutions
        </h1>
        <p className="hero-description">
          Start with role-specific AI prompts. Scale with our custom AI agency services. 
          Your journey from AI beginner to AI-powered business starts here.
        </p>
      </div>

      <div className="categories-section">
        <h2 className="section-title">Choose Your Role</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              href={`/category/${category.id}`} 
              key={category.id} 
              className="category-card"
              style={{ '--category-color': category.color } as React.CSSProperties}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <span className="prompt-count">{category.promptCount} Prompts</span>
              </div>
              
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              
              <div className="category-tools">
                {category.tools.map((tool) => (
                  <span key={tool} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="category-highlights">
                <strong>Popular:</strong>
                <ul>
                  {category.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="cta-section">
                <span className="explore-btn">Explore Prompts →</span>
                <span className="agency-hint">Need custom AI solutions? We build them too.</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="agency-cta-section">
        <div className="agency-cta">
          <h2>Ready for Custom AI Solutions?</h2>
          <p>Love our prompts? Let us build custom AI tools, automations, and strategies for your business.</p>
          <Link href="/contact" className="agency-cta-btn">
            Get Custom AI Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
