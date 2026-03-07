import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
    categoryId: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, categoryId }) => {
    return (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className={`project-card ${categoryId}-card`}>
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <svg className="external-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
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
