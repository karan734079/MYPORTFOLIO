const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 p-6 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-sm mb-4 sm:mb-0">© 2024 MYPORTFOLIO. All rights reserved.</p>
  
        {/* Navigation Links */}
        <nav className="flex space-x-4 mb-4 sm:mb-0">
          <p className="hover:text-gray-600 transition cursor-pointer">Privacy Policy</p>
          <p className="hover:text-gray-600 transition cursor-pointer">Terms of Service</p>
          <a href="/contact" className="hover:text-gray-600 transition cursor-pointer">Contact Us</a>
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
