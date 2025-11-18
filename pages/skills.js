import { FaPython, FaJs, FaSwift, FaJava, FaReact, FaNodeJs, FaDocker, FaGit, FaAws, FaAngular, FaGithub, FaGitlab, FaJenkins, FaDatabase, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiNextdotjs, SiExpress, SiGooglecloud, SiBootstrap, SiMongodb, SiPostgresql, SiFirebase, SiCouchbase, SiNestjs } from 'react-icons/si';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const skillsData = [
  {
    category: "Programming Languages & Frameworks",
    skills: [
      { name: "Python", icon: <FaPython color="#306998" /> },
      { name: "Django", icon: <FaCode color="#092E20" /> },
      { name: "NodeJS", icon: <FaNodeJs color="#339933" /> },
      { name: "NestJS", icon: <SiNestjs color="#ec0c0cff" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Swift", icon: <FaSwift color="#FA7343" /> },
      { name: "Next.js", icon: <SiNextdotjs color="white" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "Solidity", icon: <SiSolidity color="#363636" /> },
      { name: "React Native", icon: <FaReact color="#61DAFB" /> },
      { name: "Redux", icon: <FaCode color="#764ABC" /> },
    ],
  },
  {
    category: "Tools & Databases",
    skills: [
      { name: "Git", icon: <FaGit color="#F05032" /> },
      { name: "Redis", icon: <FaDatabase color="#DC382D" /> },
      { name: "Google Dialog Flow", icon: <FaCode color="#FF9800" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
      { name: "Jira", icon: <FaCode color="#0052CC" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL", icon: <SiMongodb color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      {name: "CouchbaseDB", icon: <SiCouchbase color="red" />},
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    ],
  },
];

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSkills(true);
    }, 100);
  }, []);

  return (
  <div className="flex flex-col min-h-screen bg-black">
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="flex-grow">
      <div className="container mx-auto p-8 mt-16">
        {skillsData.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-lg font-bold mb-4 text-center text-gray-200">
              {section.category}
            </h2>

            <div
              className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center transform transition-opacity duration-700 ${
                showSkills ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {section.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className="text-4xl mb-2 transition-transform duration-300 hover:scale-110"
                    style={{ color: skill.icon.props.color }}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-center text-sm text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>

    {/* Footer */}
    <Footer />
  </div>
);
};

export default Skills;
