import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = ({ title, description, skills, githubLink, thumbnail }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={thumbnail} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-gray-700 text-gray-200 rounded-full px-3 py-1 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      {isHovered && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-2xl text-white"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
