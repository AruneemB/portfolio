import React from 'react';

export const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-gradient-1"></div>
            <div className="hero-gradient-2"></div>

            <div className="hero-content">
                <div className="badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Portfolio & Projects</span>
                </div>

                <h1>
                    Aruneem Bhowmick<br />
                    <span className="hero-tagline">Think. Prove. Apply.</span>
                </h1>

                <p className="hero-subtitle">
                    Exploring machine learning, quantitative research, software engineering, and philosophical inquiry through hands-on projects and written work.
                </p>

                <a href="#projects" className="cta-button">
                    Explore Projects
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};
