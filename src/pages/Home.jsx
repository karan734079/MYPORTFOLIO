import { Link } from 'react-router-dom';
import Shimmer from '../components/Shimmer';
import { useEffect, useState } from 'react';

const Home = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          title: 'TO DO List',
          description: 'Simple and intuitive Todo List app built with React for managing tasks efficiently.',
          path: '/todolist',
        },
        {
          title: 'Calculator',
          description: 'Interactive Calculator built with React for performing basic arithmetic operations seamlessly.',
          path: '/calculator',
        },
        {
          title: 'Counter in Redux',
          description: 'Simple Counter app built with React using Redux for incrementing and decrementing values effortlessly.',
          path: '/counterRedux',
        },
        {
          title: 'Calculator in Redux',
          description: 'Interactive Calculator built with React in Redux for performing basic arithmetic operations seamlessly.',
          path: '/calculatorRedux',
        },
        {
          title: 'TO DO List in Redux',
          description: 'Simple and intuitive To Do List app built with React in Redux for managing tasks efficiently.',
          path: '/todolistRedux',
        },
        {
          title: 'Weather APP in Redux',
          description: 'Simple and intuitive Weather app built with React in Redux for managing tasks efficiently.',
          path: '/weatherApp',
        },
        {
          title: 'Rock Paper Scissors',
          description: 'Simple and intuitive Rock, Paper, Scissors built with React for entertainment.',
          path: '/rps',
        },
        {
          title: 'Quiz App',
          description: 'Simple and intuitive Quiz App built with React for entertainment.',
          path: '/quiz-app',
        },
        {
          title: 'Tic-Tac-Toe Game',
          description: 'Simple and intuitive Quiz App built with React for entertainment.',
          path: '/tic-tac-toe',
        },
        {
          title: 'NetflixGpt',
          description: 'Developed a Netflix-style app with ReactJS, Firebase, Redux, Gemini API, and responsive UI.',
          path: '/netflixGpt'
        },
        {
          title: 'My-Youtube',
          description: 'Developed YouTube clone with ReactJS, Redux, TailwindCSS, and YouTube API.',
          path: '/my-youtube'
        }
      ])
    }, 1000);
  }, []);

  return !projects ? (<Shimmer />) : (
    <div className="flex flex-col items-center min-h-screen py-14 justify-center bg-white text-black">
      <header className="mb-8">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-lg mt-2 text-center">Showcasing my work in React</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-white">{project.description}</p>
            {/* Change this anchor to Link */}
            <Link
              to={project.path}
              className="mt-4 inline-block bg-white text-black py-2 px-4 rounded">
              View Project
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
