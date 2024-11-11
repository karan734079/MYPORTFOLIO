import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 p-6 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-sm mb-4 sm:mb-0">© 2024 MYPORTFOLIO. All rights reserved.</p>
  
        {/* Navigation Links */}
        <nav className="flex space-x-4 mb-4 sm:mb-0">
          <Link to='/privacy-policy' className="hover:text-gray-600 transition cursor-pointer">Privacy Policy</Link >
          <Link to='/terms-of-services' className="hover:text-gray-600 transition cursor-pointer">Terms of Service</Link >
          <Link to="/contact" className="hover:text-gray-600 transition cursor-pointer">Contact Us</Link>
        </nav>
  
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">
            Subscribe
          </button>
          <button className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
            Feedback
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
