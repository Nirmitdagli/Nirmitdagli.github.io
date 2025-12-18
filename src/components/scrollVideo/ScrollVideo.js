import React, { useRef, useEffect, useState, useCallback } from "react";
import "./ScrollVideo.css";

const ScrollVideo = ({ 
    videoSrc, 
    onProgressChange,
    className = ""
}) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const rafRef = useRef(null);

    const updateVideoTime = useCallback(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        
        if (!video || !container || !video.duration) return;

        const heroSection = document.getElementById("greeting");
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const heroHeight = rect.height;
        
        // Calculate scroll progress
        // Video plays from when hero starts to when hero leaves viewport
        const scrollStart = -windowHeight;
        const scrollEnd = heroHeight;
        const currentScroll = rect.top;
        
        let scrollProgress = (scrollStart - currentScroll) / (scrollEnd - scrollStart + windowHeight);
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));

        // Smooth interpolation for frame-by-frame playback
        const targetTime = video.duration * scrollProgress;
        
        // Use smoother interpolation to avoid jerkiness
        const smoothingFactor = 0.15;
        const currentTime = video.currentTime;
        const newTime = currentTime + (targetTime - currentTime) * smoothingFactor;
        
        // Only update if change is significant
        if (Math.abs(newTime - currentTime) > 0.001) {
            video.currentTime = Math.max(0, Math.min(video.duration, newTime));
        }

        // Update progress state
        setProgress(scrollProgress);
        if (onProgressChange) {
            onProgressChange(scrollProgress);
        }
    }, [onProgressChange]);

    const onScroll = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }
        rafRef.current = requestAnimationFrame(updateVideoTime);
    }, [updateVideoTime]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            setIsLoaded(true);
            video.currentTime = 0;
            updateVideoTime();
        };

        const handleCanPlayThrough = () => {
            setIsLoaded(true);
        };

        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("canplaythrough", handleCanPlayThrough);

        // If video is already loaded
        if (video.readyState >= 2) {
            handleLoadedMetadata();
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });

        // Initial update
        updateVideoTime();

        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            video.removeEventListener("canplaythrough", handleCanPlayThrough);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [onScroll, updateVideoTime]);

    return (
        <div className={`scroll-video-wrapper ${className}`} ref={containerRef}>
            <video
                ref={videoRef}
                src={videoSrc || "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-11336-large.mp4"}
                muted
                playsInline
                preload="auto"
                className={`scroll-video ${isLoaded ? 'loaded' : ''}`}
            />
            
            {/* Loading State */}
            {!isLoaded && (
                <div className="video-loading-container">
                    <div className="video-loading-spinner">
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                    </div>
                    <p className="loading-text">Loading Experience...</p>
                </div>
            )}

            {/* Progress Indicator */}
            <div className="scroll-progress-track">
                <div 
                    className="scroll-progress-fill" 
                    style={{ height: `${progress * 100}%` }}
                />
                <div 
                    className="scroll-progress-dot"
                    style={{ top: `${progress * 100}%` }}
                />
            </div>
        </div>
    );
};

export default ScrollVideo;
