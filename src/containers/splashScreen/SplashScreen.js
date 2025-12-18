import React, { useState, useEffect } from "react";
import "./SplashScreen.css";
import { greeting } from "../../portfolio";

const loadingCommands = [
  "$ initializing portfolio...",
  "> Loading components...",
  "> Connecting to servers...",
  "> Preparing workspace...",
  `> Welcome to ${greeting.username}'s portfolio`,
  "> ✓ All systems ready!"
];

export default function SplashScreen() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (currentLineIndex >= loadingCommands.length) {
      return;
    }

    const currentLine = loadingCommands[currentLineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 35); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next line after a pause
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentText("");
        setCharIndex(0);
        setCurrentLineIndex((prev) => prev + 1);
      }, 250);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, charIndex, currentText]);

  return (
    <div className="splash-container">
      {/* Background effects */}
      <div className="splash-bg-grid"></div>
      <div className="splash-bg-glow"></div>
      
      <div className="splash-content">
        {/* Logo */}
        <div className="splash-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        {/* Terminal Window */}
        <div className="splash-terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn red"></span>
              <span className="terminal-btn yellow"></span>
              <span className="terminal-btn green"></span>
            </div>
            <span className="terminal-title">nirmit@portfolio:~</span>
          </div>
          <div className="terminal-body">
            {displayedLines.map((line, index) => (
              <div 
                key={index} 
                className={`terminal-line ${line.includes('✓') ? 'success' : ''} ${line.startsWith('$') ? 'command' : ''}`}
              >
                {line}
              </div>
            ))}
            {currentText && (
              <div className={`terminal-line terminal-line--current ${currentText.startsWith('$') ? 'command' : ''}`}>
                {currentText}
                <span className="terminal-cursor">▊</span>
              </div>
            )}
          </div>
        </div>

        {/* Loading bar */}
        <div className="splash-progress">
          <div 
            className="splash-progress-bar"
            style={{ 
              width: `${(currentLineIndex / loadingCommands.length) * 100}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
