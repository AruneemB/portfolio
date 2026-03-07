import React, { useState, useEffect } from 'react';
import { GitHubEmbed } from './GitHubEmbed';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="nav-logo">
                    <GitHubEmbed />
                </div>
                <div className="nav-links">
                    <a href="#ml-section" className="nav-ml">ML</a>
                    <a href="#quant-section" className="nav-quant">Quant</a>
                    <a href="#swe-section" className="nav-swe">SWE</a>
                    <a href="#phil-section" className="nav-phil">Philosophy</a>
                </div>
            </div>
        </nav>
    );
};
