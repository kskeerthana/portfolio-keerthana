// pages/projects.js
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects.json';

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 mt-20"> {/* Added margin-top here */}
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
