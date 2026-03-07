import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../data/projects';

interface CategorySectionProps {
    id: string;
    title: string;
    subtitle: string;
    gradientClass: string;
    icon: React.ReactNode;
    projects: Project[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ id, title, subtitle, gradientClass, icon, projects }) => {
    const [showAll, setShowAll] = useState(false);
    const [shuffledProjects, setShuffledProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Fisher-Yates shuffle
        const shuffled = [...projects];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledProjects(shuffled);
    }, [projects]);

    const displayedProjects = showAll ? projects : shuffledProjects.slice(0, 6);

    return (
        <div className="category-section" id={`${id}-section`}>
            <div className="category-header">
                <div className="category-title-wrapper">
                    <div className={`category-icon ${gradientClass}`}>
                        {icon}
                    </div>
                    <div>
                        <h2 className={`category-title ${gradientClass}`}>{title}</h2>
                        <p className="category-subtitle">{subtitle}</p>
                    </div>
                </div>
                <div className="category-info">
                    <div className={`category-line ${gradientClass}`}></div>
                    <span className="project-count">{projects.length} Projects</span>
                </div>
            </div>

            <div className="projects-grid" id={`${id}-grid`}>
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} categoryId={id} />
                ))}
            </div>

            {projects.length > 6 && (
                <div className="see-more-wrapper">
                    <button 
                        className={`see-more-btn ${gradientClass}`} 
                        onClick={() => setShowAll(!showAll)}
                    >
                        <span>{showAll ? 'Show Less' : `See All ${projects.length} Projects`}</span>
                        <svg className={`chevron-rotate ${showAll ? 'rotated' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};
