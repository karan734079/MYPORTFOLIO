import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from '../components/ShimmerGetStarted';
import profileImg from '../images/myimg.jpg';

const GetStarted = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 py-3 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:py-16 overflow-auto">
      {/* Header Section */}
      <div className="text-center mb-6 max-w-4xl cursor-pointer animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-4 sm:space-y-0 ml-12">
          <div>
            <img
              src={profileImg}
              alt="myphotograph"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-transparent transition-transform duration-300 hover:scale-110 hover:border-teal-500 shadow-lg"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl text-center font-extrabold mb-1 tracking-tight transition-all duration-300 hover:text-slate-800">
              Karan Kumar
            </h1>
            <p className="text-md sm:text-lg font-semibold mb-1 text-center">Frontend Developer | MCA Graduate</p>
            <p className="text-sm sm:text-base opacity-80 text-center">+91-7340795241 | Punjab, India</p>
            <p className="text-sm sm:text-base mb-4 opacity-80 text-center">
              karanjangral60@gmail.com |{' '}
              <Link to="https://www.linkedin.com/in/karan2001/" className="text-black">
                LinkedIn
              </Link>{' '}
              |{' '}
              <Link to="https://github.com/karan734079" className="text-black">
                GitHub
              </Link>
            </p>
          </div>
        </div>
        <div className="text-xl sm:text-2xl font-extrabold mb-1 tracking-tight transition-all duration-300 hover:text-slate-800">
          <Link to={'/my-projects'}>see my projects</Link>
        </div>
      </div>

      {/* Objective Card (Not affected by responsive layout) */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white max-w-6xl rounded-2xl shadow-2xl p-6 sm:p-8 col-span-2 transform hover:scale-105 transition-all duration-300 mb-6 sm:mb-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Objective</h2>
        <p className="text-sm sm:text-base">
          Recent MCA graduate with proficiency in HTML, CSS, JavaScript, React.js, and Tailwind CSS,
          seeking to start a career as a Frontend Developer to create intuitive web applications and deliver exceptional user experiences.
        </p>
      </div>

      {/* Cards Section (These will stack on small screens and remain in grid layout on larger screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mb-1 animate-fade-in-up">
        {/* Education Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Education</h2>
          <div className="space-y-3 text-sm sm:text-base">
            <div>
              <h3 className="font-semibold">Guru Nanak Dev University, Amritsar</h3>
              <p>Master of Computer Applications | CGPA: 8.09 | 2021-2024</p>
            </div>
            <div>
              <h3 className="font-semibold">Baring Union Christian College, Batala</h3>
              <p>BSc. Computer Science | 67% | 2018-2021</p>
            </div>
          </div>
        </div>

        {/* Skills Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Skills</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li><strong>Programming Languages:</strong> JavaScript, C++</li>
            <li><strong>Technologies:</strong> ReactJS, HTML, CSS, TailwindCSS, Redux</li>
            <li><strong>Extra Skills:</strong> Canva</li>
          </ul>
        </div>

        {/* Certifications Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Certifications</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>Namaste React : ReactJs Intermediate Course</li>
            <li>Google Cloud : Generative AI Fundamentals</li>
            <li>JPMorgan Chase & Co. : Virtual Software Engineering Internship</li>
          </ul>
        </div>

        {/* Achievements Card */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Achievements</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>First Place in Net Savvy event</li>
            <li>Active participant in College Chess Club</li>
            <li>Regular volunteer and community service activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
