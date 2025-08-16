"use client";

import "../../neon-background.css";
import Link from "next/link";
import { useState } from "react";

export default function EcommerceBrandsPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string>("");

  const prompts = [
    {
      id: 1,
      title: "High-Converting Product Description Generator",
      description: "Create product descriptions that drive sales and reduce returns",
      tool: "ChatGPT",
      category: "Product Copy",
      prompt_text: `Create a compelling product description for: [PRODUCT NAME]

Product details: [FEATURES, MATERIALS, DIMENSIONS]
Target customer: [DEMOGRAPHICS, PAIN POINTS, GOALS]
Brand tone: [LUXURY/CASUAL/TECHNICAL/FRIENDLY]
Price point: [BUDGET/MID-RANGE/PREMIUM]

Include:
- Attention-grabbing headline
- Problem/solution focus
- Key benefits (not just features)
- Social proof elements
- Urgency/scarcity triggers
- Clear call-to-action
- SEO keywords naturally integrated

Optimize for both conversions and search rankings. Focus on emotional triggers while addressing practical concerns.`,
      is_trending: true
    },
    {
      id: 2,
      title: "Email Marketing Campaign Creator",
      description: "Build complete email sequences that nurture and convert",
      tool: "Claude",
      category: "Email Marketing",
      prompt_text: `Create a 7-email marketing sequence for: [CAMPAIGN GOAL - welcome/abandoned cart/re-engagement]

Target audience: [CUSTOMER SEGMENT]
Products/services: [DESCRIPTION]
Brand voice: [PERSONALITY TRAITS]

For each email include:
- Subject line (with A/B test variant)
- Preview text
- Email body (300-500 words)
- Clear CTA
- Personalization elements
- Mobile optimization notes

Sequence flow:
Email 1: Welcome/Hook
Email 2: Value/Education  
Email 3: Social proof
Email 4: Urgency/Offer
Email 5: Objection handling
Email 6: Final call
Email 7: Last chance

Include segmentation suggestions and send timing recommendations.`,
      is_trending: false
    },
    {
      id: 3,
      title: "Customer Avatar & Targeting Research",
      description: "Deep-dive into your ideal customer psychology and behavior",
      tool: "ChatGPT",
      category: "Market Research",
      prompt_text: `Create a detailed customer avatar for my e-commerce business selling: [PRODUCTS]

Research and analyze:

Demographics:
- Age, gender, income, location
- Education, occupation, family status

Psychographics:
- Values, interests, lifestyle
- Shopping behavior patterns
- Social media usage
- Preferred communication channels

Pain Points & Challenges:
- What problems does my product solve?
- What frustrates them about current solutions?
- What's their biggest fear/concern?

Goals & Desires:
- What outcome do they want?
- What does success look like?
- What would make them feel confident about buying?

Messaging Framework:
- Language they use
- Objections they have
- Triggers that motivate action
- Proof they need to see

Include specific ad targeting recommendations for Facebook/Google Ads.`,
      is_trending: true
    },
    {
      id: 4,
      title: "Amazon Listing Optimization",
      description: "Optimize Amazon listings for maximum visibility and conversions",
      tool: "ChatGPT",
      category: "Amazon FBA",
      prompt_text: `Optimize my Amazon product listing for: [PRODUCT NAME]

Current listing performance: [CLICK-THROUGH RATE, CONVERSION RATE, BSR]
Main competitors: [TOP 3 COMPETITOR ASINS]
Target keywords: [PRIMARY AND SECONDARY KEYWORDS]

Optimize these elements:

Title (200 chars max):
- Include main keyword
- Highlight key benefit
- Mention size/quantity/variant
- Appeal to target customer

Bullet Points (5 points, 500 chars each):
- Lead with benefits, support with features
- Address common objections
- Include lifestyle/use case scenarios
- Incorporate secondary keywords naturally

Product Description (2000 chars):
- Tell a story
- Create emotional connection
- Address remaining objections
- Include technical specifications
- Strong call-to-action

Backend Keywords:
- Relevant search terms not in title/bullets
- Misspellings and variations
- Competitor brand terms (where allowed)

Also provide A+ Content suggestions and review response templates.`,
      is_trending: false
    },
    {
      id: 5,
      title: "Social Media Ad Copy Generator",
      description: "Create scroll-stopping ad copy for Facebook, Instagram, and TikTok",
      tool: "Claude",
      category: "Paid Advertising",
      prompt_text: `Create high-converting ad copy for: [PRODUCT/SERVICE]

Platform: [FACEBOOK/INSTAGRAM/TIKTOK/GOOGLE]
Campaign objective: [AWARENESS/TRAFFIC/CONVERSIONS/RETARGETING]
Target audience: [DEMOGRAPHICS AND INTERESTS]
Budget: [DAILY/MONTHLY SPEND]

Create 3 variations:

Hook Options (First 3 seconds):
- Question hook
- Bold statement
- Story/scenario opener

Body Copy (Each variation):
- Problem agitation
- Solution presentation
- Social proof element
- Clear value proposition
- Urgency/scarcity

Call-to-Action Options:
- Primary CTA
- Soft CTA alternative
- Question-based CTA

For each variation include:
- Headline (30 chars)
- Primary text (125 chars for feed, 100 for stories)
- Visual direction notes
- Target audience suggestions
- A/B testing recommendations

Focus on stopping the scroll and driving immediate action.`,
      is_trending: true
    },
    {
      id: 6,
      title: "Customer Review Response Templates",
      description: "Professional templates for handling all types of customer reviews",
      tool: "ChatGPT",
      category: "Customer Service",
      prompt_text: `Create professional review response templates for my e-commerce business.

Business type: [PRODUCT CATEGORY]
Brand tone: [PROFESSIONAL/FRIENDLY/CASUAL]
Common issues: [LIST FREQUENT COMPLAINTS]

Create responses for:

5-Star Reviews:
- Thank you message
- Encourage sharing/referrals
- Cross-sell opportunity
- Build community

4-Star Reviews:
- Appreciate feedback
- Address minor concerns
- Invite direct contact
- Improve perception

3-Star Reviews:
- Acknowledge concerns
- Offer solutions
- Show commitment to improvement
- Invite offline conversation

2-Star Reviews:
- Apologize sincerely
- Take responsibility
- Offer concrete resolution
- Prevent escalation

1-Star Reviews:
- Professional damage control
- Address specific issues
- Offer compensation/replacement
- Show other customers you care

Include escalation procedures and when to take conversations private. Focus on turning negative experiences into positive outcomes.`,
      is_trending: false
    }
  ];

  const openInAI = (promptText: string, tool: string, promptId: string) => {
    const encodedPrompt = encodeURIComponent(promptText);
    let url = '';

    switch (tool.toLowerCase()) {
      case 'chatgpt':
        url = `https://chat.openai.com/?q=${encodedPrompt}`;
        break;
      case 'claude':
        url = `https://claude.ai/chat?q=${encodedPrompt}`;
        break;
      case 'midjourney':
      case 'midjourney/dall-e':
        // For image generation, we'll open Discord/Midjourney
        url = `https://discord.com/channels/@me`;
        // Copy to clipboard for Midjourney since it requires Discord
        navigator.clipboard.writeText(promptText);
        break;
      case 'canva':
        url = `https://www.canva.com/magic-write/`;
        navigator.clipboard.writeText(promptText);
        break;
      default:
        // Fallback: copy to clipboard and open ChatGPT
        navigator.clipboard.writeText(promptText);
        url = `https://chat.openai.com/`;
        break;
    }

    // Open in new tab
    window.open(url, '_blank');
    
    // Show feedback
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(""), 3000);
  };

  const copyPrompt = async (promptText: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(""), 2000);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  const getToolBadgeClass = (tool: string) => {
    const toolClasses: { [key: string]: string } = {
      'claude': 'claude',
      'chatgpt': 'chatgpt',
      'midjourney': 'midjourney',
      'canva': 'canva'
    };
    return toolClasses[tool.toLowerCase()] || 'default';
  };

  return (
    <div className="neon-container">
      <div className="category-header">
        <div className="category-breadcrumb">
          <Link href="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">→</span>
          <span className="breadcrumb-current">E-commerce Brands</span>
        </div>
        
        <div className="category-hero">
          <div className="category-icon-large">🛒</div>
          <h1 className="category-title-large">ChatGPT for E-commerce Brands</h1>
          <p className="category-description-large">
            AI-powered prompts to boost sales, optimize listings, and engage customers. 
            From product descriptions to email campaigns - everything you need to scale your e-commerce business.
          </p>
          <div className="category-stats">
            <span className="stat-item">💰 {prompts.length} Revenue-Boosting Prompts</span>
            <span className="stat-item">📈 Conversion Optimized</span>
            <span className="stat-item">⚡ Ready to Implement</span>
          </div>
        </div>
      </div>

      <div className="prompts-grid">
        {prompts.map((prompt) => (
          <div key={prompt.id} className="prompt-card-detailed">
            <div className="prompt-card-header">
              <div className="prompt-meta">
                <span className={`tool-badge ${getToolBadgeClass(prompt.tool)}`}>
                  {prompt.tool}
                </span>
                <span className="category-badge">{prompt.category}</span>
                {prompt.is_trending && (
                  <span className="trending-badge">🔥 Trending</span>
                )}
              </div>
            </div>
            
            <div className="prompt-card-content">
              <h3 className="prompt-title">{prompt.title}</h3>
              <p className="prompt-description">{prompt.description}</p>
              
              <div className="prompt-text-container">
                <div className="prompt-text">
                  {prompt.prompt_text}
                </div>
                <div className="prompt-actions">
                  <button 
                    className={`open-ai-btn ${copiedPrompt === prompt.id.toString() ? 'opened' : ''}`}
                    onClick={() => openInAI(prompt.prompt_text, prompt.tool, prompt.id.toString())}
                  >
                    {copiedPrompt === prompt.id.toString() ? '✓ Opened!' : `Open in ${prompt.tool}`}
                  </button>
                  <button 
                    className="copy-only-btn"
                    onClick={() => copyPrompt(prompt.prompt_text, prompt.id.toString())}
                    title="Copy to clipboard"
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="agency-cta-section">
        <div className="agency-cta">
          <h2>Ready to Scale Your E-commerce Business?</h2>
          <p>
            Love these prompts? We can build custom AI solutions for inventory management, 
            customer service automation, and personalized shopping experiences.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="agency-cta-btn primary">
              Get Custom E-commerce AI
            </Link>
            <Link href="/" className="agency-cta-btn secondary">
              Explore More Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
