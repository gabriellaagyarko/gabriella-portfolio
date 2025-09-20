// AboutPage.js
import React from 'react';
import { User, Download } from 'lucide-react';

const AboutPage = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/GABRIELLA AGYARKO_RES.pdf';
    link.download = 'GABRIELLA AGYARKO_RES.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                <User size={80} className="text-white" />
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Gabriella Agyarko</h1>
              <h2 className="text-xl text-blue-600 mb-6">Full-Stack Developer</h2>
              <div className="prose prose-lg text-gray-700 mb-8">
                <p className="mb-4">
                  Hello! I'm Gabriella Agyarko, a passionate full-stack developer with over 3 years of experience 
                  creating innovative web and mobile applications. I specialize in React, Node.js, and 
                  modern web technologies, with a keen eye for user experience and clean, maintainable code.
                </p>
                <p className="mb-4">
                  My journey in software development began during my Computer Science studies, where I 
                  discovered my love for solving complex problems through code. Since then, I've worked 
                  with startups and established companies, helping them bring their digital visions to life.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge through blog posts and mentoring fellow developers.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <button 
                  onClick={handleResumeDownload}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;