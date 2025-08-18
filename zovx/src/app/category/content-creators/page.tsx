"use client";

import "../../neon-background.css";
import Link from "next/link";
import { useState } from "react";

export default function ContentCreatorsPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string>("");

  const prompts = [
    {
      id: 1,
      title: "Viral YouTube Thumbnail Creator",
      description: "Generate click-worthy thumbnails that maximize engagement",
      tool: "Midjourney/DALL-E",
      category: "Visual Content",
      prompt_text: `Create a viral YouTube thumbnail based on this video title: "[VIDEO TITLE]"

Automatically determine the style, composition, color palette, emotion, and visual elements that best match the topic and tone of the title.

Use bold typography, cinematic lighting, and high contrast — focus on maximizing click-through rate.

Make the subject expressive and dynamic, with dramatic framing or eye contact.

Background should be minimal but relevant — include symbolic or storytelling elements that enhance the title meaning.

Output should be ultra-sharp, 16:9, HD, and visually striking even at small sizes.`,
      is_trending: true
    },
    {
      id: 2,
      title: "Hook Script Generator",
      description: "Create compelling video hooks that keep viewers watching",
      tool: "Claude",
      category: "Video Scripts",
      prompt_text: `Create 5 different hook variations for a video about: [TOPIC]

Each hook should:
- Grab attention in the first 3 seconds
- Create curiosity or urgency
- Promise value or transformation
- Match the content creator's tone: [TONE - casual/professional/energetic]

Include:
1. Question hook
2. Bold statement hook  
3. Story/scenario hook
4. Statistic/fact hook
5. Controversy/contrarian hook

Keep each hook under 15 seconds when spoken aloud.`,
      is_trending: false
    },
    {
      id: 3,
      title: "Social Media Caption Optimizer",
      description: "Transform basic captions into engagement-driving posts",
      tool: "ChatGPT",
      category: "Social Media",
      prompt_text: `Transform this basic caption into an engaging social media post: "[CAPTION]"

Platform: [Instagram/TikTok/LinkedIn/Twitter]
Target audience: [DESCRIBE AUDIENCE]
Goal: [Engagement/Sales/Awareness/Education]

Include:
- Attention-grabbing opening line
- Value-driven content
- Call-to-action
- Relevant hashtags (5-10)
- Emojis where appropriate
- Question to drive comments

Optimize for the platform's algorithm and best practices.`,
      is_trending: true
    },
    {
      id: 4,
      title: "Content Series Planner",
      description: "Plan cohesive content series that build audience loyalty",
      tool: "Claude",
      category: "Content Strategy",
      prompt_text: `Create a 10-part content series about: [TOPIC]

Series goal: [Education/Entertainment/Sales/Community building]
Content format: [Videos/Posts/Podcasts/Blogs]
Publishing schedule: [Daily/Weekly/Bi-weekly]

For each part include:
- Episode title
- Key learning objective
- Main talking points (3-5)
- Engagement strategy
- Connection to next episode

Ensure each piece stands alone but creates anticipation for the next.`,
      is_trending: false
    },
    {
      id: 5,
      title: "Trend Analysis & Content Ideas",
      description: "Analyze trends and generate timely content opportunities",
      tool: "ChatGPT",
      category: "Content Strategy",
      prompt_text: `Analyze current trends in [NICHE/INDUSTRY] and generate 10 content ideas.

Research these trending topics, hashtags, and conversations happening now.

For each content idea provide:
- Content angle/hook
- Best platform to post on
- Optimal posting time
- Expected engagement type
- How to make it unique to my brand: [BRAND DESCRIPTION]

Focus on trends with 1-2 week relevance window for maximum impact.`,
      is_trending: false
    },
    {
      id: 6,
      title: "Brand Voice Consistency Guide",
      description: "Maintain consistent brand voice across all content",
      tool: "Claude",
      category: "Brand Strategy",
      prompt_text: `Create a brand voice guide for my content based on these examples: [PASTE 3-5 EXAMPLES OF YOUR CONTENT]

Analyze and define:
- Tone (formal/casual/playful/authoritative)
- Personality traits (3-5 key characteristics)
- Language preferences (technical/simple/industry jargon)
- Values and messaging pillars
- Do's and don'ts for content creation

Provide 10 example sentences in this brand voice for different scenarios: educational, promotional, behind-the-scenes, community engagement.`,
      is_trending: false
    }
  ];

  const openInAI = (promptText: string, tool: string, promptId: string) => {
    try {
      let url = '';
      
      // Always copy to clipboard first
      navigator.clipboard.writeText(promptText);

      switch (tool.toLowerCase()) {
        case 'chatgpt':
          // Open ChatGPT and show instructions to paste
          url = `https://chat.openai.com/`;
          // Store prompt in sessionStorage for potential auto-fill
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('zovx_prompt', promptText);
          }
          break;
        case 'claude':
          // Open Claude with the prompt copied
          url = `https://claude.ai/`;
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('zovx_prompt', promptText);
          }
          break;
        case 'midjourney':
        case 'midjourney/dall-e':
        case 'dalle':
          // For image generation, open Discord
          url = `https://discord.com/channels/@me`;
          break;
        case 'canva':
          // Open Canva's AI writing tool
          url = `https://www.canva.com/magic-write/`;
          break;
        case 'runway':
          // Open Runway ML
          url = `https://runwayml.com/`;
          break;
        default:
          // Fallback: open ChatGPT
          url = `https://chat.openai.com/`;
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('zovx_prompt', promptText);
          }
          break;
      }

      // Open in new tab with additional instructions
      if (url) {
        window.open(url, '_blank');
        
        // For ChatGPT and Claude, try to focus and give user feedback
        if (tool.toLowerCase() === 'chatgpt' || tool.toLowerCase() === 'claude') {
          // Show a brief notification
          setTimeout(() => {
            alert(`✅ ${tool} opened! The prompt has been copied to your clipboard. Simply paste it (Ctrl+V/Cmd+V) in the chat box to get started.`);
          }, 1000);
        }
      }
      
      // Show success feedback
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(""), 3000);
      
    } catch (error) {
      console.error('Error opening AI platform:', error);
      // Fallback to copy functionality
      copyPrompt(promptText, promptId);
    }
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
      'midjourney/dall-e': 'midjourney',
      'dall-e': 'dalle'
    };
    return toolClasses[tool.toLowerCase()] || 'default';
  };

  return (
    <div className="neon-container">
      <div className="category-header">
        <div className="category-breadcrumb">
          <Link href="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">→</span>
          <span className="breadcrumb-current">Content Creators</span>
        </div>
        
        <div className="category-hero">
          <div className="category-icon-large">✨</div>
          <h1 className="category-title-large">Claude for Content Creators</h1>
          <p className="category-description-large">
            AI-powered prompts to create content that converts and captivates your audience. 
            From viral thumbnails to engaging scripts - everything you need to grow your creator business.
          </p>
          <div className="category-stats">
            <span className="stat-item">📊 {prompts.length} Expert Prompts</span>
            <span className="stat-item">🚀 Trending Strategies</span>
            <span className="stat-item">⚡ Ready to Use</span>
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
                    title={`Opens ${prompt.tool} in a new tab and copies the prompt to your clipboard`}
                  >
                    {copiedPrompt === prompt.id.toString() ? '✓ Opened & Copied!' : `🚀 Open ${prompt.tool}`}
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
          <h2>Need Custom Content Solutions?</h2>
          <p>
            Love these prompts? We can build custom AI content systems, automated workflows, 
            and personalized tools for your creator business.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="agency-cta-btn primary">
              Get Custom AI Tools
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
