import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer>
            <p className="footer-text">Last Updated March 2026 • Built with React, TypeScript & Vite</p>
            <div className="footer-links">
                <a href="https://www.kaggle.com/aruneembhowmick" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
                    </svg>
                </a>
                <a href="https://medium.com/@aruneembhowmick" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M13.667 12.247c0 3.523-2.84 6.38-6.342 6.38-3.5 0-6.342-2.857-6.342-6.38 0-3.525 2.842-6.382 6.342-6.382 3.502 0 6.342 2.857 6.342 6.382zm5.796 0c0 3.275-1.465 5.93-3.272 5.93-1.807 0-3.272-2.655-3.272-5.93 0-3.276 1.465-5.93 3.272-5.93 1.807 0 3.272 2.654 3.272 5.93zm2.91 0c0 3.008-.543 5.447-1.213 5.447-.67 0-1.213-2.439-1.213-5.447 0-3.009.543-5.447 1.213-5.447.67 0 1.213 2.438 1.213 5.447z"/>
                    </svg>
                </a>
                <a href="https://github.com/AruneemB" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://substack.com/@aruneembhowmick" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M40.025 10.082V5.5H7.747v4.582zm0 8.268v-4.58H7.747v4.581zm.231 24.149V22.318c0-.164-.973-.108-1.887-.108H9.402c-.914 0-1.655-.055-1.655.108v19.888c.281-.163 15.341-8.212 16.169-8.598c.516.297 13.646 7.338 16.34 8.891"/>
                    </svg>
                </a>
                <a href="https://linktr.ee/AruneemBhowmick" target="_blank" rel="noopener noreferrer">
                    <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M6.5 4.5l11 11m-11 0l11-11M12 10V2m0 13v7"/>
                    </svg>
                </a>
            </div>
        </footer>
    );
};
