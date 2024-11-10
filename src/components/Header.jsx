import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgg from '../images/computer-icons-hamburger-button-icon-design-png-favpng-a1QmQkv7vmmaHpm8F1CiaBSmY-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between sm:justify-between text-center sm:text-left">
        {/* Brand */}
        <h1 className="text-2xl font-bold flex-grow sm:flex-grow-0">
          <Link to={'/'}>MYPORTFOLIO</Link>
        </h1>

        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center space-x-2">
          <button onClick={toggleMenu} className="text-2xl">
            {/* Hamburger Icon */}
            <img
              src={imgg}
              alt="Menu"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Sidebar - Fullscreen overlay on small screens */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } fixed inset-0 bg-gray-800 bg-opacity-50 sm:hidden z-50 transition-all duration-300`}
          onClick={toggleMenu}
        ></div>

        {/* Sidebar */}
        <div
          className={`${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 sm:hidden z-50`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl">
              {/* Close Button */}
              <img
                src={imgg}
                alt="Close"
                className="w-8 h-8"
              />
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6 p-6">
            <Link to="/" className="text-xl text-gray-800 hover:text-teal-500 transition">
              Home
            </Link>
            <Link to="/my-projects" className='text-xl text-gray-800 hover:text-teal-500 transition' >
              My Projects
            </Link>
            <Link to="/about" className="text-xl text-gray-800 hover:text-teal-500 transition">
              About
            </Link>
            <Link to="/contact" className="text-xl text-gray-800 hover:text-teal-500 transition">
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons in Sidebar */}
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">
              Sign Up
            </div>
            <div className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
              Login
            </div>
          </div>
        </div>

        {/* Regular Navigation for larger screens */}
        <nav className=" space-x-8 mt-4 sm:mt-0 hidden sm:block">
          <Link to="/" className="hover:text-gray-600 transition">
            Home
          </Link>
          <Link to="/my-projects" className="hover:text-gray-600 transition">
            My Projects
          </Link>
          <Link to="/about" className="hover:text-gray-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-600 transition">
            Contact Us
          </Link>
        </nav>

        {/* Action Buttons for larger screens */}
        <div className="space-x-4 mt-4 sm:mt-0 hidden sm:flex justify-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">
            Sign Up
          </div>
          <div className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
            Login
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
