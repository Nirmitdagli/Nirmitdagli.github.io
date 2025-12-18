import React, { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

/**
 * ScrollReveal Component
 * Animates children when they scroll into view
 * 
 * @param {string} animation - Animation type: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'
 * @param {number} delay - Delay in ms before animation starts
 * @param {number} duration - Animation duration in ms
 * @param {number} threshold - How much of element should be visible (0-1)
 * @param {boolean} once - Only animate once (default: true)
 */
const ScrollReveal = ({ 
  children, 
  animation = "fade-up", 
  delay = 0, 
  duration = 600,
  threshold = 0.1,
  once = true,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && currentRef) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

/**
 * ScrollRevealGroup Component
 * Wraps multiple items and staggers their animations
 */
export const ScrollRevealGroup = ({ 
  children, 
  animation = "fade-up",
  staggerDelay = 100,
  duration = 600,
  threshold = 0.1
}) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          threshold={threshold}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
};

export default ScrollReveal;

