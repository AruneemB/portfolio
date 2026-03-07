import React from 'react';

export const GitHubEmbed: React.FC = () => {
    return (
        <a 
            href="https://github.com/AruneemB" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-embed"
        >
            <img 
                src="https://github.com/AruneemB.png" 
                alt="Aruneem Bhowmick" 
                className="profile-pic"
            />
            <div className="info">
                <span className="name">Aruneem Bhowmick</span>
                <span className="blurb">Think. Prove. Apply.</span>
            </div>
        </a>
    );
};
