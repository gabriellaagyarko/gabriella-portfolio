// HomePage.js - Home Page Component
import React from 'react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Portfolio</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I'm a passionate Full-Stack Developer dedicated to creating innovative digital solutions 
            that make a difference. Let's build something amazing together.
          </p>
          
          {/* Mission Statement Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission Statement</h2>
            <p className="text-gray-700 leading-relaxed">
              To leverage cutting-edge technology and creative problem-solving to develop scalable, 
              user-centric applications that drive business success and enhance user experiences. 
              I believe in continuous learning, collaborative development, and delivering excellence 
              in every project.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('about')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
            >
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;