import React, { useContext, useState, useEffect } from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }

  // Split name for highlight effect
  const title = greeting.title;
  const nameMatch = title.match(/I'm\s+(\w+)/);
  const name = nameMatch ? nameMatch[1] : "";

  return (
    <div className={`hero-section ${isDark ? 'dark-mode' : ''} ${isVisible ? 'visible' : ''}`} id="greeting">
      {/* Background with particles */}
      <div className="hero-video-container">
        <div className="video-overlay-gradient"></div>
        <div className="video-overlay-noise"></div>
        <div className="video-overlay-vignette"></div>
      </div>

      {/* Floating particles background */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              '--delay': `${Math.random() * 8}s`,
              '--duration': `${12 + Math.random() * 15}s`,
              '--x-start': `${Math.random() * 100}%`,
              '--x-end': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="hero-content">
        {/* Tagline */}
        <div className="hero-tagline">
          <span className="tagline-line"></span>
          <span className="tagline-text">Welcome to my portfolio</span>
          <span className="tagline-line"></span>
        </div>

        {/* Title with highlighted name */}
        <h1 className="hero-title">
          <span className="title-line">
            {title.split(name)[0]}
            <span className="char highlight">{name}</span>
          </span>
          <span className="wave-hand">👋</span>
        </h1>

        {/* Subtitle */}
        <div className="hero-subtitle-container">
          <p className="hero-subtitle">
            {greeting.subTitle}
          </p>
        </div>

        {/* Social Media */}
        <div className="hero-social">
          <SocialMedia />
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <Button text="Contact me" href="#contact" />
          {greeting.resumeLink && (
            <a
              href={require("./resume.pdf")}
              download="Resume.pdf"
              className="download-link-button"
            >
              <Button text="Download Resume" />
            </a>
          )}
        </div>

        {/* Stats showcase */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrows">
          <span className="arrow"></span>
          <span className="arrow"></span>
          <span className="arrow"></span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  );
}
