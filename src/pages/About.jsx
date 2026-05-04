const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-5xl font-extrabold text-center mb-6 animate-pulse">
          About Me 👨‍💻
        </h1>

        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-8">
          Hi, I'm <span className="text-cyan-400 font-bold">Toukir Sarder</span> —
          a CSE student and aspiring software developer from Bangladesh.
          I love building web applications, solving programming problems,
          and learning new technologies every day.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          
          <div className="bg-slate-700/40 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              🚀 Current Focus
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>• MERN Stack Development</li>
              <li>• React & Tailwind CSS</li>
              <li>• Python Automation & API Projects</li>
              <li>• Competitive Programming</li>
            </ul>
          </div>

          <div className="bg-slate-700/40 p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              🛠 Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "Python",
                "C",
                "Git",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-3xl font-bold mb-4">🎯 Goal</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My goal is to become a professional programmer and software engineer,
            build impactful products, and continuously improve my problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;