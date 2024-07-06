// components/Hero.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faEnvelope, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 mt-8">
      <p className="text-6xl font-bold mb-4 fade-in-up" style={{ animationDelay: '0s' }}>👋 Hi I'm Keerthana</p>
      <h1 className="text-6xl font-bold mb-4 fade-in-up" style={{ animationDelay: '0.2s' }}>Full Stack Developer</h1>
      <p className="text-lg mb-8  fade-in-up" style={{ animationDelay: '0.4s' }}>Crafting Innovative Solutions, One Line of Code at a Time.</p>
      <button className="button-style">
      <span className="dot"></span>
        Available for work
      </button>
      
    </section>
  );
};

export default Hero;
