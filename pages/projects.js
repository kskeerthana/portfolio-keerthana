// pages/projects.js
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects.json';

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Projects</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
