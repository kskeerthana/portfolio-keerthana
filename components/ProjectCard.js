import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ title, description, skills, githubLink, thumbnail }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 sm:hover:scale-105 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
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
          className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-4xl text-white"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
