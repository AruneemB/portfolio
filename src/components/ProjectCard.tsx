import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5">
                    <path d="M7 17L17 7m0 0H8m9 0v9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
                {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </a>
    );
};
