// components/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full p-4 bg-black text-white text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <div>
        <p>© 2024 Keerthana Kuppi Srinivasan</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
