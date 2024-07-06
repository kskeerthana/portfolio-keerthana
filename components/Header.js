import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-center items-center p-4 text-white" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>
      <div className="flex items-center space-x-52">
        <Link href="/" legacyBehavior>
          <a>
            <img src="/images/profileImg.jpeg" alt="Profile" className="w-10 h-10 rounded-full" />
          </a>
        </Link>
        <nav className="flex space-x-4 p-4 rounded-full" style={{ backgroundColor: '#1A1A1A' }}>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gray-300">About</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="hover:text-gray-300">Projects</a>
          </Link>
          <Link href="/skills" legacyBehavior>
            <a className="hover:text-gray-300">Skills</a>
          </Link>
          <a href="https://drive.google.com/file/d/1zfuwf0uYheRZBkw2GV3G__REkrJS3aLz/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Resume
          </a>
        </nav>
        <a href="mailto:kuppisrinivasan.k@northeastern.edu">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
            Contact
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
