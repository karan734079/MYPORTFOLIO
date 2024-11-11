const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-xl mt-2">Discover my journey and skills</p>
      </header>

      <section className="max-w-3xl px-4">
        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-xl p-6">
          <p className="text-lg mb-6">
            Hi, I’m <span className="text-white font-bold">Karan Kumar</span>, a recent MCA graduate passionate about frontend development and creating intuitive, engaging web experiences. With a solid foundation in <span className="font-semibold">HTML, CSS, JavaScript, and React.js</span>, I specialize in building responsive, dynamic web applications using tools like <span className="font-semibold">Tailwind CSS</span> and <span className="font-semibold">Redux</span> for efficient state management.
          </p>
          <p className="text-lg text-white mb-6">
            My portfolio showcases several hands-on projects, including <span className="text-white font-bold">MY-YOUTUBE</span>, a YouTube clone with features like live chat and dynamic video display, and <span className="font-bold text-white">NetflixGpt</span>, a Netflix-style app that integrates secure authentication and personalized recommendations. I focus on creating seamless, user-friendly interfaces that leverage the latest in frontend technologies.
          </p>
          <p className="text-lg text-white mb-6">
            I am continuously learning and honing my skills through courses, certifications, and real-world projects. Whether it&apos;s through my <span className="font-semibold text-white">Virtual Software Engineering Internship</span> with JPMorgan Chase & Co. or my participation in tech events, I strive to bring creativity and a detail-oriented approach to every project I undertake.
          </p>
          <p className="text-lg text-white">
            Let’s connect and explore how we can make web experiences better together!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
