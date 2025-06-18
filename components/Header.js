import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 text-white w-full fixed top-0 left-0 z-50" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
      <Link href="/" legacyBehavior>
        <a>
          <img src="/images/profileImg.jpeg" alt="Profile" className="w-10 h-10 rounded-full" />
        </a>
      </Link>
      <nav className="hidden md:flex space-x-4 p-4 rounded-full" style={{ backgroundColor: '#1A1A1A' }}>
        <Link href="/about" legacyBehavior>
          <a className="hover:text-gray-300">About</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className="hover:text-gray-300">Projects</a>
        </Link>
        <Link href="/skills" legacyBehavior>
          <a className="hover:text-gray-300">Skills</a>
        </Link>
        <a href="https://drive.google.com/file/d/1SD7agCNEg73v1tIMHFNyy2Kt0nJDs5EX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          Resume
        </a>
      </nav>
      <a href="mailto:kuppisrinivasan.k@northeastern.edu" className="hidden md:block">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
          Contact
        </button>
      </a>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col items-center space-y-4 md:hidden z-40">
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gray-300" onClick={toggleMenu}>About</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="hover:text-gray-300" onClick={toggleMenu}>Projects</a>
          </Link>
          <Link href="/skills" legacyBehavior>
            <a className="hover:text-gray-300" onClick={toggleMenu}>Skills</a>
          </Link>
          <a href="https://drive.google.com/file/d/1zfuwf0uYheRZBkw2GV3G__REkrJS3aLz/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" onClick={toggleMenu}>
            Resume
          </a>
          <a href="mailto:kuppisrinivasan.k@northeastern.edu">
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              Contact
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
