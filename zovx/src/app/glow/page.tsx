"use client";

import Script from "next/script";
import styles from "./glow.module.css";
import { promptsAPI, Prompt } from "@/lib/api";
import { useEffect, useState } from "react";

export default function GlowPage() {
  const [contentPrompts, setContentPrompts] = useState<Prompt[]>([]);
  const [researchPrompts, setResearchPrompts] = useState<Prompt[]>([]);
  const [businessPrompts, setBusinessPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryPrompts = async () => {
      setLoading(true);
      try {
        // Fetch prompts for each category
        const [content, research, business] = await Promise.all([
          promptsAPI.getByCategory('content'),
          promptsAPI.getByCategory('research'),
          promptsAPI.getByCategory('business')
        ]);
        
        setContentPrompts(content);
        setResearchPrompts(research);
        setBusinessPrompts(business);
      } catch (error) {
        console.error('Error fetching category prompts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryPrompts();
  }, []);
  return (
    <div className={styles.glowRoot}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <i className="fab fa-instagram"></i>
              <h3>Content Creation</h3>
              <span className={styles.promptCount}>
                {loading ? "Loading..." : `${contentPrompts.length} prompts`}
              </span>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              {loading ? (
                <p>Loading content prompts...</p>
              ) : contentPrompts.length > 0 ? (
                <div className={styles.promptsList}>
                  {contentPrompts.slice(0, 4).map((prompt) => (
                    <div key={prompt.id} className={styles.promptItem}>
                      <strong>{prompt.title}</strong>
                      <small>{prompt.tool.toUpperCase()}</small>
                    </div>
                  ))}
                  {contentPrompts.length > 4 && (
                    <div className={styles.morePrompts}>
                      +{contentPrompts.length - 4} more prompts
                    </div>
                  )}
                </div>
              ) : (
                <p>No content prompts available. Create some prompts with category &quot;content&quot;.</p>
              )}
              <a href="/adapters/content" role="button">Explore All Content</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <i className="fas fa-brain"></i>
              <h3>AI Research</h3>
              <span className={styles.promptCount}>
                {loading ? "Loading..." : `${researchPrompts.length} prompts`}
              </span>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              {loading ? (
                <p>Loading research prompts...</p>
              ) : researchPrompts.length > 0 ? (
                <div className={styles.promptsList}>
                  {researchPrompts.slice(0, 4).map((prompt) => (
                    <div key={prompt.id} className={styles.promptItem}>
                      <strong>{prompt.title}</strong>
                      <small>{prompt.tool.toUpperCase()}</small>
                    </div>
                  ))}
                  {researchPrompts.length > 4 && (
                    <div className={styles.morePrompts}>
                      +{researchPrompts.length - 4} more prompts
                    </div>
                  )}
                </div>
              ) : (
                <p>No research prompts available. Create some prompts with category &quot;research&quot;.</p>
              )}
              <a href="/adapters/research" role="button">Start Research</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <i className="fas fa-chart-line"></i>
              <h3>Business Tools</h3>
              <span className={styles.promptCount}>
                {loading ? "Loading..." : `${businessPrompts.length} prompts`}
              </span>
            </div>
          </div>
          <div className={`${styles.face} ${styles.face2}`}>
            <div className={styles.content}>
              {loading ? (
                <p>Loading business prompts...</p>
              ) : businessPrompts.length > 0 ? (
                <div className={styles.promptsList}>
                  {businessPrompts.slice(0, 4).map((prompt) => (
                    <div key={prompt.id} className={styles.promptItem}>
                      <strong>{prompt.title}</strong>
                      <small>{prompt.tool.toUpperCase()}</small>
                    </div>
                  ))}
                  {businessPrompts.length > 4 && (
                    <div className={styles.morePrompts}>
                      +{businessPrompts.length - 4} more prompts
                    </div>
                  )}
                </div>
              ) : (
                <p>No business prompts available. Create some prompts with category &quot;business&quot;.</p>
              )}
              <a href="/adapters/business" role="button">View Tools</a>
            </div>
          </div>
        </div>
      </div>

      <Script src="https://kit.fontawesome.com/95a02bd20d.js" strategy="afterInteractive" />
    </div>
  );
}


