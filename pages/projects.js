import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects.json';

const ProjectsPage = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowProjects(true);
    }, 100);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-8 mt-16">
        <h1 className="text-4xl font-bold text-center mb-12"></h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-opacity duration-500 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              githubLink={project.githubLink}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
