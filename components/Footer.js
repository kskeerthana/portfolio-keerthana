import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full p-4 bg-black text-white text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <div className="mb-4 md:mb-0">
        <p>© 2024 Keerthana Kuppi Srinivasan</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/kskeerthana" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://x.com/Keerthana16050" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="www.linkedin.com/in/keerthanaksrinivasan" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
