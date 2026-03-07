import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../data/projects';

interface CategorySectionProps {
    id: string;
    title: string;
    subtitle: string;
    projects: Project[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ id, title, subtitle, projects }) => {
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
        <div className={`category-section ${id}`} id={`${id}-section`}>
            <div className="category-header">
                <h2 className="category-title">{title}</h2>
                <p className="category-subtitle">{subtitle}</p>
                
                <div className="category-info">
                    <div className="category-line"></div>
                    <span className="project-count">{projects.length} Projects</span>
                </div>
            </div>

            <div className="projects-grid" id={`${id}-grid`}>
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {projects.length > 6 && (
                <div className="see-more-wrapper">
                    <button 
                        className="see-more-btn" 
                        onClick={() => setShowAll(!showAll)}
                    >
                        <span>{showAll ? 'Show Less' : `See All ${projects.length}`}</span>
                    </button>
                </div>
            )}
        </div>
    );
};
