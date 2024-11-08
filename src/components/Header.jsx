import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-center">
        <h1 className="text-2xl font-bold">MYPORTFOLIO</h1>
        <nav className="flex space-x-8">
          <Link to="/get-started" className="hover:text-gray-600 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-600 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-600 transition">Contact Us</Link>
        </nav>

        <div className="flex space-x-4">
          <div  className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">
            Sign Up
          </div>
          <div  className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
            Login
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
