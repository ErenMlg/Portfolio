import Image from 'next/image';
import { getImagePath } from '../../utils/imageUtils';

export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  featured?: boolean;
}

const DEFAULT_IMAGE = getImagePath('/projects/default.png');

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card group">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-overlay"
          aria-label={project.title}
        />
      )}
      <div className="project-image-container">
        <Image
          src={project.image ? getImagePath(project.image) : DEFAULT_IMAGE}
          alt={project.title}
          fill
          className="project-image object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
      </div>
      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">
          {project.title}
          {project.link && (
            <svg className="project-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
            </svg>
          )}
        </h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
