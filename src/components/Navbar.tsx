import React, { useState, useEffect } from 'react';

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
                <a href="#" className="nav-logo">A. Bhowmick</a>
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
