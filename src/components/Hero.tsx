import React from 'react';

export const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-gradient-1"></div>
            <div className="hero-gradient-2"></div>

            <div className="hero-content">
                <div className="badge">
                    <svg className="sparkle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm3 2l3 3-3 3m5 2h4"></path>
                    </svg>
                    <span>Portfolio & Projects</span>
                </div>

                <h1>
                    Aruneem Bhowmick<br />
                    <span className="hero-gradient-text">Think. Prove. Apply.</span>
                </h1>

                <p className="hero-subtitle">
                    Exploring machine learning, quantitative research, software engineering, and philosophical inquiry through hands-on projects and written work.
                </p>

                <a href="#projects" className="cta-button">
                    Explore Projects
                    <svg className="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};
