import React, { useContext, useState, useEffect, useRef } from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
    const { isDark } = useContext(StyleContext);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Trigger entrance animation after mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate normalized position (-1 to 1)
        const x = (clientX - innerWidth / 2) / (innerWidth / 2);
        const y = (clientY - innerHeight / 2) / (innerHeight / 2);

        containerRef.current.style.setProperty('--mouse-x', x);
        containerRef.current.style.setProperty('--mouse-y', y);
    };

    if (!greeting.displayGreeting) {
        return null;
    }

    return (
        <div
            className={`hero-section ${isDark ? 'dark-mode' : ''} ${isVisible ? 'visible' : ''}`}
            id="greeting"
            ref={containerRef}
            onMouseMove={handleMouseMove}
        >
            {/* Background Grid / Matrix Effect */}
            <div className="hero-background-grid"></div>

            {/* Main Terminal Window which tilts */}
            <div className="hero-content">
                <h1 className="hero-title glitch-text" data-text={greeting.title}>
                    {greeting.title}
                    <span className="cursor-blink">_</span>
                </h1>

                <p className="hero-subtitle">
                    {">"} {greeting.subTitle}
                </p>

                <div className="hero-social">
                    <SocialMedia />
                </div>

                <div className="hero-cta">
                    <Button text="< Contact Me />" href="#contact" />
                    {greeting.resumeLink && (
                        <Button
                            text="[ Download Resume ]"
                            newTab={true}
                            href={greeting.resumeLink}
                            download="Resume.pdf"
                            className="download-link-button"
                        />
                    )}
                </div>
            </div>

            {/* Decorative HUD Elements */}
            <div className="hud-corner top-left">SYS.READY</div>
            <div className="hud-corner bottom-right">V.2.0.24</div>


        </div>
    );
}
